import "./styles.css";

import createHomepage from "./homepage";
import createAboutPage from "./about";
import createMenuPage from "./menu";

alert("This website was set up using webpack!");

// Inside div#content, create a homepage for your restaurant
createHomepage("#content");
createAboutPage("#content");
createMenuPage("#content");
