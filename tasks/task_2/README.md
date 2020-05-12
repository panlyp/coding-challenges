# Task 2: X Power N
A self-made pow function to calculate x raised to the power n.

In `mypow.py`:
- Similar to my answer to task 1, a helper function is used to validate input.
- The calculation logic is within `my_pow`:
  - The variable `result` is initialized to be x if the exponent is postive, 1/x otherwise.
  - `num_of_iterations` is determined by the absolute value of n.
  - In each iteration, `result` is multipied by either x or 1/x.
- Zero to the power of zero is assumed to be 1.