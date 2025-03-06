import get from "./utils/getElement.js";
const openBtn = get(".toggle-nav");
const sidebar = get(".sidebar-overlay");
const closeBtn = get(".sidebar-close");

const taggleSidebar = () => {
  openBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
  });
  closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
  });
};

export default taggleSidebar;
