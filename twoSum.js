function twoSum(nums, target) {

    nums = [2,7,11,15]
            // OUTPUT: [0,1]
    target = 9

    let map = new map()

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]

        if (map.has(complement)) {
            return [i, map.get(complement)]
        }
        map.set(nums[i],i)
    }
}