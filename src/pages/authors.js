import * as React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby'

const AuthorPage = ( {data }) => {
  return (
    <Layout pageTitle="All Authors">
        <><p>This is the list of authors</p>
      <h2>{data.sanityAuthor.name}</h2>
      {/* {data.sanityAuthor.map(item => {
        <p>{item.name}</p>
      })} */}
        </>
      
    </Layout>
  )
}

export const Head = () => <title>List of Authors</title>

export default AuthorPage


export const query = graphql`
  query AuthorQuery {
    sanityAuthor {
        name
     
    }
  }
`