import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { container } from "./hero.module.css";

const Hero = (props) => {
  const { heroProps } = props;
  const imagePlaceholder = getImage(heroProps[1].image.asset);
  return (
    <div className={container}>
      {/* <h2 classNameName="bg-slate-100">This is hero component = {heroProps[0].heading}</h2> */}

      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-4 dark:bg-slate-800 items-center">
        <GatsbyImage
          image={imagePlaceholder}
          className=" md:h-52 md:rounded-none rounded-full mx-auto h-52"
          alt=""
          style={{ float: "left", marginRight: "1rem" }}
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Create a homepage using Gatsby and Sanity. This starter
              demonstrates how to use Sanity to build a homepage and can be
              customized to match your own visual branding”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">Neeraj</div>
            <div className="text-slate-700 dark:text-slate-500">
              Experience Engineer, India
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Hero;

//`
