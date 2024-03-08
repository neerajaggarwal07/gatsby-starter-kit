import { graphql } from "gatsby";


export const heroContentFragment = graphql`
  fragment HeroContentFragment on SanityHero {
    _key
    heading
    kicker
    text
    subhead
    image {
        asset {
          gatsbyImageData
        }
      }
    links {
      ... on SanityHomepageLink {
        text
        href
      }
    }
  }
`;
