---
problem: "9"
title: "Palindrome Number"
shortdesc: "Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward."
path: "/leetcode/prob0009"
date: 2018-12-13 03:00:00
tags: "math"
solution: "python"
type: "easy"
---

## Problem Statement

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

```
Input: 121
Output: true
```

Example 2:

```
Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

Example 3:

```
Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```

Follow up:

Coud you solve it without converting the integer to a string?

## My solution

Runtime: 260 ms
Memory Usage: 12.8 MB

```python
class Solution:
    def isPalindrome(self, x: 'int') -> 'bool':
        rev = 0
        temp = x
        while temp > 0:
            rem = temp % 10
            rev = rev * 10 + rem
            temp = int(temp/10)

        return rev == x
```
