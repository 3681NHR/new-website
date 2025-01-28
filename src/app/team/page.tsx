//todo: add motion
'use client';

import {
  Box,
  Container,
  Text,
  SimpleGrid,
  VStack,
  Image,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { FaRobot, FaTrophy, FaUsers, FaClock } from 'react-icons/fa';
import MemberCard from './membercard';

import { MemberCard as Member } from './membercard';

import membersData from './members.json';

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
          <Box overflowX="auto" w="full">
            <Flex gap={4} minW="max-content" py={4}>
              {membersData.members.map((member: Member, index) => (
                <MemberCard
                  key={index}
                  name={member.name}
                  photoURL={member.photoURL}
                  description={member.description}
                  group={member.group}
                />
              ))}
            </Flex>
          </Box>
          <Box maxW={'70%'}>
            <Text fontSize="xl" color={'gray.fg'}>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Non
              pellentesque et a ipsum sed imperdiet aenean sed malesuada.
              Placerat tempus risus lobortis metus litora hac himenaeos nunc.
              Orci vitae felis vitae sem natoque pulvinar donec maecenas. Neque
              ullamcorper quisque posuere aliquet consectetur consequat
              adipiscing. Netus vulputate vehicula eros pulvinar iaculis est.
              Venenatis amet mus pellentesque ultrices suspendisse parturient
              feugiat lacinia. <br /> Sodales condimentum quam parturient et
              imperdiet pulvinar habitasse semper. Accumsan luctus integer non
              porta ornare. Elit taciti varius proin gravida torquent. Ridiculus
              cras suscipit per vestibulum adipiscing taciti massa orci. Fames
              massa praesent nostra cubilia inceptos lobortis. Nam malesuada
              duis ornare pretium, aenean rhoncus nec maximus. Ultrices faucibus
              vel euismod; posuere nulla dictumst vitae. Iaculis et dolor semper
              pulvinar mus laoreet praesent parturient lacus. Purus metus aptent
              congue aliquet nostra. Massa tristique ultricies lacus ridiculus
              ex duis. Maximus donec nec eu praesent hendrerit sit commodo
              felis. Ipsum at eget; enim aptent nascetur netus. Diam faucibus
              mus suspendisse nulla suspendisse. Nascetur ultricies laoreet
              dictum vulputate conubia pulvinar. Consectetur varius placerat
              egestas dui scelerisque vitae. Non torquent sit interdum sagittis
              non augue mauris tempor. Leo ligula class ullamcorper ullamcorper
              suscipit bibendum commodo suspendisse. Pellentesque montes
              sollicitudin vivamus cursus fusce tempor. Ante malesuada montes
              suspendisse auctor facilisis rhoncus; eu rutrum gravida. Sociosqu
              aliquam senectus ut eleifend senectus himenaeos. Diam ligula
              mattis libero, nisi nulla donec.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
