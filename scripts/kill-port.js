#!/usr/bin/env node

const { execSync } = require("child_process");

const DEFAULT_PORTS = [3000, 3076];
const ports = process.argv.length > 2 ? process.argv.slice(2) : DEFAULT_PORTS;

function killPort(port) {
  if (process.platform === "win32") {
    killPortWindows(port);
    return;
  }

  killPortUnix(port);
}

function killPortWindows(port) {
  try {
    const output = execSync(`netstat -ano | findstr :${port}`, {
      encoding: "utf8",
      stdio: ["pipe", "pipe", "ignore"],
    });

    const pids = new Set();

    for (const line of output.split("\n")) {
      if (!line.includes("LISTENING")) continue;

      const pid = line.trim().split(/\s+/).at(-1);
      if (pid && pid !== "0") pids.add(pid);
    }

    if (pids.size === 0) {
      console.log(`No process found on port ${port}`);
      return;
    }

    for (const pid of pids) {
      execSync(`taskkill /F /PID ${pid}`, { stdio: "ignore" });
      console.log(`Killed process ${pid} on port ${port}`);
    }
  } catch (error) {
    if (error.status === 1) {
      console.log(`No process found on port ${port}`);
      return;
    }

    throw error;
  }
}

function killPortUnix(port) {
  try {
    execSync(`lsof -ti :${port} -sTCP:LISTEN | xargs kill -9`, {
      stdio: "inherit",
      shell: true,
    });
    console.log(`Killed process on port ${port}`);
  } catch {
    console.log(`No process found on port ${port}`);
  }
}

for (const port of ports) {
  killPort(port);
}
