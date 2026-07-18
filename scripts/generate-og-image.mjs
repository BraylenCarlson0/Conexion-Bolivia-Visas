import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const publicDir = join(root, "public");

const WIDTH = 1200;
const HEIGHT = 630;

const overlaySvg = Buffer.from(
  `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0d2b45" stop-opacity="0.88"/>
        <stop offset="100%" stop-color="#34698f" stop-opacity="0.82"/>
      </linearGradient>
    </defs>
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#g)"/>
  </svg>`,
);

const background = await sharp(join(root, "public/images/salar-mirror.png"))
  .resize(WIDTH, HEIGHT, { fit: "cover", position: "center" })
  .png()
  .toBuffer();

const logo = await sharp(join(root, "public/images/logo-horizontal.png"))
  .resize(520, 156, { fit: "inside" })
  .png()
  .toBuffer();

const logoMeta = await sharp(logo).metadata();

const output = join(publicDir, "images/og-image.png");

await sharp(background)
  .composite([
    { input: overlaySvg, blend: "over" },
    {
      input: logo,
      left: Math.round((WIDTH - logoMeta.width) / 2),
      top: Math.round((HEIGHT - logoMeta.height) / 2),
    },
  ])
  .png({ compressionLevel: 9 })
  .toFile(output);

console.log(`Wrote ${output} (${WIDTH}x${HEIGHT})`);
