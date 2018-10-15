import json

comci = open("comci.json", "r")
str = comci.read()
자료 = json.loads(str)
print(자료[1])
