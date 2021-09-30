// This program read a data.txt file then sort the array in the file as ASC and save it in output.txt file
var fs = require('fs');

try {  
    var data = fs.readFileSync('data.txt', 'utf8'); // open and read the data.txt file
    data = JSON.parse("[" + data + "]"); // convert the string of the file to array
    console.log("data.txt file contents array : ", data); // print the data.txt contents
    data = ASCbubblesorting(data); // call the ASC sort function to sort data.txt file
    fs.writeFileSync('output.txt', data.toString()); // write the array on output.txt file
    console.log("The array sorted as ASC order and saved in output.txt file"); // for style 
} catch(e) {
    console.log('Error:', e.stack);
}

// This function to sort an array as ASC by bubble algorthim
function ASCbubblesorting (numbersarray)
{
    //let numbersarray = [5, 8, 0, 1, 9, 11, 15, 16]; // immutable 
    let numbers = [...numbersarray]; // copy as mutable array
    console.log("Original Array Numbers list before ASC order sorting: ", numbersarray);
    for(let i = 0 ; i < numbers.length ; i++)
    {
        for(let j = 0 ; j < numbers.length ; j++)
        {
            if(numbers[j] > numbers[j + 1])
            {
                let temp = numbers[j];
                numbers[j] = numbers[j + 1]
                numbers[j + 1] = temp;
            } 
        }
        
    }
    console.log("Numbers list After ASC order sorting: ", numbers);
    return(numbers);
}

// This function to sort an array as DESC by bubble algorthim
function DESCbubblesorting (numbersarray)
{ 
    let numbers = [...numbersarray]; // copy as mutable array
    console.log("Original Array Numbers list before DESC sorting: ", numbersarray);
    for(let i = 0 ; i < numbers.length ; i++)
    {
        for(let j = 0 ; j < numbers.length ; j++)
        {
            if(numbers[j] < numbers[j + 1])
            {
                let temp = numbers[j];
                numbers[j] = numbers[j + 1]
                numbers[j + 1] = temp;
            }
        }
    }
    console.log("Numbers list After DESC order sorting: ", numbers);
    return(numbers);
}