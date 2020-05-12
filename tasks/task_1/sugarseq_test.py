import unittest
from sugarseq import sugar_sequence, sugar_sequence_helper

class TestSugarSequence(unittest.TestCase):
    def test_simple(self):
        try:
            self.assertEqual(sugar_sequence_helper(0), 0)
            self.assertEqual(sugar_sequence_helper(1), 1)
            self.assertEqual(sugar_sequence_helper(2), 1)
            self.assertEqual(sugar_sequence_helper(4), 3)
            self.assertEqual(sugar_sequence_helper(10), 55)
        except Exception:
            self.fail('Exception!')
        
    def test_invalid_input(self):
        try:
            sugar_sequence_helper('a')
            sugar_sequence_helper(-0.5)
        except TypeError: 
            pass
        else:
            self.fail()
        try:
            sugar_sequence_helper(-4)
            sugar_sequence_helper(-0.5)
            sugar_sequence_helper(3.5)
        except ValueError: 
            pass
        else:
            self.fail()

if __name__ == "__main__": 
    unittest.main()