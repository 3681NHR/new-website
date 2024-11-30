'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft } from 'lucide-react';

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
        <button
          className="rounded-full w-12 h-12 md:w-10 md:h-10 flex items-center justify-center"
          onClick={onPrevButtonClick}
        >
          <ChevronLeft
            className="w-8 h-8 stroke-light-text dark:stroke-dark-text"
            strokeWidth={3}
          ></ChevronLeft>
        </button>
        <button className="" onClick={onNextButtonClick}>
          Next
        </button>
      </div>
    </section>
  );
}
