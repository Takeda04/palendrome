function Palendrome() {

  const length = string.length;

  for (let i = 0; i < length / 2; i++) {

      if (string[i] !== string[length - 1 - i]) {
          alert( 'It is not a palindrome');
          return
      }else{
        alert( 'It is a palindrome');
      }
  }
  
}

const string = prompt('Enter a string or number: ');

Palendrome(string);
