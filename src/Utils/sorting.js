export const orderByAsc = (a, b, pairKeyA, pairKeyB = pairKeyA) => {
  if (a[pairKeyA] < b[pairKeyB]) {
      return -1;
  }
  if (a[pairKeyA] > b[pairKeyB]) {
      return 1;
  }
  return 0;
}

export const orderByDesc = (a, b, pairKeyA, pairKeyB = pairKeyA) => {
  if (a[pairKeyA] < b[pairKeyB]) {
      return 1;
  }
  if (a[pairKeyA] > b[pairKeyB]) {
      return -1;
  }
  return 0;
}
