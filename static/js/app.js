// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    let metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    let filteredResult = metadata.filter(sampleObj => sampleObj.id == sample);
    let result = filteredResult[0];

    // Use d3 to select the panel with id of `#sample-metadata`
    let PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
  });
}

// function to build charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    let samples = data.samples;

    // Filter the samples for the object with the desired sample number
    let filteredResult = samples.filter(sampleObj => sampleObj.id == sample);
    let result = filteredResult[0];

    // Get the otu_ids, otu_labels, and sample_values
    let otu_ids = result.otu_ids;
    let otu_labels = result.otu_labels;
    let sample_values = result.sample_values;

    // Build a Bubble Chart
    let bubbleData = [
      {
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        mode:'markers',
        marker: {
          size: sample_values,
          color: otu_ids,
          colorscale: 'Earth'
        }
      }
    ];

    // Render the Bubble Chart
    let bubbleDataLayout = {
      title: 'Bacteria Cultures per Sample',
      margin: { t: 30, 1: 150},
      showlegend: false,
      hovermode: 'closest',
      xaxis: { title: 'OTU ID' },
      yaxis: { title: 'Number of Bacteria' },
      
    };

    Plotly.newPlot('bubble', bubbleData, bubbleDataLayout);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    let yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
    let barData = [
      {
        y: yticks,
        x: sample_values.slice(0, 10).reverse(),
        text: otu_labels.slice(0, 10).reverse(),
        type: 'bar',
        orientation: 'h',
      }
    ];

    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately - done above
    let barLayout = {
      title: 'Top 10 Bacteria Cultures Found',
      margin: { t: 30, 1: 150},
      showlegend: false,
      hovermode: 'closest',
      xaxis: { title: 'Number of Bacteria' },
    };

    // Render the Bar Chart
    Plotly.newPlot('bar', barData, barLayout);   
  });
}

// Build a Gauge Chart
function buildGauge(wfreq) {
  // Building the Gauge Chart
  let gaugeData = [
    {
      domain: { x: [0, 1], y: [0, 1] },
      value: wfreq,
      title: { text: "Belly Button Washing Frequency<br>Scrubs per Week"},
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        axis: { range: [null, 9] },
        steps: [
          { range: [0, 1], color: "lightgray" },
          { range: [1, 2], color: "purple" },
          { range: [2, 3], color: "violet" },
          { range: [3, 4], color: "indigo" },
          { range: [4, 5], color: "blue" },
          { range: [5, 6], color: "green" },
          { range: [6, 7], color: "yellow" },
          { range: [7, 8], color: "orange" },
          { range: [8, 9], color: "red" }
        ],
        threshold: {
          line: { color: "black", width: 4 },
          thickness: 0.75,
          value: wfreq
        }
      }
    }
  ];

  let gaugeLayout = {
    width: 500,
    height: 400,
    margin: { t: 0, b: 0 }
  };

  // Render the Gauge Chart
  Plotly.newPlot('gauge', gaugeData, gaugeLayout);
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    let sampleNames = data.names;

    // Use d3 to select the dropdown with id of `#selDataset`
    let selector = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Get the first sample from the list
    let firstSample = sampleNames[0];

    // Build charts and metadata panel with the first sample
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialise the dashboard
init();