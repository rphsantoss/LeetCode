/*Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.*/

let search = function(nums, target) {

    nums = [-1,0,3,5,9,12]
    target = 9

    /*
    for (let i=0; i<nums.length;i++) {
        if (nums[i] == target) {
            return nums[i], i
        }
    }
    return -1
    */

    //Apenas para Listas Ordenadas (Pesquisa Binária)

    let left = 0
    let right = nums.lenght - 1
    while(left <= right) {
        const middle = parseInt((right + left) / 2)

        if (nums[middle] == target) {
            return middle
        }

        if (target > nums[middle]) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }
    return -1
}