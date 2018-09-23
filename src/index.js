module.exports = function solveSudoku(matrix) {
function solveSudoku(matrix) {
<<<<<<< HEAD
	var zerosCount = 1;
	var prevZerosCount = 0;
	var repeatPrediction = 0;
	var nextPredictionIndex = 0;
	var matrixBeforePrediction = [[6, 5, 0, 7, 3, 0, 0, 8, 0],
    [0, 0, 0, 4, 8, 0, 5, 3, 0],
    [8, 4, 0, 9, 2, 5, 0, 0, 0],
    [0, 9, 0, 8, 0, 0, 0, 0, 0],
    [5, 3, 0, 2, 0, 9, 6, 0, 0],
    [0, 0, 6, 0, 0, 0, 8, 0, 0],
    [0, 0, 9, 0, 0, 0, 0, 0, 6],
    [0, 0, 7, 0, 0, 0, 0, 5, 0],
    [1, 6, 5, 3, 9, 0, 4, 7, 0]];

	do {
		if (prevZerosCount == zerosCount) {
			if (repeatPrediction > 0) {
				for (var i = 0; i < 9; i++) {
					for (j = 0; j < 9; j++) {
						matrix[i][j] = matrixBeforePrediction[i][j];
					}
				}
			}	
			solve(matrix, true, nextPredictionIndex, repeatPrediction, matrixBeforePrediction);	
		} else {
			solve(matrix, false);
		}
		
		prevZerosCount = zerosCount;
		zerosCount = 0;

		for (var i = 0; i < 9; i++) {
			for (var j = 0; j < 9; j++) {
				if (matrix[i][j] == 0) {
					zerosCount++;
				}
			}	
		}
	} while (zerosCount > 0)
	// for (var i = 0; i < 81 ; i++) {
	// 	solve(matrix);
	// }
 	return matrix;
}

function solve(matrix, needPrediction, nextPredictionIndex, repeatPrediction, matrixBeforePrediction) {
	
	for (var currentRowIndex = 0; currentRowIndex < 9; currentRowIndex++) {
		for (var currentColumnIndex = 0; currentColumnIndex < 9; currentColumnIndex++) {

			if (matrix[currentRowIndex][currentColumnIndex] == 0) {
				var row = matrix[currentRowIndex];
				var variablesForRow = variablesForLine(row);
				
				var column = [];
				for (var i = 0; i < 9; i++) {
					column[i] = matrix[i][currentColumnIndex];
				}
				var variablesForColumn = variablesForLine(column);

				var quarter = getQuarter(currentRowIndex, currentColumnIndex, matrix);
				variablesForQuarter = variablesForLine(quarter);

				var addNumber = [];
				
				for (var num = 1; num <= 9; num++) {
=======
	var rows;
	var number;
	var columns = [];
	//var allNumbers = [1,2,3,4,5,6,7,8,9];
	var indececRow = [];
	var indececColumn = [];
	var addRow = [];
	var addColumn = [];
	for (var i = 0; matrix.length > i; i++) {
		rows = matrix[i];
		//add[i] = [];
		var allNumbers = [1,2,3,4,5,6,7,8,9];
		for (var h = 0; h <=8; h++) {
			for (var k = 0; k <=8; k++) {
				if (rows[h] == 0) {
					indececRow.push(h);
					break;
				}

				if (rows[h] == allNumbers[k]) {
					allNumbers.splice(k, 1);
					--k;
				}
			}
		}

		addRow.push(allNumbers);

		for (var y = 0; indececRow.length > y; y++) {
			
			index = indececRow[y];

			for (var j = 0; matrix.length > j; j++) {
				column = matrix[j];
				columns = column[index];
			}

			var allNumbers = [1,2,3,4,5,6,7,8,9];
			for (var h = 0; h <=8; h++) {
				for (var k = 0; k <=9; k++) {
					if (columns[h] == 0) {
						indececColumn.push(h);
						break;
					}

					if (columns[h] == allNumbers[k]) {
						allNumbers.splice(k, 1);
						--k;
					}
				}
			}

			addColumn.push(allNumbers);

			for (var m = 0; matrix.length > m; m++) { 
				// for(var r = 0; matrix.length > r; r++) {
					addRow = addRow[m];
					addColumn = addColumn[m];
					if (addRow.length == m || addColumn.length  == m) {
						break;
					}

					if (addRow[m] == addColumn[m]) {
						var thisNumber = addRow[m];
						matrix[m].splice(index, 1, thisNumber);
						break;
					}
				// }
			}
		}	
			
		

		//console.log(add);
		//console.log(zeroIndecec);
			//break
	}

		console.log(matrix);
		//return (add);
}


solveSudoku([
    [5, 3, 4, 6, 7, 8, 9, 0, 0],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ]);

	}
>>>>>>> b07e8f914aa4355f381b2fe9d4cb55833c9a9663

					if (variablesForRow.includes(num) && 
						variablesForColumn.includes(num) && 
						variablesForQuarter.includes(num)) {
						
						addNumber.push(num);
					}
				}

				if (addNumber.length == 1) {
					matrix[currentRowIndex][currentColumnIndex] = addNumber[0];
				} else if (needPrediction) {
					needPrediction = false;

					for (var i = 0; i < 9; i++) {
						for (j = 0; j < 9; j++) {
							matrixBeforePrediction[i][j] = matrix[i][j];
						}
					}
					
					if (addNumber.length > nextPredictionIndex) {
						matrix[currentRowIndex][currentColumnIndex] = addNumber[nextPredictionIndex];
						nextPredictionIndex++;
						repeatPrediction++;
					}
				}
			}	
		}
	}
}

function getQuarter(currentRowIndex, currentColumnIndex, matrix) {
	var quartersLine = Math.floor(currentRowIndex/3);
	var quartersColumn = Math.floor(currentColumnIndex/3);
	var quarter = [];
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			quarter.push(matrix[quartersLine*3+i][quartersColumn*3+j]);
		}
	}	
	return quarter;
}

	
function variablesForLine(line) {
	var variables = [1,2,3,4,5,6,7,8,9];
	for (var i = 0; i < 9; i++) {
		for (var j = 0; j < 9; j++) {
			if (line[i] == variables[j]) {
				variables.splice(j, 1);
				--j;
			}
		}
	}
	return variables;
}
