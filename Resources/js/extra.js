//Since we know we want a table, step 1 is to created a table!

// import the data from data.js to declare a variable, tableData, using const
const tableData = data;

// Reference the HTML table using d3 (also known as point our data to our html page or use d3 to tell JavaScript to look for the tbody tags in html)
var tbody = d3.select("tbody");

//start of a new function
function buildTable(data) {}

//The line we'll use to clear the data is tbody.html("");. But how exactly is this code clearing data?tbody.html references the table, pointing JavaScript directly to the table in the HTML page we're going to build.The parentheses with empty quotes (("");) is an empty string.Basically, this entire line—tbody.html("");—tells JavaScript to use an empty string when creating the table; in other words, create a blank canvas. This is a standard way to clear data.
function buildTable(data) {tbody.html("");}

// forEach function that loops through our data array
data.forEach((dataRow) => {  });

//Now we want to create a variable that will append a row to the table body.Notice that we're using let instead of var to declare the row variable. That's because this variable is limited to just this block of code. It's more appropriate to use var when we want the variable to be available globally, or throughout all of the code.This single line of code is doing a lot. It tells JavaScript to find the <tbody> tag within the HTML and add a table row ("tr").keep in mind that the <tr> tags are used for each row in a table. Each object, or UFO sighting, in the array will be wrapped in a <tr> tag.
  let row = tbody.append("tr");

//now loop through the data rows
//These fields will become table data and will be wrapped in <td> tags when they're appended to the HTML table. It gets a little confusing here, but we're going to set up another function within our original function for the forEach loop.Below the line where we appended table rows, we'll set up another function:
  Object.values(dataRow).forEach((val) => {  });

//append each value of the object to a cell in the table
let cell = row.append("td");

//add the values. When we chain .text(value) to the variable, we are extracting only the text of the value.
cell.text(val);

//The first step of our code is complete: we've created a table!


//step 2 is to add filters
function handleClick() {
  let date = d3.select("#datetime").property("value");

  //The .select() function is a very common one used in D3. It will select the very first element that matches our selector string: "#datetime". The selector string is the item we're telling D3.js to look for.

  //With d3.select("#datetime"), for example, we're telling D3 to look for the #datetime id in the HTML tags. We haven't created our HTML yet, but we know that the date value will be nested within tags that have an id of "datetime."
  
 // By chaining .property("value"); to the d3.select function, we're telling D3 not only to look for where our date values are stored on the webpage, but to actually grab that information and hold it in the "date" variable.

 //Now we need to set a default filter and save it to a new variable. Our default filter will actually be the original table data because we want users to refine their search on their own terms. 
 let filteredData = tableData;

 //Here's a variable we haven't seen in a while: tableData. This is the original data as imported from our data.js file. By setting the filteredData variable to our raw data, we're basically using it as a blank slate. The function we're working on right now will be run each time the filter button is clicked on the website. If no date has been entered as a filter, then all of the data will be returned instead.

//The next step is to check for a date filter using an if statement.
// if-statement syntax
if ( condition ) { code to execute }

// pseudocode practice (about what we want our code to do.)
if (a date is entered) {
  Filter the default data to show only the date entered
};
 
//We want JavaScript to check for a date. If one is present, we want it to return only the data with that date. Now return to our app.js file to add our if statement.
if (date) {
  filteredData = filteredData.filter(row => row.datetime === date);
};

//Take a look at the syntax for the .filter() method: row => row.datetime === date);. This line is what applies the filter to the table data. It's basically saying, "Show only the rows where the date is equal to the date filter we created above." The triple equal signs test for equality, meaning that the date in the table has to match our filter exactly

// There are two ways to test for equality in JavaScript: == and ===. While they look similar, there are differences. A triple equal sign (===) is checking for strict equality. This means that the type and value have to match perfectly.
//A double equals sign (==) is checking for loose equality. This means that the type and value are loosely matched.

//When we look at our complete if statement, it should appear as follows:
if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  };

  //This is great! Our handleClick() function tells the code what to do when an event occurs (such as someone clicking a filter button), and it can apply that filtered data using an if statement. Being able to do all of this is great, especially since it involves creating functions written in a syntax that isn't the easiest to learn. There is one more step to complete with this function, though: building the table using the filtered data.

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);