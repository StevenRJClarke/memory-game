/*
 * Create a list that holds all of your cards
 */

var cardList = $('.card');
console.log(cardList);


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

 var newList = shuffle(cardList);
 console.log(newList);

var front = '<div class=\'front\'></div>';
var back = '<div class=\'back\'></div>';
var flip = '<div class=\'flipper-container\'></div>';

newList.each(function() {
  $(this).wrap(flip);
  $(this).prepend(front);
  $(this).children('i').wrap(back);

  $(this).click(function() {
    $(this).addClass('open');
  })
})

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex); //Choose a random index from the card array (a number between 0 and 15)
        currentIndex -= 1; //Decrement the current index by 1 (from 16 to 15, from 15 to 14 etc...)
        temporaryValue = array[currentIndex]; //Store the currently indexed card
        array[currentIndex] = array[randomIndex]; //Replace the currently indexed card with the randomly chosen card...
        array[randomIndex] = temporaryValue; //...and replace the card that was randomly chosen with the currently index card... a swap!
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
