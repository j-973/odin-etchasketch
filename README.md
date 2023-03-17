# odin-etchasketch

## Description
A cross between a sketchpad and an Etch-a-Sketch, in your browser!

My iteration of this project adheres to the guidelines set out by the maintainers of **The Odin Project**, a self-paced curriculum for learning web development (links at the bottom).

**Why did I complete this project?:** To better understand and practice element manipulation in the DOM.

## Preview
![j-973 github io_odin-etchasketch_](https://user-images.githubusercontent.com/47262509/225996936-1da2e0ac-760b-4050-a4aa-d6fa5e80a8f7.png)
## Launching this Project
- Click here to run it in your browser: https://j-973.github.io/odin-etchasketch/

## Features
* Select one of many color modes to color in a grid of squares:
	* **Black:** Adds 100% opacity black.
	* **Shade:** Adds 10% opacity to grid cells on mouse entry, until cells are fully black.
	* **Rainbow:** Changes grid cells to a random RGB color on mouse entry.
* **Clear Grid:** Reverts all cells to their initial color and opacity.
* **Change Grid Size:** Grid sizes between 1-100 are allowed.

* **Right-click** your mouse to toggle cell borders off/on.

## What I Learned
- Nested "for" loops are useful for making a grid of elements (e.g. many divs/cells within many rows).
- How to add, remove, and toggle CSS classes on DOM elements using classList.add(), .remove(), and .toggle().
- How to use prompt() to get user input, and how to validate that input by placing it within a conditional statement testing many conditions at once using the logical OR operator (||).
- How to use event listeners and ev.currentTarget to handle mouse events on each cell in the grid and change their CSS styles.

### Sources
 - Odin Project "Foundations" Path: https://www.theodinproject.com/paths/foundations/courses/foundations
 - Project Instructions: https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/etch-a-sketch-project
