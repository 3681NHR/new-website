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
  Link,
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import {
  HoverCardArrow,
  HoverCardContent,
  HoverCardRoot,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

const FaRobot = dynamic(
  () => import('react-icons/fa').then(mod => mod.FaRobot),
  { ssr: false }
);
const FaTrophy = dynamic(
  () => import('react-icons/fa').then(mod => mod.FaTrophy),
  { ssr: false }
);
const FaUsers = dynamic(
  () => import('react-icons/fa').then(mod => mod.FaUsers),
  { ssr: false }
);
const FaClock = dynamic(
  () => import('react-icons/fa').then(mod => mod.FaClock),
  { ssr: false }
);

//import MemberCard from './membercard';

//import { MemberCard as Member } from './membercard';

//import membersData from './members.json';

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
      bg={'bg.emphasized'}
      rounded="xl"
      shadow="md"
      transition="all 0.3s"
      _hover={{ transform: 'translateY(-5px)', shadow: 'lg' }}
    >
      <Icon as={icon} w={10} h={10} color="fg.info" />
      <Text fontSize="xl" fontWeight="bold" color={'fg'}>
        {value}
      </Text>
      <Text color={'fg.muted'}>{label}</Text>
    </VStack>
  );
};

export default function AboutPage() {
  return (
    //might change background color to {"bg"}
    <Box bg={'bg'} minH="100vh" py={20}>
      <Container maxW="container.xl">
        <VStack gap={12}>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="space-between"
            gap={8}
          >
            <Box flex={1}>
              <Text fontSize="xl" color={'fg'}>
                We are an after-school robotics club at Nathan Hale High School
                in Seattle, WA. Our team competes in the{' '}
                <HoverCardRoot>
                  <HoverCardTrigger asChild>
                    <Link
                      href="https://www.firstinspires.org/robotics/frc"
                      variant="underline"
                      colorPalette="red"
                    >
                      First Robotics Competition
                    </Link>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <Text>
                      The FIRST Robotics Competition is an international high
                      school robotics competition that gives students real-world
                      engineering experience. Teams are given a standard set of
                      parts and a common task to complete in six weeks.
                    </Text>
                    <HoverCardArrow />
                  </HoverCardContent>
                </HoverCardRoot>{' '}
                as Team 3681, for which we build a robot each year to complete a
                task in two district events. Each event consists of
                approximately 15 timed qualifying tournaments with other teams
                in the area, working in alliances of three teams against three
                teams each time, followed by a district playoff.
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
            <StatItem icon={FaUsers} value="20+" label="Team Members" />
            <StatItem icon={FaTrophy} value="4" label="Awards Won" />
            <StatItem icon={FaRobot} value="12" label="Robots Built" />
            <StatItem icon={FaClock} value="infinity" label="Hours of Work" />
          </SimpleGrid>
          {/* <Box overflowX="auto" w="full">
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
          </Box> */}
          <Box maxW={'70%'}>
            <Text fontSize="xl" color={'gray.fg'}>
              Approximately the top 50 teams in Western Washington move on to
              the District Championships, and the top 50 teams from each
              District Championship move on to Worlds. Each year, the
              competition is completely different, and we don’t know the
              objective until the first January of the year. However, we do know
              basic items we will need like a drive system, approximate frame
              size, registration fee, wiring, and programming. The build season
              is incredibly short as district competitions start in March. We
              meet as an after-school club in a common area in the hallway of
              our high school and store our equipment in the mechanical room.
              Starting in September, we meet three days a week but increase to
              four days plus weekends during build season. We are one of the
              smaller teams in the district without a dedicated classroom or
              teacher and our robot is completely designed, tested, wired,
              programmed, and built by us students.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
