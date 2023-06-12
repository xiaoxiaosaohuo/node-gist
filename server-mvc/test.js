

// function maxGreatness(arr) {
//     let greatness = 0;
//     const sortedArr = [...arr].sort((a,b)=>a-b);
//     let stack = [...arr];
//     let len = arr.length+1;
//     let ans = []
//     for(let i = 0; i<arr.length; i++) {
//         for(let j = 0; j < sortedArr.length;j++){
//             if (sortedArr[j]>arr[i]){
//                 ans.push(sortedArr[j]);
//                 sortedArr.splice(j,1)
//                 break
//             }
//         }
        
        
        
//     }
//     console.log(ans)
//     return ans.length
// }
// 1.遍历 2.比较大小，3. 找到一个大的就保存，删除原数组的数字，4. 
// 

var advantageCount = function(nums1, nums2) {
    const n = nums1.length;
    const idx1 = new Array(n).fill(0);
    const idx2 = new Array(n).fill(0);
    for (let i = 0; i < n; ++i) {
        idx1[i] = i;
        idx2[i] = i;
    }
	
    idx1.sort((i, j) => nums1[i] - nums1[j]);
    idx2.sort((i, j) => nums2[i] - nums2[j]);

    const ans = new Array(n).fill(0);
    let left = 0, right = n - 1;
    for (let i = 0; i < n; ++i) {
        if (nums1[idx1[i]] > nums2[idx2[left]]) {
            ans[idx2[left]] = nums1[idx1[i]];
            ++left;
        } else {
				//当前元素肯定小于nums2的所有元素，用它和num2中最大的进行较量
            ans[idx2[right]] = nums1[idx1[i]];
            --right;
        }
    }
    return ans;
};
console.log(advantageCount([6,1,2,6,3,2,1],[6,1,2,6,3,2,1]))
console.log(advantageCount([1, 3, 5, 2, 1, 3, 1],[1, 3, 5, 2, 1, 3, 1]))
// [1, 3, 5, 2, 1, 3, 1]
// [2] , [1, 3, 5, 1, 3, 1]
// [2, 5], [1, 3, 1, 3, 1]
// [2, 5,1], [3, 1, 3, 1]
// [2, 5,1,3]
// [2, 5,1,3]
// [2, 5,1,3,3]
// [1,1,2,2,3,6,6]
// [1,2,3,1,6,6,2]