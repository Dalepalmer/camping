import * as React from "react"
import "../styles/index.css"
import frog from "../images/frog.png"

// styles
const pageStyles = {
  color: "#232129",
  padding: "1em",
  backgroundColor: "mediumaquamarine",
  fontFamily: "fantasy",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}
const frogDiv = {
  color: "#232129",
  padding: "1em",
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
