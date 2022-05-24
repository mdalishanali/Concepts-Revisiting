/**Implement Queue using Stack Ended
Description

Complete the function of push and pop and front for a queue, stack object names are S1 and S2.

Expected Time complexity is O(N) for push and O(1) for pop and front.


Input
This is a function complete problem. You just have to complete the function. The input format given below is just for your understanding.

The first line of the input contains Q, the number of queries to be executed.

Each query X is of type X = 0, X = 1 or X = 2.

Query X = 0 indicates, an element Y to be pushed into the queue.

Query X = 2 indicates, an element to be removed from the queue.

Query X = 1 indicates, an element to be peeked from the queue.


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

1
2 */

/**
 * APPROACH
 * 1. S2 is empty ---S1=====>deltete all 
 */
//IMPLEMENT QUEUE USING STACK

/**
 *   ===PUSH    
 *          1)push all the item into S1
 * =================================
 * ======POP() ||remove from the queue
 *          1)if(s2.length!==0) then just return s2.pop()
 *          2) else  move all the elem from s1----s2   
 *          3)and then  just pop the last elem of the s2 and return the pop value
 *  * =================================
 * =======front() ||peeked
 *              1)if(s2.length!==0) take the last elem of s2 and then just return it
 *              2)else copy all the elem of s1===s2   using push pop
 *              3)and then just return the last elem of the s2
 *  * =================================
 * =======not need  emepty() 
 *          1)s1.length==0 && s2 return true else false
 */
//here i hope eneque and deque both is coastly
    class Queue{
        constructor(){
            this.S1 = new Array(0);
            this.S2 = new Array(0);

        }

        push(value){
            this.S1.push(value);
        }


        pop(){
            //S2.LENGTH IS NOT 0
            if(this.S2.length!==0){
                let m = this.S2.pop();
                return m;
            }else{
                //IF S1 LENGTH==0
                while(this.S1.length!==0){
                    let x = this.S1.pop();
                    this.S2.push(x);
                }  
                let n = this.S2.pop();
                return n;
            }
           
        }


        front(){
            if(this.S2.length!==0){
                let v = this.S2[this.S2.length-1];
                return v;
            }else{
                while(this.S1.length!==0){
                    let x = this.S1.pop();
                    this.S2.push(x);
                }
            }
        let m  = this.S2[this.S2.length-1];
        return m;
        }




        isEmpty(){
            if(this.S2.length==0 && this.S1.length==0){
                return true
            }else{
                return false
            }
        }
    }

    /**
     * 
     */