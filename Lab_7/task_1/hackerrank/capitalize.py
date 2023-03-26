def solve(s):
  listname = s.split(" ")
  finalName = ""
  for element in listname:
    finalName = finalName + element.capitalize() + " "
  return finalName


# if __name__ == '__main__':
#     fptr = open(os.environ['OUTPUT_PATH'], 'w')

#     s = input()

#     result = solve(s)

#     fptr.write(result + '\n')

#     fptr.close()