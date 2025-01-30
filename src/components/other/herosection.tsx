// import HeroImage from '@/components/other/heroImage';
import { Box, Container } from '@chakra-ui/react';

// import JoinButton from '@/components/other/joinButton';

export default function HeroSection() {
  return (
    <Box h="100vh" w="100%" position="relative">
      <Container
        maxW="full"
        h="100%"
        backgroundColor={'bg'}
        overflow={'visible'}
      >
        {/* <HeroImage /> */}
        {/* <Flex
          h="100%"
          align="center"
          justify="center"
          position="relative"
          zIndex={1}
        >
          <VStack
            gap={6}
            textAlign="center"
            //backgroundColor={'blackAlpha.600'}
            p="4"
            backdropFilter="blur(10px);"
            rounded="xl"
            shadow="0 0 20px 3px #000"
          >
            <Heading
              color="white"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight="bold"
            >
              RoboRaiders
            </Heading>
            <Text
              color="white"
              fontSize={{ base: 'lg', md: 'xl' }}
              maxW="600px"
            >
              Team 3681
            </Text>
            <JoinButton />
          </VStack>
        </Flex> */}
      </Container>
    </Box>
  );
}
