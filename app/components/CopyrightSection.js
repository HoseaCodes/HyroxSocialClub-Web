import React from 'react';

const CopyrightSection = ({ year, clubName, links }) => {
  return (
    <section className="copyrightsection wrapper py-4 px-6">
      <div className="main-row-for-copyright-section flex flex-col text-center md:flex-row sm:justify-between items-center">
        <div className="first-colm-copyright mb-4 sm:mb-0 text-gray-500">
                    <p>&copy; {year} {clubName} All Rights Reserved.</p>
                </div>
        <div className="sec-colm-copyright flex flex-wrap justify-center sm:justify-start">
          {links.map((link, index) =>
          (
            <div key={index} className={`in-${index + 1}-c mx-2 sm:mx-4 mb-2 sm:mb-0`}>
              <h5 className="text-center sm:text-left text-gray-500">{link}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CopyrightSection;
