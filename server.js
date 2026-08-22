import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

const cjsServer = path.resolve(process.cwd(), "dist", "server.cjs");
const jsServer = path.resolve(process.cwd(), "dist", "server.js");

if (fs.existsSync(cjsServer)) {
  await import(pathToFileURL(cjsServer).href);
} else if (fs.existsSync(jsServer)) {
  await import(pathToFileURL(jsServer).href);
} else {
  console.error("Dist server file not found. Ensure 'npm run build' ran successfully.");
  process.exit(1);
}
