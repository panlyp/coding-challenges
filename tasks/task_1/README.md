# Task 1: Sugar Sequence
The Sugar Sequence is used to generate a unique ID for each quotation. 
Given the general formula S(N) = S(N-1) + S(N-1), it is also a Fibonacci series.

In `sugarseq.py`:
- If `take_user_input` is set to be True, then the program will ask for user input.
- Likewise, `print_message` can be set to provide a simple output.
- Input will be validated using `sugar_sequence_helper` before being used for actual calculation:
- The next quotation ID is calculated by recursion.