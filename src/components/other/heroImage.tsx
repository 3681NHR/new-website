'use client';

import { Image as ChakraImage } from '@chakra-ui/react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HeroImage() {
  const [sam, setSam] = useState(false);

  useEffect(() => {
    setSam(Math.floor(Math.random() * 100) === 33);
  }, []);

  return (
    <>
      {sam ? (
        <ChakraImage zIndex={0} asChild>
          <Image
            src="/sam.png"
            alt="Cover Image"
            width={1000}
            height={1000}
            //fill
            priority
          />
        </ChakraImage>
      ) : (
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
      )}
    </>
  );
}
