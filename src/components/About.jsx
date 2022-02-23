import React, { useEffect } from "react";

function About() {
  return (
    <>
      <div className="about-me">
        <h1>About me</h1>
        <p>
          Full stack programmer with more than 8 years of experience developing
          and maintaining web applications using frameworks such as .net C#,
          angular, react.js and web services (SOAP & API REST) for clients in
          the banking and investment area.
        </p>
        <br />

        <div className="flex-end-buttons">
          <a
            target={"_blank"}
            className="button"
            href="https://www.linkedin.com/in/jose-gregorio-leal-sanchez/?locale=en_US"
          >
            LinkedIn
          </a>
          <br />
          <a
            target={"_blank"}
            className="button"
            href="https://github.com/lealxh"
          >
            Github
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
