let sortArray = function(nums) {
    let swap;
    let last = nums.length - 1;

    do {
        swap = false;

        for (let i = 0; i < last; i++) {
            if (nums[i] > nums[i + 1]) {
                // Troca os elementos se estiverem fora de ordem
                [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
                swap = true;
            }
        }
        last--;
    } while (swap);

    return nums;
};

// Exemplo de uso
let nums = [5, 2, 3, 1];
let sortedArray = sortArray(nums);
console.log(sortedArray);
