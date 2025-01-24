import {
  Center,
  Link as ChakraLink,
  Container,
  HStack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function Navbar() {
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
          <HStack className="px-4" gap={'4'}>
            <NavbarItem href="/" title="Home" />
            <NavbarItem href="/team" title="Our Team" />
            <NavbarItem href="/sponsors" title="Sponsors" />
            <NavbarItem href="/robot" title="Robot" />
            <NavbarItem href="/gallery" title="Gallery" />
          </HStack>
        </Center>
      </Container>
    </nav>
  );
}

function NavbarItem(props: { href: string; title: string }) {
  const { href, title } = props;
  return (
    <ChakraLink
      bgColor={'transparent'} //{"bg.muted"}
      backdropFilter={'auto'}
      backdropBlur={'20px'}
      paddingX={'3'}
      paddingY={'1.5'}
      rounded={'lg'}
      outline={'none'}
      shadow={'lg'}
      asChild
    >
      <Link href={href}>
        <Text textStyle={'xl'} fontWeight={'semibold'}>
          {title}
        </Text>
      </Link>
    </ChakraLink>
  );
}
