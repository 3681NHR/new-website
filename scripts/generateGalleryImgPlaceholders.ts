import fs from 'node:fs/promises';
import { getPlaiceholder } from 'plaiceholder';

interface ImageCardProps {
  aspectRatio: string; //'1x1' | '2x1' | '1x2'; //grid col/row width x height
  imageUrl: string; // url to image
  imgPlaceholderData: string; // data uri for image placeholder blur data in Base64
  previewWidth: number; // size of image to show in the grid
  previewHeight: number; // size of image to show in the grid
  width: number; // size of image to show in the full screen modal
  height: number; // size of image to show in the full screen modal
}

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
