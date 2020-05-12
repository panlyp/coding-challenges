#!/usr/bin/env python

# X to Power N
# 2020-05-10
import math

take_user_input = False
print_message = False

def my_pow(x, n):
    """Implements pow(x, n) which calculates x raised to the power n (x^n).
    
    Args:
        x (float): The base.
        n (int): The exponent.
    Returns:
        int: The result of exponentiation.
    """
    num_of_iterations = abs(n) - 1
    result = x if n >= 0 else 1/x
    for i in range(num_of_iterations):
        if n < 0:
            result *= 1/x
        else:
            result *= x
    return result

def my_pow_helper(x, n):
    """Validates input.
    """
    x = float(x)
    if n is 0:
        return 1
    if not isinstance(n, int) or not isinstance(x, float):
        raise TypeError
    else:
        result = my_pow(x, n)
        if print_message:
            print("x = %.5f, n = %d" % (x, n))
            print(format(result, '.5f'))
        return result

if take_user_input:
    try:
        x = float(input("Please enter the base: "))
        n = int(input("Please enter the exponent: "))
        my_pow_helper(x, n)
    except:
        print('Please enter valid x and n!')