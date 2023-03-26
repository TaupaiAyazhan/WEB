n = int(input())
numbers = input().split()
for i in range(n):
    if int(numbers[i]) % 2 == 0:
        print(numbers[i], end=' ')