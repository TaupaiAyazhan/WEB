def xor(a, b):
    ans = a ^ b
    return ans
a, b = map(int, input().split())
print(xor(a, b))