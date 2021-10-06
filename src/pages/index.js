import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home() {
  const { astronaut1, astronaut2 } = useStaticQuery(graphql`
    query {
      astronaut1: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      astronaut2: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          gatsbyImageData(backgroundColor: "transparent")
        }
      }
    }
  `)

  return (
    <div>
      <GatsbyImage image={getImage(astronaut1)} alt="" />
      <GatsbyImage image={getImage(astronaut2)} alt="" />
    </div>
  )
}
