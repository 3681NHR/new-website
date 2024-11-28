'use client';

import { CSSProperties, useEffect, useState } from 'react';

export default function Sponsor({
  sponsor,
  size,
}: {
  sponsor: ISponsorsConfigSponsorsItem & {
    logo_dark?: string;
    invert_dark?: boolean;
  };
  size: number;
}) {
  const [isSM, setIsSM] = useState<boolean>(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsSM(window.matchMedia('(max-width: 640px)').matches);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const maxWidth = ((size || 100) / 100) * (isSM ? 320 : 256) * 2 + 'px';
  const maxHeight = ((size || 100) / 100) * (isSM ? 320 : 256) * 0.75 + 'px';

  const style: CSSProperties = {
    maxWidth,
    maxHeight,
    width: '100%',
    height: 'auto',
  };

  return (
    <a
      href={sponsor.url || '#'}
      target="_blank"
      tabIndex={0}
      title={sponsor.name}
      className={'m-4' + (sponsor.invert_dark ? ' dark:invert' : '')}
      rel="noreferrer"
    >
      {sponsor.logo_dark ? (
        <>
          <img
            className="dark:hidden"
            alt={sponsor.name}
            src={encodeURI(sponsor.logo)}
            style={style}
          ></img>
          <img
            className="hidden dark:block"
            alt={sponsor.name}
            src={encodeURI(sponsor.logo_dark)}
            style={style}
          ></img>
        </>
      ) : (
        <img
          alt={sponsor.name}
          src={encodeURI(sponsor.logo)}
          style={style}
        ></img>
      )}
    </a>
  );
}
