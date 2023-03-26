num = int(input())
sum = 0
for i in range(num):
    sum += num % 10
    num //= 10
print(sum)