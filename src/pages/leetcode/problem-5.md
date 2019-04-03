---
problem: "5"
title: "Longest Palindromic Substring"
shortdesc: "Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000."
path: "/leetcode/prob0005"
date: 2018-12-12 11:00:00
tags: "string,dynamic programming"
solution: "c#"
type: "medium"
---

Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"

## My solution

```
public class Solution {

    public string LongestPalindrome(string s)
    {
        if (s.Length == 0) return "";
        if (s.Length == 1) return s;

        var maxlen = 0;
        bool[,] dp = new bool[s.Length, s.Length];
        var startIndex = 0;

        for (int i = 0; i < s.Length; i++)
        {
            for (int j = 0; j <= i; j++)
            {
                if (s[i] == s[j])
                {
                    var pLength = i - j + 1;
                    if (pLength <= 2 || dp[i - 1, j + 1])
                    {
                        dp[i, j] = true;
                        if (pLength > maxlen)
                        {
                            maxlen = pLength;
                            startIndex = j;
                        }
                    }
                }
            }
        }

        return s.Substring(startIndex, maxlen);
    }
}
```
