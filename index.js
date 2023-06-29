function isPalindrome(word) {
  //Iterate through the word to the middle.
  for(i = 0; i< word.length / 2; i++) {
    const j = word.length - 1 -i;
    const starting =word[i];
    const ending =word[j];
    if(starting !== ending) {
    //  If they are not similar return false.
      return false;
  
      }
    }
    //If they are not similar return false.
    return true;

  }


/* 
Pseudocode;
   Iterate through the word to the middle.
   If they are not similar return false.
   Taking the first letter comparing it with the last if they are the same  up to the middle return true.

*/

/*
Iterate through the word to the middle.If they are not similar return false.
Taking the first letter comparing it with the last if they are the same  up to the middle return true.
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
