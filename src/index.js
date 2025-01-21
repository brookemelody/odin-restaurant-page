import "./styles.css";

import createHomepage from "./homepage";
import createAboutPage from "./about";
import createMenuPage from "./menu";

// Print a message to the console upon first loading
console.log("This website was set up using webpack, it uses JavaScript alone to dynamically render its contents!");

// Default content should be the home page
createHomepage("#content");

// Target the content div in the HTML
const contentDiv = document.querySelector("#content");

function switchTab(target) {
    // Clear the content of the current tab
    contentDiv.textContent = "";

    // Inside div#content, load the requested page for the restaurant
    if (target == "home") {
        createHomepage("#content");
    }
    else if (target == "about") {
        createAboutPage("#content");
    }
    else if (target == "menu") {
        createMenuPage("#content");
    }
}

// Target the buttons in the HTML
const homeButton = document.querySelector("#home-button");
const aboutButton = document.querySelector("#about-button");
const menuButton = document.querySelector("#menu-button");
// Add event listeners to the buttons for switching the tabs
homeButton.addEventListener("click", () => switchTab("home"));
aboutButton.addEventListener("click", () => switchTab("about"));
menuButton.addEventListener("click", () => switchTab("menu"));
