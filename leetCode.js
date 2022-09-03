/**
 * 283. Move Zeroes
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of
 * the non-zero elements.
 */
//ESTE EJERCICO DE LA PAGINA DE LEETCODE TIENE UN BUG, el return de la funcion no se toma correctamente al hacer la evaluacion
function moveZeroes(nums) {
  const zeros = nums.filter((num) => num === 0);
  const numbers = nums.filter((num) => num !== 0);
  return numbers.concat(zeros);
}

// LeetCode ejemplo1:
const leetCodeExampleNumbers = [0, 1, 0, 3, 12];

const testNumbers2 = [1, 2, 0, 4, 0, 0, 5];
console.log(moveZeroes(testNumbers1));

/**
 * 1. Two Sum
 * Given an array of integers nums and an integer target, return indices of the two numbers such that 
 * they add up to target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/
function twoSum(nums, target) {
  for (const numsIndex in nums) {
    for (const someIndex in nums) {
        
      if (nums[numsIndex] + nums[someIndex] === target &&
            numsIndex !== someIndex) {
        return [Number(numsIndex), Number(someIndex)];
      }
    }
  }
}

/**
 * 242. Valid Anagram
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically
 * using all the original letters exactly once.
 */
function validAnagram(s, t) {
  const sOrganiced = s.split("").sort().join("");
  const tOrganiced = t.split("").sort().join("");

  return sOrganiced === tOrganiced;
}
