import { Image as ChakraImage } from '@chakra-ui/react';
import Image from 'next/image';

export default function HeroImage() {
  return (
    <ChakraImage zIndex={0} asChild>
      <Image
        src="/teamphoto.webp"
        alt="Cover Image"
        // width={3073}
        // height={1415}
        fill
        className="bg-img"
        priority
        //sizes="100vw"
      />
    </ChakraImage>
  );
}
