// Get The DOM Elements
const queryHeading1 = document.getElementById("content-heading-1"),
  queryHeading2 = document.getElementById("content-heading-2"),
  queryHeading3 = document.getElementById("content-heading-3"),
  queryHeading4 = document.getElementById("content-heading-4"),
  query1 = document.getElementById("visible"),
  query2 = document.getElementById("hidden-1"),
  query3 = document.getElementById("hidden-2"),
  query4 = document.getElementById("hidden-3");

// For toggling between functions
var testUnit1 = true;
var testUnit2 = true;
var testUnit3 = true;
var testUnit4 = true;

const queryOpener = (query, size) => {
  query.style.height = size;
  testUnit1 = true;
  testUnit2 = false;
  testUnit3 = false;
  testUnit4 = false;
};

const queryCloser = (query) => {
  query.style.height = "0";
  testUnit1 = false;
  testUnit2 = true;
  testUnit3 = true;
  testUnit4 = true;
};

const queryClickHandler = (test, query, size) => {
  if (test) {
    queryOpener(query, size);
  } else {
    queryCloser(query);
  }
};

queryHeading1.addEventListener("click", () => {
  if (testUnit1) {
    queryCloser(query1);
  } else {
    queryOpener(query1, "85.4px");
  }
});

queryHeading2.addEventListener("click", () => {
  queryClickHandler(testUnit2, query2, "85.4px");
});

queryHeading3.addEventListener("click", () => {
  queryClickHandler(testUnit3, query3, "120.6px");
});

queryHeading4.addEventListener("click", () => {
  queryClickHandler(testUnit4, query4, "103px");
});
