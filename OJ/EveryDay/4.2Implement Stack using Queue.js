/**Implement Stack using Queue Ended
Description

Complete the function of push and pop and top for a stack, queue object names are Q1 and Q2.

Expected Time complexity is O(N) for push and O(1) for pop and top.


Input
This is a function complete problem. You just have to complete the function. The input format given below is just for your understanding.

The first line of the input contains Q, the number of queries to be executed.

Each query X is of type X = 0, X = 1 or X = 2.

Query X = 0 indicates, an element Y to be pushed into the stack.

Query X = 2 indicates, an element to be popped off the stack.

Query X = 1 indicates, an element to be peeked from the stack.


Output
For each query of type X = 1, print the value at the front of the queue.


Sample Input 1 

6
0 1
0 2
0 3
1 
2
1
Sample Output 1

3
2 */

//Implement ====STACK=== using queue
/**
 *   ===PUSH    
 *          1)push all the item into Q1
 * =================================
 * ======POP()
 *          1)pop all elem from q1 and push to Q2 -[1|2|3]
 *          2)return the first elem from the Q1 (shift())|| after push to Q2 ==[3|2|1]
 *          3)and after pop Q2 then push Q1 ==[1|2|3]
 *              
 *  * =================================
 * =======front() ||peeked
 *              1)just print the last Elem of the queue --[1|2|3] ams == 3
 *              2)[[1|2]  ans = 2
 *              3)
 *  * =================================
 * =======not need  emepty() 
 *          1)Q1.length==0 && Q2 return true else false
 */
//here deque  is coastly
class stack{
    constructor(){
        this.Q1 = [];
        this.Q2 = [];

    }
    push(value){
        this.Q1.push(value)
    }
    pop(){
       while(this.Q1.length!==0){
           let n = this.Q1.pop();
           this.Q2.push(n);
       }
       this.Q2.shift();
       while(this.Q2.length!==0){
           let g = this.Q2.pop();
           this.Q1.push(g);
       }

    }
    //peeked from the stack --first elem of stack
    top(){
        return this.Q1[this.Q1.length-1];
    }
    isEmpty(){
        //not need do anything
    if(this.Q1.length==0 && this.Q2.length==0){
            return true
    }else{
        return false
    }
    }
}
