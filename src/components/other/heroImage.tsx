import { Box, Flex, Image as ChakraImage } from '@chakra-ui/react';
import Image from 'next/image';
import { ReactNode } from 'react';

export default function MainPageLayout({ children }: { children: ReactNode }) {
  return (
    <Box as="main" h="100vh" color="white">
      <Flex position="fixed" top="0" right="0" bottom="0" left="0" zIndex="-1">
        <Flex flexShrink="0">
          <ChakraImage width="100vw" mx="auto" asChild>
            <Image
              src="/teamphoto.webp"
              alt="Cover Image"
              width={900}
              height={1080}
            />
          </ChakraImage>
        </Flex>
      </Flex>
      {children}
    </Box>
  );
}
