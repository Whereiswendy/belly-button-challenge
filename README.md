# Belly Button Biodiversity Dashboard
Using the D3 Javascript library to generate an interactive dashboard to explore an umbilicus (belly button) biodiversity dataset.

# Executive Summary
This project, part of Module 14 Challenge for a data analytics bootcamp, involves building an interactive dashboard to explore the Belly Button Biodiversity dataset. This dataset catalogs the microbes that colonise human navels, revealing that a small number of microbial species are common among more than 70% of people, while the majority are relatively rare.

The primary objectives of this project are:

1. Data Visualisation: Utilize the D3 library to read in a JSON dataset and create interactive visualizations.

    - Horizontal Bar Chart: Displays the top 10 operational taxonomic units (OTUs) for each individual with dropdown selection.
    - Bubble Chart: Visualizes all OTUs for each individual with customizable markers for size and color.
    - Metadata Panel: Displays demographic information for each individual.

2. Interactivity: Ensure that all visualizations update when a new sample is selected, providing a dynamic user experience.

3. Deployment: Deploy the dashboard to a static page hosting service such as GitHub Pages, making it accessible online.

This project demonstrates proficiency in data handling, visualisation, and web deployment, showcasing the ability to create informative and interactive data-driven applications.

---

This project is an interactive dashboard to explore the Belly Button Biodiversity dataset.

## Features

- Interactive bar chart showing the top 10 OTUs found in an individual
- Bubble chart displaying each sample
- Gauge chart showing the washing frequency
- Demographic information panel

## Deployment

The app is deployed on GitHub Pages and can be accessed at the following link:

[Deployed App](https://whereiswendy.github.io/belly-button-challenge/)

## Usage

1. Clone the repository
2. Open `index.html` in your browser

## Contributing

Feel free to submit issues and pull requests.

---

# Module 14 Challenge Instructions

**Due Thursday by 23:59 Points 100**

**Submitting**: a text entry box or a website URL

## Background

In this assignment, you will build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/), which catalogues the microbes that colonise human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Before You Begin

1. Create a new repository for this project called `belly-button-challenge`. Do not add this Challenge to an existing repository.
2. Clone the new repository to your computer.
3. Inside your local git repository, copy the files from in the StarterCode folder contained within the Module 14 Challenge zip file. i.e. `index.html`, `samples.json`, and the `static` folder.

**NOTE**: You will not be required to access the `samples.json` file locally, but it is provided for reference.

4. Push the above changes to GitHub.
5. Deploy the new repository to GitHub Pages.

## Files

Download the following files to help you get started:

[Module 14 Challenge files](https://static.bc-edx.com/data/dla-1-2/m14/lms/starter/samples.json)

## Instructions

Complete the following steps:

1. Use the D3 library to read in `samples.json` from the URL `https://static.bc-edx.com/data/dla-1-2/m14/lms/starter/samples.json`.
2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    - Use `sample_values` as the values for the bar chart.
    - Use `otu_ids` as the labels for the bar chart.
    - Use `otu_labels` as the hovertext for the chart.

### Bar Chart

3. Create a bubble chart that displays each sample.
    - Use `otu_ids` for the x values.
    - Use `sample_values` for the y values.
    - Use `sample_values` for the marker size.
    - Use `otu_ids` for the marker colors.
    - Use `otu_labels` for the text values.

### Bubble Chart

4. Display the sample's metadata, i.e., an individual's demographic information.
    - Loop through each key-value pair from the metadata JSON object and create a text string.
    - Append an HTML tag with that text to the `#sample-metadata` panel.

5. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

6. Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file.

## Hints

- Use `console.log` inside of your JavaScript code to see what your data looks like at each step.
- Refer to the [Plotly.js documentation](https://plotly.com/javascript/) when building the plots.

## Requirements

### Bar Chart (30 points)

- Chart initializes without error (10 points)
- Chart updates when a new sample is selected (5 points)
- Chart uses Top 10 sample values as values (5 points)
- Chart uses `otu_ids` as the labels (5 points)
- Chart uses `otu_labels` as the tooltip (5 points)

### Bubble Chart (40 points)

- Chart initializes without error (10 points)
- Chart updates when a new sample is selected (5 points)
- Chart uses `otu_ids` for the x values (5 points)
- Chart uses `otu_ids` for marker colors (5 points)
- Chart uses `sample_values` for the y values (5 points)
- Chart uses `sample_values` for the marker size (5 points)
- Chart uses `otu_labels` for text values (5 points)

### Metadata and Deployment (30 points)

- Metadata initializes without error (10 points)
- Metadata updates when a new sample is selected (10 points)
- App Successfully Deployed to Github Pages (10 points)

## Grading

This assignment will be evaluated against the requirements and assigned a grade according to the following table:

| Grade | Points |
| --- | --- |
| A (+/-) | 90+ |
| B (+/-) | 80–89 |
| C (+/-) | 70–79 |
| D (+/-) | 60–69 |
| F (+/-) | < 60 |

## Submission

To submit your Challenge assignment, click Submit, and then provide the URL of your GitHub repository for grading.

**NOTE**: You are allowed to miss up to two Challenge assignments and still earn your certificate. If you complete all Challenge assignments, your lowest two grades will be dropped. If you wish to skip this assignment, click Next, and move on to the next module.

Comments are disabled for graded submissions in Bootcamp Spot. If you have questions about your feedback, please notify your instructional staff or your Student Success Advisor. If you would like to resubmit your work for an additional review, you can use the Resubmit Assignment button to upload new links. You may resubmit up to three times for a total of four submissions.

**IMPORTANT**: It is your responsibility to include a note in the README section of your repo specifying code source and its location within your repo. This applies if you have worked with a peer on an assignment, used code in which you did not author or create sourced from a forum such as Stack Overflow, or you received code outside curriculum content from support staff such as an Instructor, TA, Tutor, or Learning Assistant. This will provide visibility to grading staff of your circumstance in order to avoid flagging your work as plagiarized.

If you are struggling with a challenge assignment or any aspect of the academic curriculum, please remember that there are student support services available for you:

- Ask the class Slack channel/peer support.
- AskBCS Learning Assistants exists in your class Slack application.
- Office hours facilitated by your instructional staff before and after each class session.
- [Tutoring Guidelines](https://bootcampspot.com/) - schedule a tutor session in the Tutor Sessions section of Bootcampspot - Canvas

If the above resources are not applicable and you have a need, please reach out to a member of your instructional team, your Student Success Advisor, or submit a support ticket in the Student Support section of your BCS application.

## References

Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: [Belly Button Biodiversity](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/)
```
