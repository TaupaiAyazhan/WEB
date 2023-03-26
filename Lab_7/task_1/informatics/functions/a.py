def min(a, b):
    if a < b:
        return a
    return b


a, b, c, d = map(int, input().split())
print(min(min(a, b), min(c, d)))
