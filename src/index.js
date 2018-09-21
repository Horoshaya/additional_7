module.exports = function solveSudoku(matrix) {
function solveSudoku(matrix) {
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



