import { Container, Grid, Heading, Text, VStack } from '@chakra-ui/react';

const sponsorsData = (await import('./sponsors.json')) as {
  sponsors: Array<Sponsor>;
};
import SponsorCard from './sponsorCard';

type sponsorTier = 'raider' | 'captain' | 'major';

export interface Sponsor {
  name: string;
  logoUrl: string;
  tier: sponsorTier; //"raider" | "captain" | "add more"
  url: string;
}

export default function SponsorsPage() {
  return (
    <Container maxW="container.xl" py={10} bg={'bg'}>
      <VStack gap={8} mb={12}>
        <Heading
          textStyle={'5xl'}
          textAlign="center"
          background="fg"
          //background="linear-gradient(45deg, rgba(46,30,170,1) 0%, rgba(253,107,45,1) 100%)"
          bgClip="text"
          mt={20}
        >
          Our Sponsors
        </Heading>
        <Text fontSize="lg" textAlign="center" color="fg.muted">
          We are grateful for the support of our amazing sponsors who make our
          robotics program possible.
        </Text>
      </VStack>

      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        autoRows="1fr"
        gap={8}
      >
        {sponsorsData.sponsors.map((sponsor: Sponsor, index) => (
          <SponsorCard
            key={index}
            // name={sponsor.name}
            // logoUrl={sponsor.logoUrl}
            // tier={sponsor.tier}
            // url={sponsor.url}
            {...sponsor}
            index={index}
          />
          // <MotionBox
          //   key={index}
          //   whileHover={{ scale: 1.05 }}
          //   whileTap={{ scale: 0.95 }}
          //   initial={{ opacity: 0, y: 20 }}
          //   animate={{ opacity: 1, y: 0 }}
          //   transition={{ duration: 0.3, delay: index * 0.1 }}
          //   onClick={() => window.open(sponsor.url, '_blank')}
          //   cursor={'pointer'}
          //   height={'100%'}
          // >
          //   <Box
          //     borderWidth="1px"
          //     borderRadius="lg"
          //     borderColor={getTierColor(sponsor.tier)}
          //     overflow="hidden"
          //     p={6}
          //     textAlign="center"
          //     bg="bg.subtle"
          //     position="relative"
          //     height="100%"
          //   >
          //     <Image
          //       src={sponsor.logoUrl}
          //       alt={`${sponsor.name} logo`}
          //       maxH={'100px'}
          //       mx="auto"
          //       objectFit="contain"
          //     />
          //     <Text
          //       my={4}
          //       fontSize="lg"
          //       fontWeight="semibold"
          //       color="gray.emphasized"
          //       position="absolute"
          //       left={'50%'}
          //       transform="translateX(-50%)"
          //       bottom={0}
          //     >
          //       {sponsor.name}
          //     </Text>
          //     <Badge
          //       position="absolute"
          //       top={2}
          //       right={2}
          //       px={2}
          //       py={1}
          //       borderRadius="md"
          //       bg={getTierColor(sponsor.tier)}
          //       color="white"
          //       fontSize="sm"
          //       textTransform="capitalize"
          //     >
          //       {sponsor.tier}
          //     </Badge>
          //   </Box>
          // </MotionBox>
        ))}
      </Grid>
    </Container>
  );
}
