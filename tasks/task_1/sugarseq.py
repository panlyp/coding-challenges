#!/usr/bin/env python

# Sugar Sequence
# 2020-05-10

take_user_input = False
print_message = False

def sugar_sequence(n):
    """Implements the Sugar Sequence.
    
    Args:
        n (int): A non-negative integer to generate the next quotation ID.
    Returns:
        int: The generated quotation ID.
    """
    if n <= 1:
        return n
    else:
        return sugar_sequence(n-1) + sugar_sequence(n-2)

def sugar_sequence_helper(n):
    """Validates input.
    """
    if not isinstance(n, int):
        raise TypeError
    elif n < 0:
        raise ValueError
    else:
        temp = sugar_sequence(n)
        if print_message:
            print("Next quotation ID: %d" % temp)
        return temp

if take_user_input:
    try:
        n = int(input("Please enter the next quotation count: "))
        sugar_sequence_helper(n)
    except:
        print('Please input a non-negative integer!')