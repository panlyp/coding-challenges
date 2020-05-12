import unittest
import math
from mypow import my_pow_helper, my_pow_helper

class TestMyPow(unittest.TestCase):
    def test_simple(self):
        # Given same set of inputs, see if the result matches the one from math.pow
            self.assertAlmostEqual(my_pow_helper(0, 0), math.pow(0, 0), 5)
            self.assertAlmostEqual(my_pow_helper(2, 10), math.pow(2, 10), 5)
            self.assertAlmostEqual(my_pow_helper(3, -1), math.pow(3, -1), 5)
            self.assertAlmostEqual(my_pow_helper(3.4, -3), math.pow(3.4, -3), 5)
            self.assertAlmostEqual(my_pow_helper(-4, 3), math.pow(-4, 3), 5)
            self.assertAlmostEqual(my_pow_helper(-4.2, 3), math.pow(-4.2, 3), 5)
            self.assertAlmostEqual(my_pow_helper(-4.29, 5), math.pow(-4.29, 5), 5)

    def test_invalid_input(self):
        try:
            my_pow_helper('a', 1)
            my_pow_helper('test', 1)
            my_pow_helper(-1, 'a')
            my_pow_helper(3, 'hello')
            my_pow_helper(5, 1.5)
        except Exception: 
            pass
        else:
            self.fail()

if __name__ == "__main__": 
    unittest.main()