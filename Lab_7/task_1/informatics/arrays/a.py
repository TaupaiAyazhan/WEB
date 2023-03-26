n = int(input())
numbers = input().split()
for c in range(n):
    if c % 2 == 0:
        print(numbers[c], end=' ')
