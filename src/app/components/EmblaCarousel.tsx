'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export function EmblaCarousel() {
  const [emblaRef, emblaAPI] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 3000, stopOnMouseEnter: true }),
  ]);

  const onPrevButtonClick = React.useCallback(() => {
    if (!emblaAPI) return;
    emblaAPI.scrollPrev();
  }, [emblaAPI]);

  const onNextButtonClick = React.useCallback(() => {
    if (!emblaAPI) return;
    emblaAPI.scrollNext();
  }, [emblaAPI]);

  return (
    <section className="embla">
      <div className="embla-viewport" ref={emblaRef}>
        <div className="embla-container">
          <div className="embla-slide">
            <img src="/placeholder.png" className="embla-image"></img>
          </div>
          <div className="embla-slide">
            <img src="/placeholder.png" className="embla-image"></img>
          </div>
          <div className="embla-slide">
            <img src="/placeholder.png" className="embla-image"></img>
          </div>
        </div>
      </div>
      <div className="embla-controls">
        <button className="embla-control-button" onClick={onPrevButtonClick}>
          Prev
        </button>
        <button className="embla-control-button" onClick={onNextButtonClick}>
          Next
        </button>
      </div>
    </section>
  );
}
