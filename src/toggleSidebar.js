import get from "./utils/getElement.js";
const openBtn = get(".toggle-nav");
const sidebar = get(".sidebar-overlay");
const closeBtn = get(".sidebar-close");

openBtn.addEventListener("click", () => {
  sidebar.classList.add("show");
});
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show");
});

export default taggleSidebar;
