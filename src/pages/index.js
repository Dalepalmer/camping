import * as React from "react"
import "../styles/index.css"
import frog from "../images/frog.png"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  backgroundColor: "mediumaquamarine",
  fontFamily: "fantasy",
}
const frogDiv = {
  color: "#232129",
  padding: 96,
  background: `url(${frog})`,
  backgroundSize: "contain",
  height: "100vh",
  backgroundRepeat: "no-repeat",
  fontFamily: "fantasy",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 32,
  padding: 20,
  textAlign: "center"
}
const jumbotronStyles = {
  backgroundColor: "#ffffff7a",
  backdropFilter: "blur(1px)",
  border: "purple 1px solid",
  padding: 20
}
const paragraphStyles = {
  fontWeight: 500,
  textShadow: "1 1 white"
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <div style={frogDiv}>
      <title>Camping 2022 - Thirty Thrive</title>
      <div style={jumbotronStyles}>
      <h1 className="draw" style={headingStyles}>
        Memorial Day Camping!
        <br/>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <div style={paragraphStyles}>
       Info:
       <ul>
         <li>When: May 28th - May 30th</li>
         <li>
           <p>Where: Frog Lake, Mt Hood National Forest</p>
            <a href="fs.usda.gov/recarea/mthood/recarea/?recid=53102">Forest Service Site</a>
           </li>
         
       </ul>
      </div>
      </div>
      </div>
    </main>
  )
}

export default IndexPage
