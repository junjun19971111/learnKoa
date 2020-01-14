var findMedianSortedArrays = function (nums1, nums2) {
  let total = nums1.length + nums2.length;
  if (total % 2 == 0) {
    let arry1 = [].concat(nums1);
    let arry2 = [].concat(nums2);
    let number = findSortArrays(nums1,nums2, total/2)+findSortArrays(arry1,arry2, total/2+1);
    // let number = findSortArrays(nums1,nums2, total/2+1);
    return number/2;
  }
  else {
    let number = parseInt(total / 2);
    return findSortArrays(nums1, nums2, number + 1);
  }

};

function findSortArrays(nums1, nums2, k) {
  if (nums1.length > nums2.length) {
   return findSortArrays(nums2, nums1, k);
  }
  // console.log({k})
  if (nums1.length == 0) {
    // console.log({'n':1});
    return nums2[k - 1];
  }
  if (k == 1) {
    // console.log({'n':2});
    return Math.min(nums1[0], nums2[0]);
  }
  let i = Math.min(nums1.length, parseInt(k / 2)) - 1;
  let j = Math.min(nums2.length, parseInt(k / 2)) - 1;
  if (nums1[i] < nums2[j]) {
    // console.log({'n':3});
    nums1.splice(0, i + 1);
    return findSortArrays(nums1, nums2, k - i - 1);
  }
  else {
    // console.log({'n':4});
    nums2.splice(0, j + 1);
    console.log(nums2)
    return findSortArrays(nums1, nums2, k - j - 1);
  }
}

console.log(findMedianSortedArrays([0, 0], [0, 0]));
