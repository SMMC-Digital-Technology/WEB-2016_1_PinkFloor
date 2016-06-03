/**
 * Tutorial on making graphs with plotly.js
 **/

/**
 * This function calculates the interest owed on a simple interest loan.
 * Parameters: principle, rate (per year) and time (in years).
 * Returns: the simple interest
 */
function simpleInterest(principle, rate, time) {
    return principle * rate * time;
}

/**
 * This function draws a  graph
 */
function drawGraph() {

    // declare all variables (variables inside a function are created when the function is called)
    var trace, data, layout, xData = [], yData = [];
    
    for(var i = 0; i < 10; i++) {
        xData[i] = i;
        yData[i] = simpleInterest(100, 0.1, i);
    }

    /* Trace is an object that stores the x and y values. The x, y and type variables are required mandatory. */
    trace = {
        x: xData,
        y: yData,
        type: 'scatter', // the type of graph
        mode: 'lines+markers', // how the data should be displayed
        name: "trace" // a name for the data to appear on the legend (if present)
    };

    // Data is an array that stores the traces we wish to graph. Add further traces to the array for multiple data sets.
    data = [trace];
 
    /* To add a title and axis labels, we need to create a layout (another object). Setting a layout is optional, but they do improve the graph. */
    layout = {
        title: "Income Tax in Zabututi",
        yaxis: {
            title: "Tax Cost", // give the axis a label
            zerolinewidth: 1.5 // makes the zero line thicker
        },
        xaxis: {
            title: "Income Range",
            zerolinewidth: 1.5,
            range: [0, 250000] // sets a minimum and maximum value for the axis
        }
    };

    /* Finally we tell plotly to put the graph in the 'graph' div.*/
    Plotly.newPlot("graph", data, layout);
}

// Run the function to draw the graph.
drawGraph();
