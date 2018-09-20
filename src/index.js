module.exports = function solveSudoku(matrix) {
	function solveSudoku(matrix) {
	var rows;
	var number;
	var add = [1,2,3,4,5,6,7,8,9];
	var zeroIndecec = [];
	for (var i = 0; matrix.length > i; i++) {
	    rows = matrix[i];
	    for (var h = 0; h <=8; h++) {

	       for (var k = 0; k <=8; k++) {
	       	if (rows[h] == 0) {
				zeroIndecec.push(h);
				break;
	          }
	          if (rows[h] == add[k]) {
	          	add.splice(k, 1);
	          	--k;

	          } 
	           
	       }
	}
	console.log(add);
	console.log(zeroIndecec);
	break
	 }     
	    for (var j = 0; matrix.length > j; j++) {
	        number = rows[j];
	        
	            
	        if (number == 0) {

	        }
	    
	}

		console.log(rows);


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



