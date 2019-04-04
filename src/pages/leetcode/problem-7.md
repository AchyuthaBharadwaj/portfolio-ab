---
problem: "7"
title: "Reverse Integer"
shortdesc: "Given a 32-bit signed integer, reverse digits of an integer."
path: "/leetcode/prob0007"
date: 2018-12-13 01:00:00
tags: "math"
solution: "python"
type: "easy"
---

## Problem Statement

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

```
Input: 123
Output: 321
```

Example 2:

```
Input: -123
Output: -321
```

Example 3:

```
Input: 120
Output: 21
```

Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

## My solution

Runtime: 48 ms

Memory Usage: 12.5 MB

```python
class Solution:
    def reverse(self, x: 'int') -> 'int':
        rev = str(x)[::-1]
        if rev[-1] == '-':
            rev = '-' + rev[:-1]

        res = int(rev)
        if res <= 2**31 -1 and res >= -2**31:
            return res
        return 0
```
