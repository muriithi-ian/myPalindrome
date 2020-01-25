//select  form
const form = document.getElementById('form');
/* sitesVisited = navigator.userAgent;
console.log(sitesVisited); */
// var colors = ["burlywood", "cadetblue", "olivedrab", "purple", "orchid", "coral", "darkmagenta", "teal"];


form.addEventListener('submit', (e) => {
    e.preventDefault();
    palindrome();
});


function palindrome() {
    //get value of string in textbox
    word = document.getElementById('check').value;
    console.log(word);

    //select point of display
    result = document.getElementById('result');

    //check textbox has content
    if (word.length != 0) {
        //convert to uppercase
        myWord = word.toLowerCase();
        console.log(myWord + " lowercase");

        //remove punctuation, numbers and spaces
        var re = /[^A-Za-z0-9]/g;
        myWord = myWord.replace(re, '');
        console.log(myWord + " is string without punc");

        //reverse string
        reverseMyWord = myWord.split('').reverse().join('');
        console.log(reverseMyWord + " is reversed");

        //output result
        if (myWord === reverseMyWord) {
            answer = "'" + word + "' is a palindrome";
            result.innerHTML = answer;
        }
        else {
            answer = "'" + word + "' is <strong>NOT</strong> a palindrome";
            result.innerHTML = answer;
        }
    } else {
        result.innerHTML = "Please enter a word in the textbox";
        /* sitesVisited = window.history;
        console.log(sitesVisited); */
    }

    form.reset();
}