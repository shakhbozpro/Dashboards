const openProjectsMenuBtn = document.querySelector(".projects-menu-btn");
const projectsArrow = document.querySelector(".projects-arrow");
const projectsList = document.querySelector(".projects-list");
const userManageMenuBtn = document.querySelector(".user-manage-menu-btn");
const userArrow = document.querySelector(".user-arrow");
const userManuList = document.querySelector(".user-manage-list");

openProjectsMenuBtn.addEventListener('click', () => {
  projectsArrow.classList.toggle("rotate-90");
  projectsList.classList.toggle("show")
});

userManageMenuBtn.addEventListener('click', () => {
  userArrow.classList.toggle("rotate-90");
  userManuList.classList.toggle("show")
});