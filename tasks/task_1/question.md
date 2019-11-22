# Sugar Sequence

## Introduction

For each Sugar quotation, we will generate a unique quotation ID as an identifier. To avoid auto-increment ID sequence, which will be guessed easily, Sugar decided to generate the ID with a formula.

The formula to calcualte a sequence ID is defined as:

S(N) = S(N-1) + S(N-2), for N > 1

where 

S(0) = 0
S(1) = 1

Given a next quotation count C, calculate S(C), the next quotation ID.

## Examples

### Example 1
`
Input: 2
Output: 1
Explanation: S(2) = S(1) + S(0) = 1 + 0 = 1
`

### Example 2
`
Input: 4
Output: 3
Explanation: S(4) = S(3) + S(2) = 2 + 1 = 3
`

### Example 3
`
Input: 10
Output: 55
Explanation: S(10) = S(9) + S(8) = 34 + 21 = 55
`

## Note

0 ≤ N ≤ 30.

