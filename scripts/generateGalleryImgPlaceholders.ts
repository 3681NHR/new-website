import fs from 'node:fs/promises';
import { getPlaiceholder } from 'plaiceholder';

try {
  const images = JSON.parse(
    await fs.readFile('./src/app/gallery/galleryImages.json', 'utf-8')
  );

  for (const img of images.galleryImages) {
    const relativeImgPath = './public' + img.imageUrl;
    const imgBuffer = await fs.readFile(relativeImgPath);

    const { base64 } = await getPlaiceholder(imgBuffer);
    img.imgPlaceholderData = base64;

    console.log(base64);
  }

  await fs.writeFile(
    './src/app/gallery/galleryImages.json',
    JSON.stringify(images, null, 2)
  );
} catch (err) {
  console.error(err);
}
