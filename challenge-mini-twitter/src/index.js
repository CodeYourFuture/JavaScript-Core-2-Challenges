const biggerContainer = document.getElementById(
  "logoTitleEmailPassword-container"
);
const twitterLogoImage = document.getElementById("twitterLogoImage");
const logInH1Tag = document.querySelector("h1");
const allInputFields = document.querySelectorAll("input");
const logInButton = document.querySelector("button");

// styling the bigger container using an object of styles and using the object assign method
Object.assign(biggerContainer.style, {
  display: "flex",
  flexDirection: "column",
  justifyContents: "center",
  width: "400px",
  height: "75%",
  marginLeft: "550px",
  backgroundColor: "white",
});
// style twitter logo image
Object.assign(twitterLogoImage.style, {
  height: "2.5rem",
  width: "3.5rem",
  marginTop: "1rem ",
});
// style log in title
Object.assign(logInH1Tag.style, {
  fontWeight: "bold",
  marginTop: "1.2rem",
});
// this will apply the styles to both input fields
allInputFields.forEach((element) => {
  Object.assign(element.style, {
    height: "3rem",
    width: "100%",
    border: "2px solid LightGrey",
    borderRadius: "4px",
    marginTop: "1.2rem",
  });
});
// styling loginButton
Object.assign(logInButton.style, {
  backgroundColor: "lightBlue",
  marginTop: "1.2rem",
  height: "3rem",
  border: "1px solid LightBlue",
  borderRadius: "20px",
});
