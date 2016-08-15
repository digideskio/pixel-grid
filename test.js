var tape = require('tape')

// parse should always generate a list of rgb colors

// flat floats

[0, 1, 1, 0] -> [[0, 0, 0], [1, 1, 1], [0, 0, 0], [1, 1, 1]]

// nested floats

[
  [0, 1],
  [1, 0]
]

-> [[0, 0, 0], [1, 1, 1], [1, 1, 1], [0, 0, 0]]

// strings

['red', 'green', 'green', 'blue'] -> [[1, 0, 0], [0, 1, 0], [0, 1, 0], [0, 0, 1]]

// nested strings

[
  ['red', 'green'],
  ['green', 'blue']
]

-> [[1, 0, 0], [0, 1, 0], [0, 1, 0], [0, 0, 1]]

// flat rgb

[[0, 0, 0], [1, 1, 1], [0, 0, 0], [1, 1, 1]] -> [[0, 0, 0], [1, 1, 1], [0, 0, 0], [1, 1, 1]]

// nested rgb

[
  [[0, 0, 0], [1, 1, 1]],
  [[0, 0, 0], [1, 1, 1]]
]

-> [[0, 0, 0], [1, 1, 1], [0, 0, 0], [1, 1, 1]]