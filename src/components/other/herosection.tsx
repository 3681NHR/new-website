import { Box, Container, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';

import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  backgroundImage: string;
  heading: string;
  subheading: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  heading,
  subheading,
  buttonText,
  onButtonClick,
}) => {
  return (
    <Box
      h="100vh"
      w="100%"
      position="relative"
      backgroundImage={`url(${backgroundImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      {/* Overlay to make text more readable */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bg="blackAlpha.500"
      />

      {/* Content */}
      <Container maxW="container.xl" h="100%">
        <Flex
          h="100%"
          align="center"
          justify="center"
          position="relative"
          zIndex={1}
        >
          <VStack gap={6} textAlign="center">
            <Heading
              color="white"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight="bold"
            >
              {heading}
            </Heading>
            <Text
              color="white"
              fontSize={{ base: 'lg', md: 'xl' }}
              maxW="600px"
            >
              {subheading}
            </Text>
            <Button
              variant={'ghost'}
              size={'lg'}
              onClick={onButtonClick}
              _hover={{ transform: 'translateY(-2px)' }}
              transition="all 0.2s"
            >
              {buttonText}
            </Button>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default HeroSection;
