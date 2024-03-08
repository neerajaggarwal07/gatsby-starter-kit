import * as React from 'react'
import Layout from '../components/layout'
//import { graphql,useStaticQuery } from "gatsby"


const IndexPage = () => {

  
  return (
    <Layout pageTitle="Home Page">
      
      <p>I'm making this by following the Gatsby Tutorial.</p>
      
      {/* {homepage.blocks.map((block) => {
        <p>{JSON.stringify(block)}</p>
        // const { id, blocktype, ...componentProps } = block
        // const Component = sections[blocktype] || Fallback
        //return <Component key={id} {...componentProps} />
      })} */}
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage

// export const query = graphql`
//   query pageQuery {
//     homepage {
//       id
//       title
//       description
//       image {
//         id
//         url
//       }
      
//     }
//   }
// `
