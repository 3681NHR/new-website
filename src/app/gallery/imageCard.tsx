'use client';

import { Box, GridItem, Image as ChakraImage } from '@chakra-ui/react';
import { motion } from 'motion/react';
import Image from 'next/image';

const MotionBox = motion.create(Box);

export interface ImageCardProps {
  aspectRatio: string; //'1x1' | '2x1' | '1x2'; //grid col/row width x height
  imageUrl: string; // url to image
  imgPlaceholderData: string; // data uri for image placeholder blur data in Base64
  previewWidth: number; // size of image to show in the grid
  previewHeight: number; // size of image to show in the grid
  width: number; // size of image to show in the full screen modal
  height: number; // size of image to show in the full screen modal
}

export default function ImageCard({
  aspectRatio,
  imageUrl,
  previewWidth,
  previewHeight,
  width,
  height,
  imgPlaceholderData,
}: ImageCardProps) {
  const boxSize = (size: '1x1' | '2x1' | '1x2') => {
    switch (size) {
      case '1x1':
        return { colSpan: 1, rowSpan: 1 };
      case '2x1':
        return { colSpan: 2, rowSpan: 1 };
      case '1x2':
        return { colSpan: 1, rowSpan: 2 };
      default:
        return { colSpan: 1, rowSpan: 1 };
    }
  };

  const widtherrorfixplaceholder = width * 2;
  const heighterrorfixplaceholder = height * 2;

  return (
    <GridItem
      colSpan={boxSize(aspectRatio as '1x1' | '2x1' | '1x2').colSpan}
      rowSpan={boxSize(aspectRatio as '1x1' | '2x1' | '1x2').rowSpan}
    >
      <Box
        display="none"
        height={heighterrorfixplaceholder}
        width={widtherrorfixplaceholder}
      />
      <MotionBox
        style={{ borderRadius: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        //initial={{ }}
        //animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1, ease: 'easeInOut' }}
        cursor={'pointer'}
        height={'100%'}
        position={'relative'}
      >
        <ChakraImage rounded={'2xl'} asChild>
          <Image
            src={imageUrl}
            alt="img"
            style={{
              width: '100%',
              height: 'auto',
            }}
            width={previewWidth}
            height={previewHeight}
            placeholder="blur"
            blurDataURL={imgPlaceholderData}
          />
        </ChakraImage>
      </MotionBox>
    </GridItem>
  );
}
