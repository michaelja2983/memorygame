const selectors = { //selecting various HTML elements on the page
    boardContainer: document.querySelector('.board-container'),
    board: document.querySelector('.board'),
    moves: document.querySelector('.moves'),
    timer: document.querySelector('.timer'),
    start: document.querySelector('button'),
    win: document.querySelector('.win')
}

const state = { //commencing iwth 5 state properties
    gameStarted: false,  // this is the boolean value which indicates if game has started or not. Initally set to false.
    flippedCards: 0, //This is a integer value representing the number of cards flipped, initally zero.
    totalFlips: 0, //Integer value representing total num of flips made in the game.
    totalTime: 0, // integer for total time taken to play game.
    loop: null //This is property used to store ref to the timer.
}

const shuffle = array => {  //javascript function named shuffle.  Here we are taking the single argument array
    const clonedArray = [...array]; //using spread operator created copy of orignal array
    for (let i = clonedArray.length - 1; i > 0; i--) {  // next we use the Fisher-Yates shuffle algorithm, iterating through the arrange from last to first element.
      const randomIndex = Math.floor(Math.random() * (i + 1));  // for each element swapping with random element from the remaining unshuffled portion of the array.
      [clonedArray[i], clonedArray[randomIndex]] = [clonedArray[randomIndex], clonedArray[i]]; // i is decremented from the last to first element. Random Index generated
    } // using math.random() and math.floor() produces a random integer between 0 and i. i is swapped with the element at index random index using destructuring assignment.
    return clonedArray; // //finally returned shuffed array is returned
  }


  const pickRandom = (array, items) => {
    const set = new Set();
    while (set.size < items) {
      set.add(array[Math.floor(Math.random() * array.length)]);
    }
    return Array.from(set);
  }

  const generateGame = () => {
    const dimensions = selectors.board.getAttribute('data-dimension')  

    if (dimensions % 2!== 0) {
        throw new Error("The dimension of the board must be an even number.")
    }

    const emojis = [
        '😊', 
        '😄', 
        '😃', 
        '😆', 
        '😎', 
        '😍', 
        '😘', 
        '😗', 
        '😙', 
        '😚'
      ]
    const picks = pickRandom(emojis, dimensions * dimensions / 2) 
    const items = shuffle([...picks,...picks])
    const cards = `
        <div class="board" style="grid-template-columns: repeat(${dimensions}, auto)">
            ${items.map(item => `
                <div class="card">
                    <div class="card-front"></div>
                    <div class="card-back">${item}</div>
                </div>
            `).join('')}
       </div>
    `

    selectors.boardContainer.innerHTML = cards; // Append the generated HTML to the boardContainer element
}

const startGame = () => {
    Object.assign(state, { gameStarted: true }); //object.assign is concise way to update an object. new property game started to true.
    selectors.start.classList.toggle('disabled', true); //line toggles the disabled class on elem ref by selectors.start. The secon argument true ensures class added rather than toggled.
  
    state.loop = setInterval(() => { //sets up interval which will execute function every 1000 millisecon func is defined as arrow function () => {...}
      state.totalTime = state.totalTime + 1; //line increases the totaltime property of state of object by 1
  
      [selectors.moves, selectors.timer].forEach((element, index) => { //two arrays of elements and iterated back over using forEach() , callback takes two arguments elmenet and index
        element.innerText = [ //
          `${state.totalFlips} moves`,
          `Time: ${state.totalTime} sec`
        ][index];
      });
    }, 1000);
  }

  const flipBackCards = () => {
    const unmatchedCards = document.querySelectorAll('.card:not(.matched)');
    unmatchedCards.forEach(card => card.classList.remove('flipped'));
    state.flippedCards = 0;
  }

const flipCard = card => {
    state.flippedCards++
    state.totalFlips++

    if (!state.gameStarted) {
        startGame()
    }

    if (state.flippedCards <= 2) {
        card.classList.add('flipped')
    }

    if (state.flippedCards === 2) {
        const flippedCards = document.querySelectorAll('.flipped:not(.matched)')

        if (flippedCards[0].innerText === flippedCards[1].innerText) {
            flippedCards[0].classList.add('matched')
            flippedCards[1].classList.add('matched')
        }

        setTimeout(() => {
            flipBackCards()
        }, 1000)
    }
    if (!document.querySelectorAll('.card:not(.flipped)').length) {
        setTimeout(() => {
            selectors.boardContainer.classList.add('flipped')
            selectors.win.innerHTML = `
                <span class="win-text">
                    You won!<br />
                    with <span class="highlight">${state.totalFlips}</span> moves<br />
                    under <span class="highlight">${state.totalTime}</span> seconds
                </span>
            `

            clearInterval(state.loop)
        }, 1000)
    }
}


const attachEventListeners = () => {
    document.addEventListener('click', event => {
        const eventTarget = event.target
        const eventParent = eventTarget.parentElement

        if (eventTarget.className.includes('card') && !eventParent.className.includes('flipped')) {
            flipCard(eventParent)
        } else if (eventTarget.nodeName === 'BUTTON' && !eventTarget.className.includes('disabled')) {
            startGame()
        }
    })
}

generateGame()
attachEventListeners()

