import { Image as ChakraImage } from '@chakra-ui/react';
import Image from 'next/image';

export default function HeroImage() {
  return (
    <ChakraImage zIndex={0} asChild>
      <Image
        src="/logo.svg"
        alt="Cover Image"
        width={1000}
        height={1000}
        //fill
        priority
      />
    </ChakraImage>
  );
}
