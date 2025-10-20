// utils/dirname.js
import { fileURLToPath } from "url";
import path from "path";

export const getDirname = (metaUrl) => path.dirname(fileURLToPath(metaUrl));
