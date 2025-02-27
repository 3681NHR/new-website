'use client';

import { Image as ChakraImage } from '@chakra-ui/react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HeroImage() {
  const [sam, setSam] = useState(false);
  const [logoVariant, setLogoVariant] = useState('default');

  useEffect(() => {
    const variant = Math.floor(Math.random() * 2);

    switch (variant) {
      case 0:
        setLogoVariant('default');
        break;
      case 1:
        setLogoVariant('pixel');
        break;
      default:
        setLogoVariant('default');
        break;
    }
  }, []);

  useEffect(() => {
    setSam(Math.floor(Math.random() * 100) === 33);
  }, []);

  return (
    <>
      {sam ? (
        <ChakraImage zIndex={0} asChild>
          <Image
            src="/3681logos/sam.png"
            alt="Cover Image"
            width={1000}
            height={1000}
            //fill
            priority
          />
        </ChakraImage>
      ) : (
        (logoVariant == 'default' && (
          <ChakraImage zIndex={0} asChild>
            <Image
              src="/3681logos/logo.svg"
              alt="Cover Image"
              width={1000}
              height={1000}
              //fill
              priority
            />
          </ChakraImage>
        )) ||
        (logoVariant == 'pixel' && (
          <ChakraImage zIndex={0} asChild>
            <Image
              src="/3681logos/logo.svg"
              alt="Cover Image"
              width={1000}
              height={1000}
              //fill
              priority
            />
          </ChakraImage>
        ))
      )}
    </>
  );
}
