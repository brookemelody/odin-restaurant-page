/**
 * Creates a div element for the about page, adds the appropriate content and styles, then appends it to the DOM
 * @param {*} contentDiv the query for the container div that should be the parent of the about page div
 */
export default function createAboutPage(contentDiv) {
    const container = document.querySelector(contentDiv);
    const aboutContainer = document.createElement("div");
    aboutContainer.textContent = "This is the about page content";

    container.appendChild(aboutContainer); 
}
