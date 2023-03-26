from math import sqrt

num = int(input())
s = int(sqrt(num))
res = 0

for i in range(1, s):
    if num % i == 0:
        res += 2

if num % s == 0:
    res += 1

print(res)