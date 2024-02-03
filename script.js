// Get The DOM Elements
const queryHeading1 = document.getElementById("content-heading-1"),
  queryHeading2 = document.getElementById("content-heading-2"),
  queryHeading3 = document.getElementById("content-heading-3"),
  queryHeading4 = document.getElementById("content-heading-4"),
  query1 = document.getElementById("visible"),
  query2 = document.getElementById("hidden-1"),
  query3 = document.getElementById("hidden-2"),
  query4 = document.getElementById("hidden-3"),
  nonDefaultSvg1 = document.getElementById("svg-hidden-1"),
  nonDefaultSvg2 = document.getElementById("svg-hidden-2"),
  nonDefaultSvg3 = document.getElementById("svg-hidden-3"),
  nonDefaultSvg4 = document.getElementById("svg-hidden-4"),
  defaultSvg1 = document.getElementById("svg1"),
  defaultSvg2 = document.getElementById("svg2"),
  defaultSvg3 = document.getElementById("svg3"),
  defaultSvg4 = document.getElementById("svg4");

// For toggling between functions
var testUnit1 = false;
var testUnit2 = true;
var testUnit3 = true;
var testUnit4 = true;

// Function to open the queries
const queryOpener = (query, size) => {
  query.style.height = size;
  testUnit1 = false;
  testUnit2 = false;
  testUnit3 = false;
  testUnit4 = false;
};

// Function to close the queries
const queryCloser = (query) => {
  query.style.height = "0";
  testUnit1 = true;
  testUnit2 = true;
  testUnit3 = true;
  testUnit4 = true;
};

// Function to change the SVGs
const svgChangeHandler = (openSvg, closeSvg) => {
  openSvg.style.display = "inline";
  closeSvg.style.display = "none";
};

// Function to identify whether queryOpener() or queryCloser() should be executed
const queryClickHandler = (test, query, size, openSvg, closeSvg) => {
  if (test) {
    queryOpener(query, size);
    svgChangeHandler(openSvg, closeSvg);
  } else {
    queryCloser(query);
    svgChangeHandler(closeSvg, openSvg);
  }
};

// Click event listeners

queryHeading1.addEventListener("click", () => {
  queryClickHandler(testUnit1, query1, "85.4px", defaultSvg1, nonDefaultSvg1);
});

queryHeading2.addEventListener("click", () => {
  queryClickHandler(testUnit2, query2, "85.4px", nonDefaultSvg2, defaultSvg2);
});

queryHeading3.addEventListener("click", () => {
  queryClickHandler(testUnit3, query3, "120.6px", nonDefaultSvg3, defaultSvg3);
});

queryHeading4.addEventListener("click", () => {
  queryClickHandler(testUnit4, query4, "103px", nonDefaultSvg4, defaultSvg4);
});

// For Users to navigate with keyboard only
queryHeading1.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    queryClickHandler(testUnit1, query1, "85.4px", defaultSvg1, nonDefaultSvg1);
  }
});

queryHeading2.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    queryClickHandler(testUnit2, query2, "85.4px", nonDefaultSvg2, defaultSvg2);
  }
});

queryHeading3.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    queryClickHandler(
      testUnit3,
      query3,
      "120.6px",
      nonDefaultSvg3,
      defaultSvg3
    );
  }
});

queryHeading4.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    queryClickHandler(testUnit4, query4, "103px", nonDefaultSvg4, defaultSvg4);
  }
});
