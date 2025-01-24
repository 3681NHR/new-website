import { Card, Image, Box } from '@chakra-ui/react';

export interface MemberCard {
  photoURL: string;
  name: string;
  description: string;
  group: string;
}

export default function MemberCard({
  photoURL,
  name,
  description,
  group,
}: MemberCard) {
  return (
    <Card.Root
      flexDirection="row"
      overflow="hidden"
      variant="subtle"
      maxW={'30rem'}
    >
      <Image objectFit="cover" maxW={'200px'} src={photoURL} alt="" />
      <Box>
        <Card.Body>
          <Card.Title mb="2">{name}</Card.Title>
          <Card.Description>{description}</Card.Description>
        </Card.Body>
        <Card.Footer>{group}</Card.Footer>
      </Box>
    </Card.Root>
  );
}
