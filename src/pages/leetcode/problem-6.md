---
problem: "6"
title: "ZigZag Conversion"
shortdesc: 'The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)'
path: "/leetcode/prob0006"
date: 2018-12-13 00:00:00
tags: "string"
solution: "python"
type: "medium"
---

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

```
P   A   H   N
A P L S I I G
Y   I   R
```

And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

```
P     I    N
A   L S  I G
Y A   H R
P     I
```

## My solution

Runtime: 148 ms
Memory Usage: 12.6 MB

```
class Solution:
    def convert(self, s: 'str', numRows: 'int') -> 'str':
        if numRows == 0:
            return ''
        if numRows == 1:
            return s

        l = ['' for i in range(numRows)]
        incr = 1
        counter = 0
        for i in range(len(s)):
            l[counter] += s[i]
            if (incr > 0 and (counter+1)%numRows == 0) or (incr < 0 and counter == 0):
                incr = -1 * incr
            counter += incr
        return "".join(l)
```
