n = int(input())
numbers = input().split()
for i in range(n - 1, -1, -1):
    print(int(numbers[i]), end=" ")