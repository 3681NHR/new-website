'use client';

import { Box, Image, Text, Badge } from '@chakra-ui/react';
import { Sponsor } from './page';
import { motion } from 'motion/react';

const MotionBox = motion.create(Box);

interface SponsorCardProps extends Sponsor {
  index: number;
}

export default function SponsorCard({
  name,
  tier,
  logoUrl,
  url,
  index,
}: SponsorCardProps) {
  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'raider':
        return 'red.500';
      case 'captain':
        return 'yellow.500';
      default:
        return 'gray.200';
    }
  };

  return (
    <MotionBox
      //key={index}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 * index }}
      onClick={() => window.open(url, '_blank')}
      cursor={'pointer'}
      height={'100%'}
    >
      <Box
        borderWidth="1px"
        borderRadius="lg"
        borderColor={getTierColor(tier)}
        overflow="hidden"
        p={6}
        textAlign="center"
        bg="bg.subtle"
        position="relative"
        height="100%"
      >
        <Image
          src={logoUrl}
          alt={`${name} logo`}
          maxH={'100px'}
          mt={0}
          mx="auto"
          objectFit="contain"
        />
        <Text
          my={4}
          fontSize="lg"
          fontWeight="semibold"
          color="fg.subtle"
          position="absolute"
          left={'50%'}
          transform="translateX(-50%)"
          bottom={0}
        >
          {name}
        </Text>
        <Badge
          position="absolute"
          top={2}
          right={2}
          px={2}
          py={1}
          borderRadius="md"
          bg={getTierColor(tier)}
          color="white"
          fontSize="sm"
          textTransform="capitalize"
        >
          {tier}
        </Badge>
      </Box>
    </MotionBox>
  );
}
