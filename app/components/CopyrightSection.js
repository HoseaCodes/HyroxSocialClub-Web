import React from 'react';

const CopyrightSection = ({ year, clubName, links }) => {
  return (
    <section className="copyrightsection wrapper">
      <div className="main-row-for-copyright-section">
        <div className="first-colm-copyright">
          <h5>{year} {clubName}</h5>
        </div>
        <div className="sec-colm-copyright">
          {links.map((link, index) => (
            <div key={index} className={`in-${index + 1}-c`}>
              <h5>{link}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CopyrightSection;
