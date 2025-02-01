import { Container, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import sponsorsData from './sponsors.json';

import SponsorCard from './sponsorCard';

export interface Sponsor {
  name: string;
  logoUrl: string;
  tier: string; //"raider" | "captain" | "add more"
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
        ))}
      </Grid>
    </Container>
  );
}
