'use client';

import { usePathname } from 'next/navigation';

import { ColorModeButton } from '@/components/ui/color-mode';
import {
  Center,
  Link as ChakraLink,
  Container,
  HStack,
  Text,
  Button,
  VStack,
  Box,
} from '@chakra-ui/react';
import { FaHamburger } from 'react-icons/fa';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import {
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from '@/components/ui/drawer';

const isMobileUserAgent = (userAgent: string): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    userAgent
  );
};

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setHamburgerMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    console.log(userAgent);
    const initialIsMobile =
      isMobileUserAgent(userAgent) || window.innerWidth <= 700;

    setIsMobile(initialIsMobile);

    const handleWindowResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  if (isMobile === null) {
    return null; // Or a simple loading indicator if needed
  }

  return (
    <nav>
      <Container
        zIndex={'max'}
        position={'fixed'}
        top={'0'}
        left={'0'}
        right={'0'}
        padding={'4'}
        width={'full'}
      >
        <Center>
          {isMobile ? (
            <DrawerRoot
              open={isHamburgerMenuOpen}
              onOpenChange={e => setHamburgerMenuOpen(e.open)}
              placement={'bottom'}
              size={'full'}
            >
              {/* i wrote this conditional rendering with furry paws on just thought you should know :) */}
              {!isHamburgerMenuOpen && (
                <DrawerTrigger asChild>
                  <Button variant="outline" size="lg">
                    <FaHamburger />
                  </Button>
                </DrawerTrigger>
              )}
              <DrawerContent>
                <DrawerBody>
                  <VStack gap={'4'} mt={'20'}>
                    <NavbarItem href="/" title="Home" hamburgerItem />
                    <NavbarItem href="/team" title="Our Team" hamburgerItem />
                    <NavbarItem
                      href="/sponsors"
                      title="Sponsors"
                      hamburgerItem
                    />
                    {/* <NavbarItem href="/robot" title="Robot" hamburgerItem /> */}
                    <NavbarItem href="/gallery" title="Gallery" hamburgerItem />

                    <ColorModeButton />
                  </VStack>
                </DrawerBody>
                <DrawerCloseTrigger />
              </DrawerContent>
            </DrawerRoot>
          ) : (
            <HStack gap={'4'}>
              <NavbarItem href="/" title="Home" hamburgerItem={false} />
              <NavbarItem href="/team" title="Our Team" />
              <NavbarItem href="/sponsors" title="Sponsors" />
              {/* <NavbarItem href="/robot" title="Robot" /> */}
              <NavbarItem href="/gallery" title="Gallery" />
              <ColorModeButton />
            </HStack>
          )}
        </Center>
      </Container>
    </nav>
  );
}

function NavbarItem(
  props: {
    href: string;
    title: string;
    hamburgerItem?: boolean;
  } = { href: '#', title: '', hamburgerItem: false }
) {
  const { href, title, hamburgerItem } = props;

  return (
    <>
      {hamburgerItem ? (
        <Box
          width="full"
          shadow={'lg'}
          rounded={'lg'}
          bgColor={'bg.emphasized'}
          alignItems={'center'}
        >
          <ChakraLink
            paddingX={'6'}
            paddingY={'1.5'}
            rounded={'lg'}
            outline={'none'}
            asChild
          >
            <Link href={href}>
              <Text textStyle={'xl'} fontWeight={'semibold'} color={'fg'}>
                {title}
              </Text>
            </Link>
          </ChakraLink>
        </Box>
      ) : (
        <ChakraLink
          bgColor={'bg.emphasized'}
          paddingX={'3'}
          paddingY={'1.5'}
          rounded={'lg'}
          outline={'none'}
          shadow={'lg'}
          asChild
        >
          <Link href={href}>
            <Text textStyle={'xl'} fontWeight={'semibold'} color={'fg'}>
              {title}
            </Text>
          </Link>
        </ChakraLink>
      )}
    </>
  );
}
