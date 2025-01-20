import "./styles.css";

import odinImage from "./odin.png";

alert("This website was set up using webpack!");

// Inside div#content, create a homepage for your restaurant
// Target the content div in template.html
const contentDiv = document.querySelector("#content");
const image = document.createElement("img");
image.src = odinImage;
contentDiv.appendChild(image);
