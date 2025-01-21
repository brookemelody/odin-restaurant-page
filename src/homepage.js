/**
 * Creates a div element for the homepage, adds the appropriate content and styles, then appends it to the DOM
 * @param {*} contentDiv the query for the container div that should be the parent of the homepage div
 */
export default function createHomepage(contentDiv) {
    const container = document.querySelector(contentDiv);
    const homepageContainer = document.createElement("div");
    homepageContainer.textContent = "Hello, World!";

    container.appendChild(homepageContainer);    
}
