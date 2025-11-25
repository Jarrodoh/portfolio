import { promises as fs } from "fs";
import convert from "heic-convert";

async function main() {
  const inputPath = new URL("../IMG_2639.HEIC", import.meta.url);
  const outputPath = new URL("../public/profile.jpg", import.meta.url);
  const buffer = await fs.readFile(inputPath);
  const outputBuffer = await convert({ buffer, format: "JPEG", quality: 0.9 });
  await fs.writeFile(outputPath, outputBuffer);
  console.log("Converted to", outputPath.pathname);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
