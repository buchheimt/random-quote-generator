// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
    {
        quote: "You've got to ask yourself one question: \'Do I feel Lucky?\' Well, do ya punk?",
        source: "Clint Eastwood",
        citation: "Dirty Harry",
        year: "1971",
        tag: "Action"
    },
    {
        quote: "Say hello to my little friend!",
        source: "Al Pacino",
        citation: "Scarface",
        year: "1983",
        tag: "Crime"
    },
    {
        quote: "The greatest trick the Devil ever pulled was convincing the world he didn't exist",
        source: "Kevin Spacey",
        citation: "The Usual Suspects",
        year: "1995",
        tag: "Crime"
    },
    {
        quote: "Are you entertained?",
        source: "Russell Crowe",
        citation: "Gladiator",
        year: "2000",
        tag: "Action"
    },
    {
        quote: "You can't handle the truth!",
        source: "Jack Nicholson",
        citation: "A Few Good Men",
        year: "1992",
        tag: "Drama"
    },
    {
        quote: "Go ahead, make my day.",
        source: "Clint Eastwood",
        citation: "Sudden Impact",
        year: "1983",
        tag: "Crime"
    },
]