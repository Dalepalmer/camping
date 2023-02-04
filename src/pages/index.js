import * as React from "react";
import "../styles/index.css";

// styles
const pageStyles = {
  color: "#232129",
  padding: "1em",
  backgroundColor: "forestgreen",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "Verdana",
};
const frogDiv = {
  color: "#232129",
  padding: "1em",
  flex: 0.5,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};
const frogPic = {
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  maxWidth: "100%",
  margin: "0 0 20px 0",
  borderRadius: "20px",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 32,
  padding: 20,
  textAlign: "center",
};
const jumbotronStyles = {
  backgroundColor: "#1b4b14",
  backdropFilter: "blur(1px)",
  border: "purple 1px solid",
  padding: 20,
  color: "white",
  width: "66vw",
};
const paragraphStyles = {
  display: "flex",
  fontWeight: 900,
  fontSize: 20,
  flexDirection: "column",
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <div style={frogDiv}>
        <img
          style={frogPic}
          src="https://www.fs.usda.gov/Internet/FSE_MEDIA/fsbdev2_021128.jpg"
        />
        <title>Camping 2022 - Thirty Thrive</title>
        <div style={jumbotronStyles}>
          <h1 style={headingStyles}>
            Birthday Cabin
            <br />
            <span className="spin" role="img" aria-label="Party popper emojis">
              🎉🎉🎉
            </span>
          </h1>
          <div style={paragraphStyles}>
            <div style={{ flex: 1 }}>
              <p style={{ textAlign: "center" }}>Info:</p>
              <ul>
                <li>When: Tuesday May 30th - Thursday June 1st</li>
                <li>Drop in anyday!</li>
                <li>Where: Government Mineral Springs Guard Station</li>
                <li>
                  <a href="https://www.fs.usda.gov/detail/r6/recreation/?cid=fsbdev2_026644">
                    Govt Mineral Spring Guard Station Forest Service
                  </a>
                </li>
                <li>
                  <a href="https://www.recreation.gov/camping/campgrounds/234091">
                    Govt Mineral Spring Guard Station - Recreation
                  </a>
                </li>
                <li>What: Fun, Food and Friends</li>
              </ul>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ textAlign: "center" }}>Activities:</p>
              <ul>
                <li>
                  Biking -&gt;
                  <ul>
                    <li>Tons of forest roads!</li>
                  </ul>
                </li>
                <li>
                  Hiking -&gt;
                  <ul>
                    <li>Trapper Creek Wilderness</li>
                    <li>Falls Creek Falls</li>
                    <li>Panther Creek Falls</li>
                  </ul>
                </li>
                <li>Frisbee</li>
                <li>Charades</li>
                <li>
                  Food -&gt; Thinking veggie forward and maybe some pizza. The
                  cabin has a refrigerator and oven
                </li>
              </ul>
            </div>
          </div>
          <p>
            There is a max of 9 at the cabin but there is a campground .5 mile
            from the cabin we could use for overflow
          </p>
          <a href="https://www.fs.usda.gov/recarea/giffordpinchot/recarea/?recid=31772">
            Govt Mineral Spring Guard Station Forest Service
          </a>
          <p>Feedback is welcome as well as appreciated!</p>
          <p>
            Please text me with design ideas for the site and general ideas for
            the weekend.
          </p>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
