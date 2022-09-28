// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

//Receiving a url as a string, no need to check for invalid input
// return the url with anything after # removed
// 
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"
//check if there is a pound in the string, if so slice it using the index of the sign as the end. Otherwise just return the url

function removeUrlAnchor(url){
    // TODO: complete
    
    if(url.includes('#')){
      return url.slice(0, url.indexOf('#'))
    } 
    return url
  }