#Dark and Light Mode To do List App

## Project Description 
--------------------
This web application demonstrates the functionality for adding elements to the DOM and altering the colour styles for a whole page. 

## Features 
-------
- Light mode and dark mode styles
- dynamic button updates to demonstrate changes
- Form for adding to do list items to the DOM
- To do list items, are checkable and animate on completion
- Option to edit and delete created tasks

## Files
---------
-` index.html`: Contains the HTML structure and content of the web page
- `styles.css`: Contains the styling for the page, including variables for various style
- `app.js`: Contains the JavaScript code for DOM manipulation.
- `README.md`: Provides and overview of the project and its features.

## How to Use
----
1. Open the Index.html file in a web browser. 
2. Click the theme button to choose light or dark mode. 
3. Create a task by filling in the form
4. Use task buttons to edit, delete or complete the task as appropriate. 

## JavaScript Code Explanation
------
- `onClick` the Theme button calls the `nightTimeDayTime` function
- This function checks the current state of the page, and calls the appropriate function
- Both the `nightTime` and `dayTime` functions reassign the values of the `CSS` colour variables
- `onClick` the submit button calls the `tasKBuilder` which  creates an instance of the Task class. 
- This class adds a section of HTML to the page, the details of which are filled in from the values the user has submitted in the form. 
- The different tasks are controlled using an `actionId` to allow for simple selection of each task.
- Once created the user input is cleared from the form 
- If a task is completed the `removeTaskFromPage` function is called which updates the task Id thus triggering a `CSS` animation and the eventual hiding of the task. Hidden tasks are not fully removed so that in the next release of this app a completed tasks list can be displayed. 
- `deleteTask` completely removes the task, after triggering a window alert for confirmation.
- `editTask` returns the values from the task to the form, and removes the task, allowing the user to edit the content and resubmit the task.