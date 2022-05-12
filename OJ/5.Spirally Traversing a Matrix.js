/**Spirally Traversing a Matrix Ended
Description

Given a matrix of size n by n. Traverse and print the matrix in spiral form.



Input
Input Format

First-line contains n

The next n lines contain the matrix

Constraints

n <= 1000

Ai <= 10000




Output
Print the matrix in a single line traversing it spirally


Sample Input 1 

4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8
Sample Output 1

1 2 3 4 8 4 8 7 6 5 1 5 6 7 3 2  */
let mat = [[1,2,3,4],[5,6,7,8],[1,2,3,4],[5,6,7,8]]
//1 2 3 4 8 4 8 7 6 5 1 5 6 7 3 2
spiralTraversing(mat,4);
function spiralTraversing(mat,n){
        let left=0;
        let right=n-1;
        let bottom = n-1;
        let top= 0;
        let size=n*n;
        let count=0;
        let res = [];
        while(count<size){
            for(let i=left; i<=right; i++){
                res.push(mat[top][i]);
                count++;
            }
            top++;
            for(let i=top; i<=bottom; i++){
                res.push(mat[i][right]);
                count++;
            }
            right--;
            for(let i=right; i>=left; i--){
                res.push(mat[bottom][i]);
                count++;
            }
            bottom--;
            for(let i=bottom; i>=top; i--){
                res.push(mat[i][left]);
                count++;
            }
            left++;
        }
        console.log(res.join(" "))
        
}
