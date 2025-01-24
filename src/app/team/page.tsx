//todo: add motion
'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Image,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { FaRobot, FaTrophy, FaUsers, FaClock } from 'react-icons/fa';

interface StatItemProps {
  icon: React.ElementType;
  label: string;
  value: string;
}

const StatItem: React.FC<StatItemProps> = ({
  icon,
  label,
  value,
}: StatItemProps) => {
  return (
    <VStack
      p={6}
      bg={'gray.muted'}
      rounded="xl"
      shadow="md"
      transition="all 0.3s"
      _hover={{ transform: 'translateY(-5px)', shadow: 'lg' }}
    >
      <Icon as={icon} w={10} h={10} color="blue.solid" />
      <Text fontSize="xl" fontWeight="bold">
        {value}
      </Text>
      <Text color={'gray.fg'}>{label}</Text>
    </VStack>
  );
};

export default function AboutPage() {
  return (
    //might change background color to {"bg"}
    <Box bg={'#000000'} minH="100vh" py={20}>
      <Container maxW="container.xl">
        <VStack gap={12}>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="space-between"
            gap={8}
          >
            <Box flex={1}>
              <Text fontSize="xl" color={'gray.fg'}>
                We are the FRC (First Robotics Competition) team of Nathan Hale
                High School in Seattle WA, number 3681. We build a robot every
                year for each year&apos;s game. We currently have around 25
                students and four adult mentors. We&apos;re one of the smaller
                teams in the district with no dedicated teacher or classroom,
                and our robot is designed, built, programmed and tested by
                students.
              </Text>
            </Box>
            <Box flex={1}>
              <Image
                src="/teamphoto.jpg"
                alt="Team Photo"
                rounded="2xl"
                shadow="2xl"
              />
            </Box>
          </Flex>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8} w="full">
            <StatItem
              icon={FaUsers}
              value="more than 20"
              label="Team Members"
            />
            <StatItem icon={FaTrophy} value="idk" label="Awards Won" />
            <StatItem icon={FaRobot} value="inf" label="Robots Built" />
            <StatItem icon={FaClock} value="inf" label="Hours of Work" />
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
