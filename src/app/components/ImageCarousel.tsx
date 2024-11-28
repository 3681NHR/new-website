'use client';

import { useEffect, useRef, useState } from 'react';

export default function ImageCarousel({
  pictures,
  autoScroll,
  fullPreview,
}: {
  pictures: { url: string; desc: string }[];
  autoScroll?: boolean;
  fullPreview?: boolean;
}) {
  const [current, setCurrent] = useState(0);
  const [showAlt, setShowAlt] = useState(false);

  const carouselEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoScroll) {
        if (carouselEl.current && carouselEl.current.matches(':hover')) return;
        setCurrent((current + 1) % pictures.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [autoScroll, current, pictures.length]);

  return (
    <>
      <div className="shadow-lg" ref={carouselEl}>
        <div className="max-w-2xl w-full relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(${current * -100}%)` }}
            onClick={() => setShowAlt(old => !old)}
          >
            {pictures.map((pic, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 group relative overflow-hidden"
              >
                <img
                  src={pic.url}
                  alt={pic.desc}
                  loading={i == 0 ? 'eager' : 'lazy'}
                  className="object-cover object-center w-full h-full flex-shrink-0 bg-black"
                ></img>
                <div
                  className={`absolute left-0 bottom-0 right-0 ${!showAlt && 'translate-y-full group-hover:translate-y-0'} transition-transform bg-black bg-opacity-75 text-gray-200 p-2`}
                  style={{ display: pic.desc ? '' : 'none' }}
                >
                  {pic.desc}
                </div>
              </div>
            ))}
          </div>
          <button
            className="absolute left-0 top-0 bottom-0 w-12 bg-black bg-opacity-0 hover:bg-opacity-40 text-white text-4xl opacity-75 transition"
            onClick={() =>
              setCurrent((current - 1 + pictures.length) % pictures.length)
            }
          >
            &lt;
          </button>
          <button
            className="absolute right-0 top-0 bottom-0 w-12 bg-black bg-opacity-0 hover:bg-opacity-40 text-white text-4xl opacity-75 transition"
            onClick={() => setCurrent((current + 1) % pictures.length)}
          >
            &gt;
          </button>
        </div>
      </div>
      {!fullPreview ? (
        <div className="w-full max-w-4xl overflow-auto min-w-0 thin-scrollbar scrollbar">
          <div className="w-max flex justify-center mx-auto mt-3 pb-1 flex-shrink-0">
            {pictures.map((pic, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`px-1 py-2 group transition-transform`}
              >
                <div
                  className={`w-6 h-1 rounded-full bg-black dark:bg-white opacity-20 group-hover:opacity-40 transition ${current == i ? 'scale-y-[2] scale-x-125 opacity-50' : ''}`}
                ></div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full max-w-4xl overflow-auto min-w-0 thin-scrollbar scrollbar">
          <div className="w-max flex justify-center gap-2 mx-auto mt-3 pb-1 flex-shrink-0">
            {pictures.map((pic, i) => (
              <button
                key={i}
                className={`flex-shrink-0 group bg-black shadow-md transition-transform ${current != i ? 'scale-90' : 'scale-100'}`}
                onClick={() => setCurrent(i)}
              >
                <img
                  src={pic.url}
                  alt={pic.desc}
                  loading="lazy"
                  className={`w-16 sm:w-24 h-10 sm:h-16 object-cover object-center transition-opacity ${current != i ? 'opacity-60 group-hover:opacity-80 dark:opacity-40 dark:group-hover:opacity-50' : 'opacity-95 dark:opacity-90'}`}
                ></img>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
