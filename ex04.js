//tamrin 1

function sumOfArray(arr){
    sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i]%2===1) sum += arr[i];
    }
    return sum;
}
let numbers = [1,2,3,4,5,6,7,8,9];
console.log(sumOfArray(numbers));

//tamrin 2

function repeat(str, letter){
    sum = 0;
    for(let i = 0; i < str.length;  i++){
        if (str[i] === letter) sum++;
    }
    return sum;
}
let text = "javascript is awesome";
let character='a';
console.log(repeat(text, character));


//tamrin 3

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(answer => {
    if (!answer === true) {
      throw new Error('didnt respone.');
    }
    return answer.json();
  })
  .then(data => {
    console.log(data); 
  })
  .catch(error => {
    console.error('Error:', error);
  });
