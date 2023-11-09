let moveZeroes = (nums) => {

    nums = [0,1,0,3,12] //-> [1,3,12,0,0]

    let lastZero = 0

    for (let i = 0; i < nums.length; i++) {

        if(nums[i] !== 0) {    
            const aux = nums[lastZero]
            nums[lastZero] = nums[i]
            nums[i] = aux 
            lastZero++
        }
    }

}