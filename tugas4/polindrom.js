function isPolindrome(word) {
    const reversedWord = word.split('').reverse().join('');

    return word === reversedWord
}

const kata = "racecar";
if (isPalindrome(kata)) {
    console.log(kata + " adalah polindrom.");
} else {
    console.log(kata + " bukan polindrome.");
}