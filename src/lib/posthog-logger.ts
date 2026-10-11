import { SeverityNumber } from "@opentelemetry/api-logs";
import { OTLPLogExporter } from "@opentelemetry/exporter-logs-otlp-http";
import { LoggerProvider, SimpleLogRecordProcessor } from "@opentelemetry/sdk-logs";

const projectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

let loggerProvider: LoggerProvider | undefined;

function getPostHogLogger() {
  if (!projectToken || !host) {
    const missingVariable = projectToken
      ? "NEXT_PUBLIC_POSTHOG_HOST"
      : "NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN";

    if (process.env.NODE_ENV === "development") {
      throw new Error(
        `${missingVariable} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${missingVariable} is configured`,
      );
    }

    return;
  }

  if (!loggerProvider) {
    loggerProvider = new LoggerProvider({
      processors: [
        new SimpleLogRecordProcessor({
          exporter: new OTLPLogExporter({
            url: `${host.replace(/\/$/, "")}/i/v1/logs`,
            headers: { Authorization: `Bearer ${projectToken}` },
          }),
        }),
      ],
    });
  }

  return loggerProvider.getLogger("posthog-integration");
}

export async function capturePostHogLog(message: string) {
  const logger = getPostHogLogger();
  if (!logger || !loggerProvider) return;

  try {
    logger.emit({
      body: message,
      severityNumber: SeverityNumber.INFO,
      severityText: "INFO",
    });
    await loggerProvider.forceFlush();
  } catch {
    // Log delivery must not affect the application's request outcome.
  }
}
