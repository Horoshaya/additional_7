let cells = [[],[],[],[],[],[],[],[],[]];
let stack = [];
let current;
let number = 1;
let count = 0;
let zeros = 0;
let currentVariables = {};

module.exports = function solveSudoku(matrix) {
    setup(matrix);
    do {
        solve(cells)
    } while (zeros > 0)

    for (let i = 0; 9 > i; i++) {
        for (let j = 0; 9 > j; j++){
            matrix[i][j] = cells[i][j].num;
        }
    }
 	return matrix;
}

function setup (matrix) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            cells[i][j] = new Cell(i, j, matrix[i][j]);
            if (cells[i][j].num == 0) zeros++;
        }
    }  
    current = cells[0][0];  
}

function Cell(i, j, num) {
    this.i = i;
    this.j = j;
    this.num = num;
}

function Variables(i, j, arr) {
    this.i = i;
    this.j = j;
    this.arr = arr;
}

function solve(matrix) {
    if (current.num == 0) {
        if (current.i != currentVariables.i || current.j != currentVariables.j) {
            currentVariables = getVariations(matrix,current.i,current.j);
        }
        if (currentVariables.arr.includes(number) && number < 10) {
            current.num = number;
            stack.push(current);
            number = 0;
            zeros--;
            
            (current.j + 1 > 8 && current.i < 8) ?  
	            current = cells[current.i + 1][0] :  
	            current = cells[current.i][current.j + 1];
        } else if (number > 8) {
            current = stack.pop();
            number = current.num;
            current.num = 0;
            zeros++;
        }            
    } else {
        (current.j + 1 > 8 && current.i < 8) ? 
	        current = cells[current.i + 1][0] : 
	        current = cells[current.i][current.j + 1];   
        
        number = 0;
    }
    number++;
}

function getVariations(matrix, currentRowIndex, currentColumnIndex) {

	let row = cells[currentRowIndex];
	let variablesForRow = variablesForLine(row, currentRowIndex);
				
	let column = [];
	for (let i = 0; i < 9; i++) {
		column[i] = cells[i][currentColumnIndex];
	}
	let variablesForColumn = variablesForLine(column);

	let quarter = getQuarter(currentRowIndex, currentColumnIndex, matrix);
    variablesForQuarter = variablesForLine(quarter);
    
    let arr = [];
	for (let i = 1; i <= 9; i++) {
        if (variablesForRow.includes(i) && 
            variablesForColumn.includes(i) && 
            variablesForQuarter.includes(i)) {
            
                arr.push(i);
        }
    }
	return new Variables(currentRowIndex, currentColumnIndex, arr);
}

function getQuarter(currentRowIndex, currentColumnIndex, matrix) {
	let quartersLine = Math.floor(currentRowIndex/3);
	let quartersColumn = Math.floor(currentColumnIndex/3);
	let quarter = [];
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			quarter.push(cells[quartersLine*3+i][quartersColumn*3+j]);
		}
	}	
	return quarter;
}
	
function variablesForLine(line) {
	let variables = [1,2,3,4,5,6,7,8,9];
	for (let i = 0; i < 9; i++) {
        let index = variables.indexOf(line[i].num);
        if (index >= 0) {
            variables.splice(index, 1);
        }
	}
	return variables;
}
