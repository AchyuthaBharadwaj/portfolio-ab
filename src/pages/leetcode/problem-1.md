---
problem: "1"
title: "two sum"
shortdesc: "Given an array of integers, return indices of the two numbers such
  that they add up to a specific target. You may assume that each
  input would have exactly one solution, and you may not use the same
  element twice."
path: "/leetcode/prob0001"
date: 2018-12-12 07:00:00
tags: "array,hash table"
solution: "c#"
type: "easy"
---

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

## My solution

```
public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        Dictionary<int, int> dict = new Dictionary<int, int>();

        for (int i = 0; i < nums.Length; i++)
        {
            var diff = target - nums[i];

            if (dict.ContainsKey(diff))
            {
                return new int[] { dict[diff], i };
            }
            else
            {
                dict[nums[i]] = i;
            }
        }
        return null;
    }

}
```
