place = 1
not_place = 0
listed_items = [5, 14, 2, 5, 4, 11, 45]
for aqui in range(len(listed_items)):
 not_place = place * listed_items[aqui]
 place = place + 2
print(not_place)
print(place)