// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// An array that stores used quotes to make sure quotes aren't repeated until all have been used
var usedQuotes = [];

// Returns a random RGB value (0 - 255)
function getRandomRGB() {
    return Math.floor(Math.random() * 255);
}

// Returns a random color string in rgb notation i.e. "rgb(50, 50, 50)"
function getRandomColor() {
    return "rgb(" + getRandomRGB() + ", " + getRandomRGB() + ", " + getRandomRGB() + ")";
}

// Returns a random quote without repeating until all quotes have been used
function getRandomQuote() {
    // Select from the quotes array at random until a quote not in usedQuotes is found
    do {
        quote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (usedQuotes.indexOf(quote.quote) != -1);

    // New quote is added to usedQuotes
    usedQuotes.push(quote.quote);

    // usedQuotes is reset to just the current quote if all quotes have been used
    if (usedQuotes.length === quotes.length) {
        usedQuotes = [quote.quote];
    }
    return quote;
}

// Displays information for a randomly selected quote and updates page with a random bg color
function printQuote() {
    var quote = getRandomQuote();

    // Quotes are logged to confirm that quotes aren't repeating until all are used
    console.log(quote.quote);

    output = "<p class=\"quote\">" + quote.quote + "</p>";
    output += "<p class=\"source\"> " + quote.source;
    if (quote.citation) {
        output += "<span class=\"citation\">" + quote.citation + "</span>";
    }
    if (quote.tag) {
        output += "<span class=\"tag\">" + quote.tag + "</span>";
    }
    if (quote.year) {
        output += "<span class=\"year\">" + quote.year + "</span>";
    }
    document.getElementById('quote-box').innerHTML = output;
    document.body.style.backgroundColor = getRandomColor();
}

// Updates page with a new random quote every 10 seconds
setInterval(function() { printQuote(); }, 10000);