/**
 * Lightweight markdown → HTML converter with KHI inline Tailwind classes.
 * No external dependencies required.
 */

export function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const yamlBlock = match[1];
  const content = match[2].trimStart();

  const data: Record<string, unknown> = {};
  const lines = yamlBlock.split(/\r?\n/);

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    // Array field: starts with "tags:" then next lines are "- item"
    const arrayMatch = line.match(/^(\w[\w-]*):\s*\[(.+)\]$/);
    if (arrayMatch) {
      const key = arrayMatch[1];
      const items = arrayMatch[2].split(",").map((s) =>
        s.trim().replace(/^["']|["']$/g, "")
      );
      data[key] = items;
      i++;
      continue;
    }

    // Inline array (YAML flow sequence)
    const inlineArrayMatch = line.match(/^(\w[\w-]*):\s*\[/);
    if (inlineArrayMatch && line.endsWith("]")) {
      const key = inlineArrayMatch[1];
      const inner = line.slice(line.indexOf("[") + 1, line.lastIndexOf("]"));
      data[key] = inner.split(",").map((s) => s.trim().replace(/^["']|["']$/g, ""));
      i++;
      continue;
    }

    // Block array: key: (next lines are "  - item" or "- item")
    const blockArrayKey = line.match(/^(\w[\w-]*):\s*$/);
    if (blockArrayKey && i + 1 < lines.length && lines[i + 1].trim().startsWith("-")) {
      const key = blockArrayKey[1];
      const items: string[] = [];
      i++;
      while (i < lines.length && lines[i].trim().startsWith("-")) {
        items.push(lines[i].trim().slice(1).trim().replace(/^["']|["']$/g, ""));
        i++;
      }
      data[key] = items;
      continue;
    }

    // Simple key: "value"
    const kvMatch = line.match(/^(\w[\w-]*):\s*["']?(.*?)["']?$/);
    if (kvMatch) {
      data[kvMatch[1]] = kvMatch[2].trim();
    }
    i++;
  }

  return { data, content };
}

// --- Markdown → HTML ---

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function inlineMarkdown(text: string): string {
  return text
    // Bold + italic
    .replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>")
    // Bold
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    // Italic
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    // Inline code
    .replace(/`([^`]+)`/g, '<code class="bg-[#f2f4f6] px-1.5 py-0.5 rounded text-sm font-mono text-[#0b2c3d]">$1</code>')
    // Links
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class="text-[#fa6a25] underline font-medium hover:text-[#d9531a]"' +
        (/* external link? */ "$2".startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : "") +
        ">$1</a>"
    );
}

// Handle link targets properly
function inlineMarkdownSafe(text: string): string {
  // Bold + italic
  let out = text.replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>");
  // Bold
  out = out.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  // Italic
  out = out.replace(/\*(.+?)\*/g, "<em>$1</em>");
  // Inline code
  out = out.replace(
    /`([^`]+)`/g,
    '<code class="bg-[#f2f4f6] px-1.5 py-0.5 rounded text-sm font-mono text-[#0b2c3d]">$1</code>'
  );
  // Links — detect external
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, label, href) => {
    const isExternal = href.startsWith("http");
    const target = isExternal ? ' target="_blank" rel="noopener noreferrer"' : "";
    return `<a href="${href}" class="text-[#fa6a25] underline font-medium hover:text-[#d9531a]"${target}>${label}</a>`;
  });
  return out;
}

function renderTable(lines: string[]): string {
  const rows = lines
    .filter((l) => l.trim().startsWith("|") && !l.match(/^\|[-| :]+\|$/))
    .map((l) =>
      l
        .trim()
        .replace(/^\||\|$/g, "")
        .split("|")
        .map((c) => c.trim())
    );

  if (rows.length === 0) return "";

  const [header, ...body] = rows;
  const thCells = header
    .map((h) => `<th class="px-4 py-2 text-left font-semibold text-[#0b2c3d] border border-[#06131d]/10 bg-[#f2f4f6]">${inlineMarkdownSafe(h)}</th>`)
    .join("");
  const bodyRows = body
    .map(
      (row) =>
        `<tr>${row
          .map(
            (cell) =>
              `<td class="px-4 py-2 text-[#06131d]/80 border border-[#06131d]/10">${inlineMarkdownSafe(cell)}</td>`
          )
          .join("")}</tr>`
    )
    .join("\n");

  return `<div class="overflow-x-auto mb-6"><table class="w-full text-sm border-collapse"><thead><tr>${thCells}</tr></thead><tbody>${bodyRows}</tbody></table></div>`;
}

export function markdownToHtml(md: string): string {
  const lines = md.split(/\r?\n/);
  const output: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Skip empty lines
    if (line.trim() === "") {
      i++;
      continue;
    }

    // H2
    if (line.startsWith("## ")) {
      output.push(
        `<h2 class="text-2xl font-bold mt-8 mb-4 text-[#0b2c3d]">${inlineMarkdownSafe(line.slice(3).trim())}</h2>`
      );
      i++;
      continue;
    }

    // H3
    if (line.startsWith("### ")) {
      output.push(
        `<h3 class="text-xl font-semibold mt-6 mb-3 text-[#0b2c3d]">${inlineMarkdownSafe(line.slice(4).trim())}</h3>`
      );
      i++;
      continue;
    }

    // H4
    if (line.startsWith("#### ")) {
      output.push(
        `<h4 class="text-lg font-semibold mt-4 mb-2 text-[#0b2c3d]">${inlineMarkdownSafe(line.slice(5).trim())}</h4>`
      );
      i++;
      continue;
    }

    // Horizontal rule
    if (line.match(/^---+$/) || line.match(/^\*\*\*+$/)) {
      output.push('<hr class="my-8 border-[#06131d]/10" />');
      i++;
      continue;
    }

    // Table (line starts with | and there's a separator line next)
    if (line.trim().startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      output.push(renderTable(tableLines));
      continue;
    }

    // Unordered list
    if (line.match(/^[-*] /)) {
      const items: string[] = [];
      while (i < lines.length && lines[i].match(/^[-*] /)) {
        items.push(lines[i].replace(/^[-*] /, "").trim());
        i++;
      }
      const liHtml = items
        .map(
          (item) =>
            `<li class="text-[#06131d]/80">${inlineMarkdownSafe(item)}</li>`
        )
        .join("\n");
      output.push(`<ul class="list-disc pl-6 mb-6 space-y-2">\n${liHtml}\n</ul>`);
      continue;
    }

    // Numbered list
    if (line.match(/^\d+\. /)) {
      const items: string[] = [];
      while (i < lines.length && lines[i].match(/^\d+\. /)) {
        items.push(lines[i].replace(/^\d+\. /, "").trim());
        i++;
      }
      const liHtml = items
        .map(
          (item) =>
            `<li class="text-[#06131d]/80">${inlineMarkdownSafe(item)}</li>`
        )
        .join("\n");
      output.push(`<ol class="list-decimal pl-6 mb-6 space-y-2">\n${liHtml}\n</ol>`);
      continue;
    }

    // Blockquote / callout
    if (line.startsWith("> ")) {
      const bqLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        bqLines.push(lines[i].slice(2).trim());
        i++;
      }
      const inner = bqLines.map((l) => inlineMarkdownSafe(l)).join(" ");
      output.push(
        `<div class="bg-orange-50 border-l-4 border-[#fa6a25] p-5 mb-6 rounded-r-xl"><p class="text-[#06131d]/80">${inner}</p></div>`
      );
      continue;
    }

    // Regular paragraph — collect until blank line
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].startsWith("## ") &&
      !lines[i].startsWith("### ") &&
      !lines[i].startsWith("#### ") &&
      !lines[i].match(/^[-*] /) &&
      !lines[i].match(/^\d+\. /) &&
      !lines[i].trim().startsWith("|") &&
      !lines[i].startsWith("> ") &&
      !lines[i].match(/^---+$/)
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length > 0) {
      const paraText = paraLines.join(" ").trim();
      if (paraText) {
        output.push(`<p class="mb-4">${inlineMarkdownSafe(paraText)}</p>`);
      }
    }
  }

  return output.join("\n");
}
