# Web Services Front-end Dev Test

The goal of this assessment is to replicate the frontend application below (as close as possible). 

Please complete as much of the assignment as you can in the allotted time. You don’t need to save the older parts of the assignment – the assessment is designed so you build on top of the previous part.

If you have any questions or notice something is not working (like the API, or any of the links in this document), please contact webdevs@carleton.ca.

## Project requirements

* Only front-end code will be considered in this project: HTML5, CSS and Javascript.
* The project can be written in pure javascript or use frameworks like React, Vue.js or others.
* CSS preprocessors can be used at will.
* CSS frameworks like Tailwind are cool. So are styled components and pure CSS. Whichever you prefer.
* Package managers and task runners can be used at will.

## Submission Instructions

* Create a fork of this repo.
* Develop and version this project using git.
* Commit your work often. We need to see progression through the steps.
* Create a README with clear instructions on how to run your project.
* Send the link of the completed repo to webdevs@carleton.ca

## Rating criteria

* Loyalty to requested features;
* Semantically structured HTML;
* Accesbility (WCAG 2.0 AA)
* CSS naming clarity;


## Bonus points (How deep is your love?)

* Use of GitFlow for each step
* Use of TypeScript
* Use of TailwindCSS or follow some CSS style guide
* Use of Clean Code Techniques
* Follow some Javascript style guide
* Adapt the view to be responsive
* Componentization and extensibility of Javascript components
* Apply transition animations

## DOUBLE Bonus Points 

* Add creative extra features, we all love cool functionality and nice designs
* When searching, highlight the matched search characters (only what's matched) in the hero cards. 
* Create a user customization option (e.g. dark mode / grid vs list view) 
* Persist the data when the user reload the page

# Assessment

## Part 1

The first step of the assignment is to fetch data from this public JSON API, and present the information on the screen. The route to fetch the data is:

https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json

You do not need any credentials to access the URL above. The goal of this part is to present the data as a list on the screen like below:

<img src='./images/01.png'/>

Do not worry about formatting for this part. Just present the correct information given the API above on the screen.

## Part 2

The second step of the assignment is to style the data in the previous part using CSS. Replicate the style of the image below as best as you can.

<img src='./images/02.png'/>

***Note: The card list should scroll vertically.***

If you are having difficulties replicating this part exactly and it is taking too long, move onto the next part. The future steps do not measure your ability to write CSS and HTML.

## Part 3
In this part, you are going to add a text input, where a user can filter the list of heroes by their name as you can see on the images below.

<img src='./images/03.png'/>
<img src='./images/04.png'/>

## Part 4

In this part, you are going to make each hero have an expandable list view, so that you can view all of their powers stats. See the images below for what the view should look like when expanded. 

<img src='./images/05.png'/>
<img src='./images/06.png'/>

## Part 5
In this part, you will add a text field in the expanded view of each hero to add tags about the hero. Here is what it looks like (added a tag called “love”):

<img src='./images/07.png'/>

## Part 6
**In this last part**, you will add a tag bar to filter hero based on tags. Do not be concerned with filtering both by name and tags at the same time. 

The Image bellow shows only the Super Heroes with the tag ***"love"***
<img src='./images/08.png'/>

The Image bellow shows only the Super Heroes with the tag ***"hate"***

<img src='./images/09.png'/>

## References

* https://akabab.github.io/superhero-api/api/
