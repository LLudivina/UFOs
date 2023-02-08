//We need to created a table!

// import the data from data.js to declare a variable, tableData, using const
const tableData = data;

// Reference the HTML table using d3 (point our data to our html page or use d3 to tell JavaScript to look for the tbody tags in html)
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}


//start of a new function
//function buildTable(data) {}

//The line we'll use to clear the data is tbody.html("");. But how exactly is this code clearing data?tbody.html references the table, pointing JavaScript directly to the table in the HTML page we're going to build.The parentheses with empty quotes (("");) is an empty string.Basically, this entire line—tbody.html("");—tells JavaScript to use an empty string when creating the table; in other words, create a blank canvas. This is a standard way to clear data.

//function buildTable(data) {tbody.html("");}

// forEach function that loops through our data array
//data.forEach((dataRow) => {  });

//Now we want to create a variable that will append a row to the table body.Notice that we're using let instead of var to declare the row variable. That's because this variable is limited to just this block of code. It's more appropriate to use var when we want the variable to be available globally, or throughout all of the code.This single line of code is doing a lot. It tells JavaScript to find the <tbody> tag within the HTML and add a table row ("tr").keep in mind that the <tr> tags are used for each row in a table. Each object, or UFO sighting, in the array will be wrapped in a <tr> tag.
  //let row = tbody.append("tr");

//now loop through the data rows
//These fields will become table data and will be wrapped in <td> tags when they're appended to the HTML table. It gets a little confusing here, but we're going to set up another function within our original function for the forEach loop.Below the line where we appended table rows, we'll set up another function:
  //Object.values(dataRow).forEach((val) => {  });

//append each value of the object to a cell in the table
//let cell = row.append("td");

//add the values. When we chain .text(value) to the variable, we are extracting only the text of the value.
//cell.text(val);

//The first step of our code is complete: we've created a table!