// From https://gist.github.com/glauberramos/3087548
// this function represents a book from an online library
// it has 3 methods to search the book, remove a specific word and change it
// it has 4 attributes, name, author, date and content
// creates libaries stuffz
function elementliBRaryContent(a, b, c, d) {
  const bnam = a; const baut = b;
  const bdat = c;
  const bcont = d;
  const self = { findword(x) { return bcont.indexOf(x) >= 0; },
    findremword(y) { return bcont.indexOf(y) >= 0 ? bcont.replace(`${y} `, '') : bcont; },
    findrepword(z, w) { return bcont.indexOf(z) >= 0 ? bcont.replace(z, w) : bcont; },
    getbnam() { return bnam; },
    getbaut() { return baut; },
    getbdat() { return bdat; },
    getbcont() { return bcont; },
  };

  return self;
}
