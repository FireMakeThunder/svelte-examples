import { it, assert, expect, describe } from 'vitest';


const operations = [1, 2];

const c = {
  
}

const chain = [];



function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

describe('operations', () => {
  it('adds', () => {
    const [a, b] = [1, 2];

    expect(add(a, b)).toEqual(3);
  })

  it('subtracts', () => {
    const [a, b] = [1, 2];
    expect(subtract(a, b)).toEqual(-1);
  })

})

