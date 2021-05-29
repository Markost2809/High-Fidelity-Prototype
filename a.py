import numpy as np
p1 = np.array([3, 4, 5])
p2 = np.array([6, 6, 3])
p3 = np.array([6, 7, 7])

N = np.cross(p2-p1, p3-p1)
N = N / N.sum()
print(N)
