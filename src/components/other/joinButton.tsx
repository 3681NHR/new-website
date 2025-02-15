'use client';

import { Button } from '@chakra-ui/react';

export default function JoinButton() {
  return (
    <Button
      variant={'outline'}
      size={'lg'}
      onClick={() => {}}
      _hover={{ transform: 'translateY(-2px)' }}
      transition="all 0.2s"
    >
      Join us
    </Button>
  );
}
