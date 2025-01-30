import {
  Box,
  Center,
  Grid,
  GridItem,
  Text,
  ButtonGroup,
} from '@chakra-ui/react';
import { FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';
import FooterButton from '@/components/other/footerButton';

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
              <FooterButton
                url="https://www.instagram.com/roboraiders3681"
                ariaLabel="Link to Instagram"
              >
                <FaInstagram />
              </FooterButton>
              <FooterButton
                url="https://github.com/3681NHR"
                ariaLabel="Link to Github"
              >
                <FaGithub />
              </FooterButton>
              <FooterButton
                url="mailto:nhalerobotics@gmail.com"
                ariaLabel="Mail to nhalerobotics@gmail.com"
              >
                <FaEnvelope />
              </FooterButton>
              <FooterButton
                url="https://www.thebluealliance.com/team/3681"
                ariaLabel="Link to Blue Alliance"
              >
                <img
                  width={'12rem'}
                  height={'12rem'}
                  alt="Blue Alliance Logo"
                  src="/icons/bluealliance.svg"
                ></img>
              </FooterButton>
            </ButtonGroup>
          </Center>
        </GridItem>
      </Grid>
    </Box>
  );
}
