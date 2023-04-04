const projectsMenuBtn = document.querySelector(".projects-menu-btn");
const projectsArrow = document.querySelector(".projects-arrow");
const projectsList = document.querySelector(".projects-list");
const userManageMenuBtn = document.querySelector(".user-manage-menu-btn");
const userArrow = document.querySelector(".user-arrow");
const userMenuList = document.querySelector(".user-manage-list");
const amlMenuBtn = document.querySelector(".aml-menu-btn");
const amlArrow = document.querySelector(".aml-arrow");
const amlMenuList = document.querySelector(".aml-list");

projectsMenuBtn.addEventListener('click', () => {
  projectsArrow.classList.toggle("rotate-90");
  projectsList.classList.toggle("show")
});

userManageMenuBtn.addEventListener('click', () => {
  userArrow.classList.toggle("rotate-90");
  userMenuList.classList.toggle("show")
});

amlMenuBtn.addEventListener('click', () => {
  amlArrow.classList.toggle("rotate-90");
  amlMenuList.classList.toggle("show")
});


// Data for the bar chart
const data = [23, 20, 28, 18, 21, 31, 29, 26, 30, 24, 28, 43];

// Get the canvas element and its context
const canvas = document.getElementById("barChart");
const ctx = canvas.getContext("2d");

// Set the dimensions and styling of the chart
const chartHeight = canvas.height - 30;
const chartWidth = canvas.width - 30;
const barSpacing = 10;
const barWidth = 12;

// Loop through the data and draw each bar
for (let i = 0; i < data.length; i++) {
  const barHeight = data[i] * chartHeight / Math.max(...data);

  // Set the color of the bar
  ctx.fillStyle = "#6576FF";

  // Draw the bar
  ctx.fillRect(
    i * (barWidth + barSpacing) + 1,
    canvas.height - barHeight - 15,
    barWidth,
    barHeight
  );
}

// Data for the bar chart
const data2 = [28, 20, 35, 15, 25, 38];

// Get the canvas element and its context
const canvas2 = document.getElementById("barChart2");
const ctx2 = canvas2.getContext("2d");

// Set the dimensions and styling of the chart
const chartHeight2 = canvas2.height - 30;
const chartWidth2 = canvas2.width - 30;
const barSpacing2 = 10;
const barWidth2 = 12;

// Loop through the data2 and draw each bar
for (let i = 0; i < data2.length; i++) {
  const barHeight = data2[i] * chartHeight2 / Math.max(...data2);

  // Set the color of the bar
  ctx2.fillStyle = "#6576FF";

  // Draw the bar
  ctx2.fillRect(
    i * (barWidth2 + barSpacing2) + 1,
    canvas2.height - barHeight - 15,
    barWidth2,
    barHeight
  );
}

// Data for the bar chart
const data3 = [28, 20, 35, 15, 25, 38];

// Get the canvas element and its context
const canvas3 = document.getElementById("barChart3");
const ctx3 = canvas3.getContext("2d");

// Set the dimensions and styling of the chart
const chartHeight3 = canvas3.height - 30;
const chartWidth3 = canvas3.width - 30;
const barSpacing3 = 10;
const barWidth3 = 12;

// Loop through the data3 and draw each bar
for (let i = 0; i < data3.length; i++) {
  const barHeight = data3[i] * chartHeight3 / Math.max(...data3);

  // Set the color of the bar
  ctx3.fillStyle = "#6576FF";

  // Draw the bar
  ctx3.fillRect(
    i * (barWidth3 + barSpacing3) + 1,
    canvas2.height - barHeight - 15,
    barWidth3,
    barHeight
  );
}