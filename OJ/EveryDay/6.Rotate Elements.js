/**Rotate Elements Ended
Description

Given a n by n matrix. You have to rotate the elements of each ring of the matrix in the clockwise direction one place.


Input
Input Format

First line will contain a single number n

Next n lines will contain the matrix

Constraints

n<=1000

Elements of the matrix <=10000




Output
You have to display the rotated matrix


Sample Input 1 

4
1 2 3 4
1 2 3 4
1 2 3 4
1 2 3 4
Sample Output 1

1 1 2 3
1 2 2 4
1 3 3 4
2 3 4 4
Hint

Consider this matrix in the form of two rings and rotate the ring by one place in the clockwise direction */

function rotateElem(mat,n){
    let row = 0, col=0;
    let lastRow = n; let lastCol = n;
    let prev;
    let next;
    while(row<lastRow || col<lastCol){
        if(row+1==lastRow ||col+1==lastCol) break;
        prev = mat[row+1][col];
        /**prev = mat[row+1][col]
         * next = mat[row][i]
         * mat[row][i]=prev;
         * ab is prev ko next  bana do
         * prev =next
         */
        for(let i=col; i<lastCol; i++){
            next = mat[row][i];
            mat[row][i]=prev;
            prev=next;
        }
        row++;
        for(let i=row; i<lastCol; i++){
            next = mat[i][lastCol-1];
            mat[i][lastCol-1]=prev;
            prev = next;
        }
        lastCol--;
        if(row<lastRow){
            for(let i=lastCol-1; i>=col; i--){
                next=mat[lastRow-1][i];
                mat[lastRow-1][i]=prev;
                prev=next;
            }
        }
        lastRow--;
        if(col<lastCol){
            for(let i=lastRow-1; i>=row;i--){
                next = mat[i][col];
                mat[i][col]=prev;
                prev=next;
            }
            col++;
        }
    }
    for(let i=0; i<n; i++){
        console.log(mat[i].join(" "));
    }
}