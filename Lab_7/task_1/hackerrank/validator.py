s = str(input())
lst = [False, False, False, False, False]
for char in s:
    if char.isalnum():
        lst[0] = True
        if char.isalpha():
            lst[1] = True
        if char.isdigit():
            lst[2] = True
        if char.islower():
            lst[3] = True

        if char.isupper():
            lst[4] = True

for each in lst:
    print(each)