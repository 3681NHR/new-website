import { ImageCardProps } from './imageCard';
import ImageCard from './imageCard';
import galleryImages from './galleryImages.json';
import { Grid } from '@chakra-ui/react';

export default function ImageGrid() {
  return (
    <Grid
      templateColumns={{
        xl: 'repeat(4, 1fr)',
        base: '1fr',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
      }}
      gap="6"
      //autoRows="auto"
      //autoFlow="dense"
    >
      {galleryImages.galleryImages.map((image: ImageCardProps, index) => (
        <ImageCard
          key={index}
          aspectRatio={image.aspectRatio}
          imageUrl={image.imageUrl}
          previewWidth={image.previewWidth}
          previewHeight={image.previewHeight}
          imgPlaceholderData={image.imgPlaceholderData}
          width={image.width}
          height={image.height}
        />
      ))}
    </Grid>
  );
}
