// Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var result = new ListNode(0); // Create a new ListNode to store the result
    var current = result; // Pointer to the current node in the result list
    var carry = 0; // Variable to store the carry value
    var sum = 0; // Variable to store the sum of the two digits

    // Loop until both lists are empty and there is no carry left   
    for(let i = 0; i < 100; i++){
        // Check if both lists are empty and there is no carry left
        if(l1 || l2 || carry){
            // Get the values of the current nodes in both lists, or 0 if the list is empty
            var val1 = l1 ? l1.val : 0;
            var val2 = l2 ? l2.val : 0;

            // Calculate the sum of the two digits and the carry
            sum = val1 + val2 + carry;
            carry = Math.floor(sum / 10); // Update the carry for the next iteration

            // Create a new node with the value of the sum modulo 10 and add it to the result list
            current.next = new ListNode(sum % 10);
            current = current.next; // Move to the next node in the result list

            // Move to the next nodes in both lists, if they exist
            if(l1) l1 = l1.next;
            if(l2) l2 = l2.next;
        }
    }
    return result.next; // Return the result list, skipping the initial dummy node
};
