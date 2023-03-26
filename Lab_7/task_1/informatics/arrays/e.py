n = int(input())
numbers = input().split()
check = False
for i in range(n - 1):
    if (int(numbers[i]) >= 0 and int(numbers[i + 1]) >= 0) or (int(numbers[i]) < 0 and int(numbers[i + 1]) < 0):
        check = True
        break
if check:
    print("YES")
else:
    print("NO")