---
problem: "3"
title: "Longest Substring Without Repeating Characters"
shortdesc: "Given a string, find the length of the longest substring without repeating characters."
path: "/leetcode/prob0003"
date: 2018-12-12 10:00:00
tags: "hash table,two pointers,string,sliding window"
solution: "c#"
type: "medium"
---

## Problem Statement

Given a string, find the length of the longest substring without repeating characters.

Example 1:

```
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

Example 2:

```
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

Example 3:

```
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

## My solution

```csharp
public class Solution {
    public int LengthOfLongestSubstring(string s) {
        int max = 0;
            for(int i=0; i<s.Length; i++)
            {
                var list = new List<char>();
                for(int j = i; j<s.Length; j++)
                {
                    if (list.Contains(s[j]))
                    {
                        break;
                    }
                    else
                    {
                        list.Add(s[j]);
                    }
                }
                max = max > list.Count ? max : list.Count;
            }
            return max;
    }
}
```
