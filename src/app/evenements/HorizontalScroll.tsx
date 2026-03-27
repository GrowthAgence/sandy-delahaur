"use client";

import { useRef } from "react";

const FORMATS = [
  {
    title: "Ateliers Priv\u00e9s",
    description:
      "Des masterclasses immersives en petit comit\u00e9 pour ma\u00eettriser les codes du luxe et de l\u2019influence.",
    offset: "",
    ml: "",
  },
  {
    title: "Soir\u00e9es Networking",
    description:
      "Des r\u00e9ceptions exclusives dans des lieux tenus secrets, pens\u00e9es pour l\u2019\u00e9change strat\u00e9gique.",
    offset: "mt-24",
    ml: "ml-12",
  },
  {
    title: "SDL Summits",
    description:
      "Notre rendez-vous annuel. Une journ\u00e9e de conf\u00e9rences et d\u2019inspiration pure.",
    offset: "",
    ml: "ml-24",
  },
];

export default function HorizontalScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={scrollRef}
      className="flex overflow-x-auto gap-0 pb-12 px-6 md:px-12"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {FORMATS.map((item, i) => (
        <div
          key={i}
          className={`min-w-[340px] md:min-w-[600px] group ${item.offset}`}
        >
          <div className={`relative ${item.ml}`}>
            {/* Gradient placeholder instead of image */}
            <div className="w-full aspect-[16/10] bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low" />
            <div className="mt-8">
              <h3 className="font-headline text-3xl mb-4 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-on-surface-variant font-body">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
