/**
 * Creates a div element for the menu page, adds the appropriate content and styles, then appends it to the DOM
 * @param {*} contentDiv the query for the container div that should be the parent of the menu page div
 */
export default function createMenuPage(contentDiv) {
    const container = document.querySelector(contentDiv);
    const menuContainer = document.createElement("div");
    menuContainer.textContent = "This is the menu page content";

    container.appendChild(menuContainer); 
}
