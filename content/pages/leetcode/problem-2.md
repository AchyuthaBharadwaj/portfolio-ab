---
problem: "2"
title: "Add Two Numbers"
shortdesc: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list."
path: "/leetcode/prob0002"
date: 2018-12-12 09:00:00
tags: "Linked list,math"
solution: "c#"
type: "medium"
---

## Problem Statement

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

```
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
```

## My solution

```csharp
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2) {
        return AddTwoNumbers(l1, l2, 0);
    }

    private ListNode AddTwoNumbers(ListNode l1, ListNode l2, int carryOver)
    {
        int l1Value = l1?.val ?? 0;
        int l2Value = l2?.val ?? 0;

        int sum = l1Value + l2Value + carryOver;

        if (sum == 0 && l1 == null && l2 == null)
        {
            return null;
        }
        else
        {
            ListNode currentNode = new ListNode(sum % 10);
            currentNode.next = AddTwoNumbers(l1?.next, l2?.next, sum / 10);
            return currentNode;
        }
    }
}
```
