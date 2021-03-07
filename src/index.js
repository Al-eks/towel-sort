
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined) return [];
  
  else if  (matrix.length === 0) return [];

  for( i = matrix.length - 1; i >= 0; i--) if( i % 2 === 1) matrix[i].reverse(i,1);
  return matrix.flat();
  }