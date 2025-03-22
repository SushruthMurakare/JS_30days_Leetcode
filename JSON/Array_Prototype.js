
// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// You may assume the array is the output of JSON.parse.

 

// Example 1:

// Input: nums = [null, {}, 3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.



Array.prototype.last = function() {
    let len = this.length;
    if(len <= 0){
        return -1;
    }
    else {
        return this[this.length-1];
    }
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */


// Here Array is an built in object of JS that provides all the methods to array in the program
// prototype allows us to define new method to that object
// here we are defining a method called last , since we dont have access to the actual array we use the keyword this