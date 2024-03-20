import Image from "next/image";
import React from "react";

export const ClientAndPartner = () => {
  const partners = [
    {
      url: "/assets/images/logo/microsoft.png",
      alt: "microsoft-logo",
    },
    {
      url: "/assets/images/logo/zenius.png",
      alt: "zenius-logo",
    },
    {
      url: "/assets/images/logo/csis.png",
      alt: "csis-logo",
    },
    {
      url: "/assets/images/logo/pegadaian.png",
      alt: "pegadaian-logo",
    },
  ];
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-16 lg:py-0">
        <h5 className="mb-6 text-center text-xl font-bold md:mb-10 lg:mb-12">
          Our Featured Clients
        </h5>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12 md:grid-cols-4 md:gap-6 items-center">
          {partners.map((partner, index) => {
            return (
              <Image
                key={`partner-${index}`}
                className="mx-auto"
                src={partner.url}
                alt={partner.alt}
                width={100}
                height={20}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
