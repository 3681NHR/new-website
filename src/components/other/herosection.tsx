import HeroImage from '@/components/other/heroImage';
import { Box, Container } from '@chakra-ui/react';

// import JoinButton from '@/components/other/joinButton';

<<<<<<< HEAD
export default function HeroSection() {
=======
interface HeroSectionProps {
  //backgroundImage: string;
  heading: string;
  subheading: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  //backgroundImage,
  heading,
  subheading,
  buttonText,
  onButtonClick,
}) => {
>>>>>>> 9415b64 (trying to fix hero section)
  return (
    <Box
      h="75vh"
      w={{ base: 'full', lg: '50%', md: '75%', xl: '40%' }}
      position="relative"
<<<<<<< HEAD
      mx={'auto'}
      mt={'6rem'}
      overflow={'visible'}
=======
      //backgroundImage={`url(${backgroundImage})`}
      //backgroundSize="cover"
      //backgroundPosition="center"
      //backgroundRepeat="no-repeat"
>>>>>>> 9415b64 (trying to fix hero section)
    >
      <Container
        maxW="full"
        h="100%"
        backgroundColor={'transparent'}
        overflow={'visible'}
      >
        <HeroImage />
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
