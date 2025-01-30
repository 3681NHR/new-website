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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { ColorModeButton } from '@/components/ui/color-mode';
>>>>>>> 071bafd (update (#23))
=======
import { ColorModeButton } from '@/components/ui/color-mode';
=======
>>>>>>> ee5b73c (changed some stuff)
>>>>>>> 358d7d1 (changed some stuff)
=======
import { ColorModeButton } from '@/components/ui/color-mode';
=======
>>>>>>> ee5b73c (changed some stuff)
=======
import { ColorModeButton } from '@/components/ui/color-mode';
>>>>>>> 3fcb1c0 (add light mode and fix some colors)
>>>>>>> 8cadf8c (add light mode and fix some colors)

export default function Footer() {
  return (
    <Box backgroundColor={'bg'}>
      <Grid templateColumns="repeat(2, 1fr)" h="100px">
        <GridItem>
          <Center h="full">
            <Text color={'fg'}>
              © 2025 RoboRaiders 3681
              <br />
              {/* Logo courtesy of Sebastian Mulligan */}
            </Text>
          </Center>
        </GridItem>
        <GridItem>
          <Center h="full">
            <ButtonGroup size="md" variant="outline">
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
              <Button
                onClick={() =>
                  window.open(
                    'https://www.instagram.com/roboraiders3681',
                    '_blank'
                  )
                }
                aria-label="Instagram Link"
=======
              <FooterButton
                url="https://www.instagram.com/roboraiders3681"
                ariaLabel="Link to Instagram"
>>>>>>> ee5b73c (changed some stuff)
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
<<<<<<< HEAD
              </Button>
              <Button
                onClick={() =>
                  window.open(
                    'https://www.thebluealliance.com/team/3681',
                    '_blank'
                  )
                }
                aria-label="Blue Alliance Link"
>>>>>>> 1fdc1e3 (fix CSP)
              >
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="72px"
                  height="112px"
                  viewBox="0 0 72 112"
                  enableBackground="new 0 0 72 112"
                  xmlSpace="preserve"
                  fill="currentColor"
                >
                  <g>
                    <g>
                      <rect x="8" y="20" width="6" height="64" />
                    </g>
                    <g>
                      <rect x="58" y="20" width="6" height="64" />
                    </g>
                    <g>
                      <path d="M36,112C20.561,112,8,99.439,8,84h6c0,12.131,9.869,22,22,22V112z" />
                    </g>
                    <g>
                      <path d="M36,112v-6c12.131,0,22-9.869,22-22h6C64,99.439,51.439,112,36,112z" />
                    </g>
                    <g>
                      <rect x="33" y="20" width="6" height="89" />
                    </g>
                    <g>
                      <rect x="11" y="78" width="50" height="6" />
                    </g>
                    <g>
                      <rect x="11" y="50" width="50" height="6" />
                    </g>
                    <g id="Lamp_Rectangle_4_">
                      <path d="M72,24c0,2.2-1.8,4-4,4H4c-2.2,0-4-1.8-4-4V4c0-2.2,1.8-4,4-4h64c2.2,0,4,1.8,4,4V24z" />
                    </g>
                  </g>
                </svg>
              </FooterButton>
<<<<<<< HEAD
=======
              <ColorModeButton />
<<<<<<< HEAD
>>>>>>> 071bafd (update (#23))
=======
=======
              </FooterButton>
              <FooterButton
                url="https://www.thebluealliance.com/team/3681"
                ariaLabel="Link to Blue Alliance"
              >
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="72px"
                  height="112px"
                  viewBox="0 0 72 112"
                  enableBackground="new 0 0 72 112"
                  xmlSpace="preserve"
                  fill="currentColor"
                >
                  <g>
                    <g>
                      <rect x="8" y="20" width="6" height="64" />
                    </g>
                    <g>
                      <rect x="58" y="20" width="6" height="64" />
                    </g>
                    <g>
                      <path d="M36,112C20.561,112,8,99.439,8,84h6c0,12.131,9.869,22,22,22V112z" />
                    </g>
                    <g>
                      <path d="M36,112v-6c12.131,0,22-9.869,22-22h6C64,99.439,51.439,112,36,112z" />
                    </g>
                    <g>
                      <rect x="33" y="20" width="6" height="89" />
                    </g>
                    <g>
                      <rect x="11" y="78" width="50" height="6" />
                    </g>
                    <g>
                      <rect x="11" y="50" width="50" height="6" />
                    </g>
                    <g id="Lamp_Rectangle_4_">
                      <path d="M72,24c0,2.2-1.8,4-4,4H4c-2.2,0-4-1.8-4-4V4c0-2.2,1.8-4,4-4h64c2.2,0,4,1.8,4,4V24z" />
                    </g>
                  </g>
                </svg>
              </FooterButton>
<<<<<<< HEAD
>>>>>>> ee5b73c (changed some stuff)
<<<<<<< HEAD
>>>>>>> 358d7d1 (changed some stuff)
=======
=======
              <ColorModeButton />
>>>>>>> 3fcb1c0 (add light mode and fix some colors)
>>>>>>> 8cadf8c (add light mode and fix some colors)
            </ButtonGroup>
          </Center>
        </GridItem>
      </Grid>
    </Box>
  );
}
