import matplotlib.pyplot as plt

# Daten für den Graphen
x = [1, 2, 3, 4, 5]
y = [2, 3, 12, 6, 10]

# Erstelle den Graphen
plt.plot(x, y)

# Achsenbeschriftung und Titel
plt.xlabel('X-Achse')
plt.ylabel('Y-Achse')
plt.title('Ein einfacher Liniengraph')

# Zeige den Graphen
plt.show()
