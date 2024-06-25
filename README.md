**Memory Game**
================

A memory game built with HTML, CSS, and JavaScript. This game features a 4x4 grid of cards with random emojis. The goal of the game is to find all the matching pairs of emojis by flipping the cards. The game keeps track of the number of moves and time taken to complete the game.

![Game Preview](/assets/images/game.JPG)

**Design Features**
-----------------

### Colors

![Color Palate](/assets/images/colorpalate.JPG)

* Primary color: `#88498F`
* Secondary color: `#E0CBA8`
* Background color: `779FA1`

### Typography

* Font family: Arial, Helvetica, sans-serif
* Font sizes:
	+ Header: 18pt
	+ Body: 14pt
	+ Button: 18pt

### Layout

* The game board is a 4x4 grid of cards, with a gap of 20px between each card.
* The cards are positioned absolutely, with a width and height of 100px.
* The game container is centered horizontally and vertically on the page.

**Technical Details**
--------------------

* Built with HTML, CSS, and JavaScript.
* Uses CSS Grid for layout and styling.
* JavaScript is used for game logic and event handling.
* The game uses a Fisher-Yates shuffle algorithm to randomize the card order.

**Bug Fixing**
-------------

* During testing a bug was apparant. On testing code only 5 available emoji pairs were displaying. On reviewing code it was apparant that I had not added the generated HTML code to the page and had created the HTML structure as a string, but had not appended it to the DOM. The fix applied was modyfing the `generateGame` function to apped the generated HTML to the `boardContainer` element.
* There was also an apparant issue with the const pickRandom function and an update was required to ensure that the `pick` array will always contain the required number of unquie emojis which results in the correct number of cards being generated.

**Testing**
---------

* Tested on Chrome, Firefox, and Safari browsers.
* Tested on desktop and mobile devices.
* Tested for accessibility using WAVE Web Accessibility Evaluation Tool.

| Test Completed |  Expected Result  | Actual Result |
|:--------------:|:-----------------:|--------------:|
| Page Load   			 | Page loads with 16 black cards, start button visable 		 | 18/06/2024 Page loads, 16 blank cards, start button visable.		 |
| Start Button works correctly   			 |  On pressing start the time stars to increase		 |   18/06/2024 on pressing start button the timer starts to increase time 		 |
| On clicking on cards, each card flips with unique emojia  			 | All cards flips on clicking with unique emoji pairs	 |    18/06/2024, each card is clickable, which seperate emojia pairs		 |
| When clicking two different types of emoji's the card flip back	 | When two cards are selected if they do not match the cards flip back to blank		 | 18/06/2024 When clicking opposing emojis the cards both flip back to blank. |
| When clicking on matching pairs, the cards do not flip back over and stay visable.	 |  When matching two cards, they both stay visable.	 |   18/06/2024 When matching two cards they do both stay visable to the user. |
| On clicking on cards, each card flips with unique emojia  			 | All cards flips on clicking with unique emoji pairs	 |    18/06/2024, each card is clickable, which seperate emojia pairs		 |
| On completion of the game the card deck flips with winning statistics 			 | On completion of matching all pairs, the entire deck should flip revieling	 |    18/06/2024, on completion of the game the card deck flips.	 |

**Game Components**
-------------------

### CSS

The CSS code defines the layout and styling of the game. Here are some key components:

* The `body` tag has a width and height of 100%, a background color of `#779fa1`, and overflow is hidden.
* The `.game` class is positioned absolutely with a top of 60%, left of 50%, and transform of translate(-50%, -50%).
* The `.welcome-box` class has a white background, padding of 20px, border-radius of 10px, box-shadow of 0 0 10px rgba(0, 0, 0, 0.1), text-align of center, and margin of 20px auto.

### JavaScript

The JavaScript code defines the game logic and event handling. Here are some key components:

* The `selectors` object contains references to various HTML elements on the page.
* The `state` object contains five state properties: `gameStarted`, `flippedCards`, `totalFlips`, `totalTime`, and `loop`.
* The `shuffle` function takes an array as an argument and returns a shuffled version of the array using the Fisher-Yates shuffle algorithm.
* The `pickRandom` function takes an array and a number as arguments and returns a new array with the specified number of random elements from the original array.
* The `generateGame` function generates the game board by creating a 4x4 grid of cards with random emojis.
* The `startGame` function sets the `gameStarted` state property to true, toggles the disabled class on the start button, sets up an interval to update the moves and timer, and initializes the game.
* The `flipBackCards` function removes the flipped class from all unmatched cards and resets the `flippedCards` state property to zero.
* The `flipCard` function toggles the flipped class on a card, updates the `flippedCards` and `totalFlips` state properties, checks for a match, and updates the moves and timer.

**Getting Started**
-------------------

1. Open the `index.html` file in a web browser to play the game.
2. Click on a card to start playing.

**License**
---------

This project is licensed under the MIT License. See `LICENSE` for details.

**Author**
-------

![Mike Anning](https://www.linkedin.com/in/michael-anning-855742239/)

## Running Tests

### Validation

When validated through HTML, CSS and JavaScript validators the code performs well with no apparant issues;

![HTML Validator](/assets/images/HTML%20validator.JPG)
[CSS Validator](/assets/images/css%20validation.JPG)

* Primary color: `#88498F`
* Secondary color: `#E0CBA8`
* Background color: `779FA1`


