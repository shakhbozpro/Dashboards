const projectsMenuBtn = document.querySelector(".projects-menu-btn");
const projectsArrow = document.querySelector(".projects-arrow");
const projectsList = document.querySelector(".projects-list");
const userManageMenuBtn = document.querySelector(".user-manage-menu-btn");
const userArrow = document.querySelector(".user-arrow");
const userMenuList = document.querySelector(".user-manage-list");
const amlMenuBtn = document.querySelector(".aml-menu-btn");
const amlArrow = document.querySelector(".aml-arrow");
const amlMenuList = document.querySelector(".aml-list");
const transactionStatus = document.querySelectorAll(".transaction-status");

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

// ! Data for the line chart
let ctxx = document.getElementById("myChart").getContext("2d");
let myChart = new Chart(ctxx, {
  type: "line",
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"],
    datasets: [
      {
        label: "Vertical Line Chart",
        data: [5, 7, 10, 5, 15, 22, 7, 5, 15, 7, 7, 5, 8, 25, 7, 5, 15, 19, 7, 7, 20, 17, 21, 13, 25],
        backgroundColor: "#E0E4FF",
        borderColor: "#6576FF",
        borderWidth: 2,
        pointRadius: 0, // set point radius to 0 to hide points on the chart
      },
    ],
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    tooltips: {
      enabled: true,
      mode: 'label',
      intersect: false,
    },
  },
});

// ! Transaction status styling
transactionStatus.forEach(item => {
  if (item.textContent === "Paid") {
    item.classList.add("text-[#1EE0AC]", "transaction-paid");
  }
  if (item.textContent === "Canceled") {
    item.classList.add("text-[#E85347]", "transaction-canceled");
  }
})