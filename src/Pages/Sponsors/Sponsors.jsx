import React from 'react';
import Heading from '../../Components/Heading/Heading';

import devfolio from '../../assets/devfolio.png';
import ethindia from '/Images/ETHIndia.png'

const sponsors = [
  { src: devfolio, alt: 'DEVFOLIO LOGO', link: 'https://devfolio.co' },
  { src: ethindia, alt: 'ETHINDIA LOGO', link: 'https://ethindia.co' }
];

const Sponsors = () => {
  return (
    <section className="bg-[#101111] py-12 px-4" id="sponsors">
      <Heading heading="our SPONSORS" />
      <div className="max-w-5xl mx-auto border border-[#A50C20] rounded-xl p-10 relative">
        {/*<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-6 justify-items-center max-w-6xl mx-auto">*/}
        <div className="grid grid-cols-2 gap-6 justify-items-center max-w-6xl mx-auto">
          {sponsors.map((logo, index) => (
            <div
              key={index}
              className="p-4 rounded-xl shadow hover:shadow-lg transition-all duration-300 flex justify-center items-center"
            >
              <a
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-40 h-10 md:h-20 object-contain"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
