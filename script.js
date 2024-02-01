// Get The DOM Elements
const queryHeading1 = document.getElementById("content-heading-1"),
queryHeading2 = document.getElementById("content-heading-2"),
queryHeading3 = document.getElementById("content-heading-3"),
queryHeading4 = document.getElementById("content-heading-4"),
generalQueryHeading = document.querySelector("#main-content .content-heading"),
query1 = document.getElementById("visible"),
query2 = document.getElementById("hidden-1"),
query3 = document.getElementById("hidden-2"),
query4 = document.getElementById("hidden-3"),
h4Headings = document.querySelectorAll("h4");

// For toggling between functions
var testUnit1 = true;
var testUnit2 = true;
var testUnit3 = true;
var testUnit4 = true;

const queryOpener = (query) => {
    query.style.height = "100%";
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

queryHeading1.addEventListener("click", () => {
    if (testUnit1) {
        queryCloser(query1);
    } else {
        queryOpener(query1);
    }
});

queryHeading2.addEventListener("click", () => {
    if (testUnit2) {
        queryOpener(query2);
    } else {
        queryCloser(query2);
    }
});

queryHeading3.addEventListener("click", () => {
    if (testUnit3) {
        queryOpener(query3);
    } else {
        queryCloser(query3);
    }
});

queryHeading4.addEventListener("click", () => {
    if (testUnit4) {
        queryOpener(query4);
    } else {
        queryCloser(query4);
    }
});
