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
  height: "120vh",
  backgroundRepeat: "no-repeat",
  fontFamily: "fantasy",
  flex: .5,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 32,
  padding: 20,
  textAlign: "center"
}
const jumbotronStyles = {
  backgroundColor: "rgb(28 200 239 / 53%)",
  backdropFilter: "blur(1px)",
  border: "purple 1px solid",
  padding: 20,
  width: "66vw"
}
const paragraphStyles = {
  display: 'flex',
  fontWeight: 900,
  textShadow: "#868689 0px 0px 11px",
  fontSize: 20
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
        <span className="spin" role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <div style={paragraphStyles}>
        <div  style={{flex: 1}}>
          <p style={{textAlign: "center"}}>Info:</p>
          <ul>
            <li>When: Friday May 27th - Monday May 30th</li>
            <li>Drop in any of day!</li>
            <li>
              Where: Frog Lake, Mt Hood National Forest
            </li>
            <li>
              <a href="https://fs.usda.gov/recarea/mthood/recarea/?recid=53102">Frog Lake - Forest Service</a>
            </li>
            <li>
              <a href="https://www.recreation.gov/camping/campgrounds/232848">Frog Lake - Recreation</a>
            </li>
            <li>
              What: Fun, Food and Friends
            </li>
          </ul>
        </div>
        <div style={{flex: 1}}>
          <p style={{textAlign: "center"}}>Activities:</p>
          <ul>
            <li>Biking -&gt; 
              <a href="https://bikepacking.com/routes/frog-lake-loop/">Frog Lake Look</a>
            </li>
            <li>Hiking -&gt; 
              <a href="https://www.alltrails.com/explore/trail/us/oregon/frog-lake-butte-road">
                Frog Buttes
              </a> 
            </li>
            <li>Fishing -&gt; Stocked early in the season with rainbow trout</li>
            <li>Maybe Boats</li>
            <li>Frisbee</li>
            <li>Charades</li>
            <li>Food -&gt; Thinking veggie forward and maybe some bonfire pizza</li>
          </ul>
        </div>
      </div>
      <p>
        Feedback is welcome as well as appreciated!
      </p>
      <p>
        Please text me with design ideas for the site and general ideas for the weekend.
      </p>
      </div>
      </div>
    </main>
  )
}

export default IndexPage
