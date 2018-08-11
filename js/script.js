// FSJS - Random Quote Generator

// Creates an array of 5 different quotes
var quotes = [
  {quote: 'Look deep into nature and then you will understand everything better',
   source:'Albert Einstein',
  },
  {quote: 'Adopt the pace of nature: her secret is patience',
   source: 'Ralph Waldo Emerson',
  },
  {quote: 'Youth is the gift of nature, but age is a work of art',
   source:'Stanislaw Jerzy Lec',
   year: 1957
  },
  {quote: 'Rain is grace; rain is the sky descending to the earth; without rain, there would be no life',
   source:'John Updike',
  },
  {quote: 'Natures beauty is a gift that cultivates appreciation and gratitude',
   source:'Louie Schwartzberg',
   year: 2011,
  }

]

//* Creates a randome quote by using the random number function *//

function getRandomQuote(array) {
  var number = Math.floor(Math.random()* array.length);
  return quotes[number]
}

// Create the printQuote funtion and name it printQuote

function printQuote(randomQuote) {
  //* calls the getRandomQuote function *//
  var randomQuote = getRandomQuote(quotes);
  //* creates a string of variables including html of how they are viewed on the page *//
  var stringOfQuoteProperties = "<p class='quote'>" + randomQuote.quote + "</p>" + "<p class='source'>" + randomQuote.source 
  var year = "<span class = 'year'>" + randomQuote.year + "</span>";
  //* makes an exception for those with a year *//
  if (randomQuote.hasOwnProperty('year')) {
    stringOfQuoteProperties += year 
  }
  else {
  }
  stringOfQuoteProperties += "</p>"
  document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;
}

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
