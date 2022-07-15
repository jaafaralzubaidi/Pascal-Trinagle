
function printPascalTriangle() {
    document.getElementById("result").innerHTML = "";
    document.getElementById("message").innerHTML = "";
    var inputValue = document.querySelector("input[type=text").value;


    const input = inputValidation(inputValue);
    if (input) {
        
        let start, start2, end, end2, time, time2;
        // Calculating the time for the first function
        start = new Date().getTime() ;
        var arr = generatePascalTriangle(inputValue - 1);
        end = new Date().getTime() ;
        console.log(end , start)
        generateMessage('h5', `Execution time for generatePascalTriangle() is:  ${(end - start)} `)
        
        // Calculating the time  for the second function
        start2 = new Date().getTime() ;
        var arr2 = generatePascalTriangle2(inputValue - 1);
        end2 = new Date().getTime() ;
        console.log(end2 , start2)
        generateMessage('h5', `Execution time for generatePascalTriangle2() is:  ${(end2 - start2)} `)
        printTriangle(arr);
        
    }
}
// This function will display Pascal's triangle 
function printTriangle(arr){
    for (var row = 0; row < arr.length; row++) {
        var div = document.createElement("div");
        
        for (var block = 0; block < arr[row].length; block++) {
            var span = document.createElement("span");
            span.innerHTML = arr[row][block];
            span.className = "block";
            div.appendChild(span);
        }
        document.getElementById("result").appendChild(div);
    }
    
}

//       1
//      1 1
//     1 2 1
//    1 3 3 1
//   1 4 6 4 1
// 1 5 10 10 5 1
// j           k
// This function will generate Pascal's triangle 
// 1- Create half of the triangle 
// 2- Copy from left side to right side
function generatePascalTriangle2(row) {
    var table = []; // [[1],[1,1],[1,2,1]]
    
    table[0] = [];
    table[0][0] = 1;
    
    let mid = row/2; 
    
    // looping until the middle of the triangle and generating half of the triangle
    for (let column = 0; column <= mid; column++) 
        binomialCoefficients(row, column, table);

    // Staring from last row and coping left to right side using i and k pointers
    // knowing the row will have the same number of columns
    // j will start at the first index(column) of the row
    // k will start from the last index(column) 
    for(let i = row; i >= mid; i--){

        let j = 0;
        let k = i;
        while(j < k){
            table[i][k] = table[i][j];
            k--;
            j++;
        }
    }    
        
      return table;
}

// This function will generate Pascal's triangle for the whole triangle
function generatePascalTriangle(row) {
    var table = []; // [[1],[1,1],[1,2,]]
    
    table[0] = [];
    table[0][0] = 1;
    
    for (var column = 0; column <= row; column++) 
        binomialCoefficients(row, column, table);

    return table;
}

// Calculating the binomial coefficients for each value
// n choose r = (n - 1 choose k -1) + (n -1 choose k)
function binomialCoefficients(row, column, table) {
  
    if (table[row] === undefined) 
    table[row] = [];
    
    // [0][0] = 1 [n][n] = 1
    if (row === column || column === 0) {
        table[row][column] = 1;
        return 1;
    }

    //Checking if value already exists or not 
    if (table[row][column] === undefined) 
        table[row][column] = binomialCoefficients(row - 1, column - 1, table) + binomialCoefficients(row - 1, column, table);

    return table[row][column];
}


// Function to check for user input
function inputValidation(value) {
    if (value >= 1) 
        return true;
    else if (value <= 0) {
        generateMessage("h6", "Number of rows must be at least 1 or greater");
        return false;
    } else if (isNaN(value)) {
        generateMessage("h6", "Number of rows must be a number");
        return false;
    }
    return false;
}

// Function to create new messages
function generateMessage(element, message) {
    var value = document.createElement(element);
    value.innerHTML = message;
    document.getElementById("message").appendChild(value);
}

// Function to clear the output
function clearPascalTriangle() {
    document.getElementById("result").innerHTML = "";
    document.getElementById("message").innerHTML = "";
    document.querySelector("input[type=text").value = "";
    
}