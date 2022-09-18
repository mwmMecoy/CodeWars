// Safen User Input Part I - htmlspecialchars
// You are a(n) novice/average/experienced/professional/world-famous Web Developer (choose one) who owns a(n) simple/clean/slick/beautiful/complicated/professional/business website (choose one or more) which contains form fields so visitors can send emails or leave a comment on your website with ease. However, with ease comes danger. Every now and then, a hacker visits your website and attempts to compromise it through the use of XSS (Cross Site Scripting). This is done by injecting script tags into the website through form fields which may contain malicious code (e.g. a redirection to a malicious website that steals personal information).

// Mission
// Your mission is to implement a function that converts the following potentially harmful characters:

// < --> &lt;
// > --> &gt;
// " --> &quot;
// & --> &amp;

//input of a string
//return the string with specified special characters replaced with safe conversions
//"<h2>Hello World</h2>" ==> &lt;h2&gt;Hello World&lt;/h2&gt;
// convert string into array, check each character and convert if necessary, then join back together to be returned

function htmlspecialchars(formData) {
    // Insert your code here
    let arr = formData.split('')
    for(let i = 0; i < arr.length; i++){
        if(arr[i] =='<'){
            arr[i] = '&lt;'
        } else if(arr[i] =='>'){
            arr[i] = '&gt;'
        } else if(arr[i] =='"'){
            arr[i] = '&quot;'
        } else if(arr[i] =='&'){
            arr[i] = '&amp;'
        }
    }
    return arr.join('')
}