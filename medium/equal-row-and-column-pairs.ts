function equalPairs(grid: number[][]): number {
  let counter = 0;

  let map = new Map<string, number>();

  for (let i = 0; i < grid.length; i++) {
    let row = grid[i].join(",");

    map.set(row, (map.get(row) ?? 0) + 1);
  }

  for (let i = 0; i < grid.length; i++) {
    let column = "";

    for (let j = 0; j < grid.length; j++) {
      column += grid[j][i];
      if (j !== grid.length - 1) column += ",";
    }

    let curr = map.get(column);

    if (curr) counter += curr;
  }

  return counter;
}

console.log(
  equalPairs([
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7],
  ]),
);

console.log(
  equalPairs([
    [3, 1, 2, 2],
    [1, 4, 4, 5],
    [2, 4, 2, 2],
    [2, 4, 2, 2],
  ]),
);

console.log(
  equalPairs([
    [3, 1, 2, 2],
    [1, 4, 4, 4],
    [2, 4, 2, 2],
    [2, 5, 2, 2],
  ]),
);

console.log(
  equalPairs([
    [11, 1],
    [1, 11],
  ]),
);
