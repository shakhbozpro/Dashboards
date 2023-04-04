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


// ! Data for the bar chart1
const data = [23, 20, 28, 18, 21, 31, 29, 26, 30, 24, 28, 43];

// Get the canvas element and its context
const canvas = document.getElementById("barChart");
const ctx = canvas.getContext("2d");

// Set the dimensions and styling of the chart
const chartHeight = canvas.height - 30;
const chartWidth = canvas.width - 30;
const barSpacing = 12;
const barWidth = 10;

// Loop through the data and draw each bar
for (let i = 0; i < data.length; i++) {
  const barHeight = data[i] * chartHeight / Math.max(...data);

  // Set an array of colors to use for each bar
  const colors = ["#E0E4FF", "#E0E4FF", "#E0E4FF", "#E0E4FF", "#E0E4FF", "#E0E4FF", "#E0E4FF", "#E0E4FF", "#E0E4FF", "#E0E4FF", "#E0E4FF", "#6576FF"];

  // Set the color of the bar
  ctx.fillStyle = colors[i];

  // Draw the bar
  ctx.fillRect(
    i * (barWidth + barSpacing) + 5,
    canvas.height - barHeight - 15,
    barWidth,
    barHeight
  );
}

// ! Data for the bar chart2
const data2 = [28, 20, 35, 15, 25, 38];

// Get the canvas element and its context
const canvas2 = document.getElementById("barChart2");
const ctx2 = canvas2.getContext("2d");

// Set the dimensions and styling of the chart
const chartHeight2 = canvas2.height - 30;
const chartWidth2 = canvas2.width - 30;
const barSpacing2 = 10;
const barWidth2 = 10;

// Loop through the data2 and draw each bar
for (let i = 0; i < data2.length; i++) {
  const barHeight = data2[i] * chartHeight2 / Math.max(...data2);

  // Set an array of colors to use for each bar
  const colors2 = ["#E0E4FF", "#E0E4FF", "#E0E4FF", "#E0E4FF", "#E0E4FF", "#6576FF"];

  // Set the color of the bar
  ctx2.fillStyle = colors2[i];

  // Draw the bar
  ctx2.fillRect(
    i * (barWidth2 + barSpacing2) + 5,
    canvas2.height - barHeight - 15,
    barWidth2,
    barHeight
  );
}

// ! Data for the bar chart3
const data3 = [28, 20, 35, 15, 25, 38];

// Get the canvas element and its context
const canvas3 = document.getElementById("barChart3");
const ctx3 = canvas3.getContext("2d");

// Set the dimensions and styling of the chart
const chartHeight3 = canvas3.height - 30;
const chartWidth3 = canvas3.width - 30;
const barSpacing3 = 12;
const barWidth3 = 10;

// Loop through the data3 and draw each bar
for (let i = 0; i < data3.length; i++) {
  const barHeight = data3[i] * chartHeight3 / Math.max(...data3);

  // Set an array of colors to use for each bar
  const colors3 = ["#E0E4FF", "#E0E4FF", "#E0E4FF", "#E0E4FF", "#E0E4FF", "#6576FF"];

  // Set the color of the bar
  ctx3.fillStyle = colors3[i];

  // Draw the bar
  ctx3.fillRect(
    i * (barWidth3 + barSpacing3) + 5,
    canvas2.height - barHeight - 15,
    barWidth3,
    barHeight
  );
}