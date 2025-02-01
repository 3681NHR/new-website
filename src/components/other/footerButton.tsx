'use client';

import { Button } from '@chakra-ui/react';

export default function FooterButton(props: {
  url: string;
  children: React.ReactNode;
  ariaLabel: string;
}) {
  return (
    <Button
      onClick={() => window.open(props.url, '_blank')}
      aria-label={props.ariaLabel}
    >
      {props.children}
    </Button>
  );
}
