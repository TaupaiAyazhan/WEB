n = int(input())
numbers = input().split()
cnt = 0
for i in range(1, n - 1):
    if (int(numbers[i - 1]) < int(numbers[i])) and (int(numbers[i + 1]) < int(numbers[i])):
        cnt += 1
print(cnt)