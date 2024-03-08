import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { heroContentFragment } from "../fragments/heroContentFragments";

const HeroPage = ({ data }) => {
  const imagePlaceholder = getImage(data.sanityHomepage.image.asset);
  const { SanityHero } = data.sanityHomepage.content;
  //const imagePlaceholder = getImage(image.asset)
  return (
    <Layout pageTitle="Homepage">
      <>
        {/* <h2>{data.sanityHomepage.title}</h2>
      <h3>{data.sanityHomepage.description}</h3> */}

        {/* {data.sanityAuthor.map(item => {
        <p>{item.name}</p>
      })} */}
        {/* <GatsbyImage
        image={imagePlaceholder}
        alt=''
        style={{ float: "left", marginRight: "1rem" }}
      /> */}
      </>
      {/* <p>heading = {JSON.stringify(data.sanityHomepage.content[0].links)}</p> */}
      <Hero heroProps={data.sanityHomepage.content} />
    </Layout>
  );
};

export const Head = () => <title>List of Authors</title>;

export default HeroPage;

export const query = graphql`
  query HomePageQuery {
    sanityHomepage {
      title
      description
      image {
        asset {
          gatsbyImageData
        }
      }
      content {
        id
        ... on SanityHero {
          ...HeroContentFragment
        }
      }
    }
  }
`;
