
function wrap(num: number, min: number, max: number) {
  num = 101
  max = 99
  max - num === -2

  max = 99
  num = 97
  max - num === 2
  99 - 97 === 2
  99 - 99 - 97
  max - 2 === num
  99 - 2 === 97

  const greaterThanMax = num > max;
  if (greaterThanMax) {
    const difference = num - max;
    return min + difference - 1;
  }
  const lessThanMin = num < min;

  return Math.abs()
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('add', () => {
    expect(add()).toBe(0)
    expect(add(1)).toBe(1)
    expect(add(1, 2, 3)).toBe(6)
  })
}