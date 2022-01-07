var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, n, ...nums2)
    // nums1 = nums1.concat(nums2)
    nums1.sort((pre, cur) => pre - cur)
    console.log(nums1)
};

merge ([1,2,3,0,0,0],3,[2,3,4],3)