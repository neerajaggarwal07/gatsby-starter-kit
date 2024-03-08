import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const PostPage = ({ data }) => {
  return (
    <Layout pageTitle="All Posts">
      <>
        <p>This is the list of posts</p>
        <h2>{data.allSanityPost.title}</h2>
        <p>
          {/* {JSON.stringify(data)} */}

          <table>
            <thead>
              <th>
                <td>Title</td>
                <td>Author Name</td>
              </th>
            </thead>
            <tbody>
              {data.allSanityPost.edges.map(({ node }) => (
                <tr>
                  <td>{node.title}</td>
                  <td>{node.author.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </p>
      </>
    </Layout>
  );
};

export const Head = () => <title>List of Posts</title>;

export default PostPage;


export const query = graphql`
  query {
    allSanityPost {
      edges {
        node {
          _id
          title
          slug {
            current
          }
          mainImage {
            asset {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          publishedAt
          author {
            name
            image {
              asset {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`;
