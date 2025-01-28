'use client';

import {
  Box,
  Center,
  Grid,
  GridItem,
  Text,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';
import { FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box>
      <Grid templateColumns="repeat(2, 1fr)" h="100px">
        <GridItem>
          <Center h="full">
            <Text>
              © 2025 RoboRaiders 3681
              <br />
              {/* Logo courtesy of Sebastian Mulligan */}
            </Text>
          </Center>
        </GridItem>
        <GridItem>
          <Center h="full">
            <ButtonGroup size="md" variant="outline">
              <Button
                onClick={() =>
                  window.open(
                    'https://www.instagram.com/roboraiders3681',
                    '_blank'
                  )
                }
              >
                <FaInstagram />
              </Button>
              <Button
                onClick={() =>
                  window.open('https://github.com/3681NHR', '_blank')
                }
              >
                <FaGithub />
              </Button>
              <Button
                onClick={() =>
                  window.open('mailto:nhalerobotics@gmail.com', '_blank')
                }
              >
                <FaEnvelope />
              </Button>
              <Button
                onClick={() =>
                  window.open(
                    'https://www.thebluealliance.com/team/3681',
                    '_blank'
                  )
                }
              >
                <img
                  width={'12rem'}
                  height={'12rem'}
                  alt="Blue Alliance Logo"
                  src="/bluealliance.svg"
                ></img>
              </Button>
            </ButtonGroup>
          </Center>
        </GridItem>
      </Grid>
    </Box>
  );
}
