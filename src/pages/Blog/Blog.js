import React from "react";

const Blog = () => {
  return (
    <section className=" text-gray-600 py-32">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          How it works
        </p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <details>
            <summary className="py-2 font-bold outline-none cursor-pointer focus:underline">
            Difference between SQL and NoSQL?
            </summary>
            <div className="px-4 pb-4">
              <p>
              SQL is the most common language for extracting and organising data that is stored in a relational database. A database is a table that consists of rows and columns. SQL is the language of databases. It facilitates retrieving specific information from databases that are further used for analysis.
              <br/><br/>
              NoSQL databases (aka "not only SQL") are non-tabular databases and store data differently than relational tables. NoSQL databases come in a variety of types based on their data model. The main types are document, key-value, wide-column, and graph.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 font-bold outline-none cursor-pointer focus:underline">
            What is JWT, and how does it work?
            </summary>
            <div className="px-4 pb-4">
              <p>
                JWT is Json Web Token. <br/>
                Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 font-bold outline-none cursor-pointer focus:underline">
            What is the difference between javascript and NodeJS?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
              Javascript is a lightweight, object-oriented scripting language that is used to build dynamic HTML pages with interactive effects on a webpage. JavaScript is also commonly used in game development and mobile app development. It is an interpreted scripting language, and the code can only be executed and run in a web browser. 
                <br/> <br/>
                Node.js is a cross-platform, open-source JavaScript runtime environment that enables JavaScript to be run on the server. Node.js enables JavaScript code to run outside of the browser. Node.js comes with a large number of modules and is mostly used in web creation. It may run on various platforms including, Windows, Linux, Mac OS, etc.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 font-bold outline-none cursor-pointer focus:underline">
            How does NodeJS handle multiple requests at the same time?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Sed consectetur quod tenetur! Voluptatibus culpa incidunt
                veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus
                autem eaque unde possimus quae.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Blog;
