---
problem: "11"
title: "Container With Most Water"
shortdesc: "Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line..."
path: "/leetcode/prob0011"
date: 2018-12-13 04:00:00
tags: "array,two pointers"
solution: "c#"
type: "medium"
---

## Problem Statement

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

Example:

```
Input: [1,8,6,2,5,4,8,3,7]
Output: 49
```

## My solution

Runtime: 152 ms
Memory Usage: N/A

```csharp
public class Solution {
    public int MaxArea(int[] height) {
        int area = 0;
            int i = 0;
            int j = height.Length - 1;

            while (i < j)
            {
                var heightOfContainer = Math.Min(height[i], height[j]);
                var cur_area = heightOfContainer * (j - i);
                if (cur_area > area)
                    area = cur_area;
                if (height[i] > height[j])
                    j--;
                else
                    i++;
            }

            return area;
    }
}
```
