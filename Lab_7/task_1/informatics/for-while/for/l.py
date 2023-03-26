# print(int(input(), 2))

num = int(input())
res = 0
i = 0
n = 0
while(num != 0):
    d = num % 10
    res += d * pow(2, i)
    num = num // 10
    i += 1
print(res)