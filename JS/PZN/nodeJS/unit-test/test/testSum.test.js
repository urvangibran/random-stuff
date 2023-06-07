import { sum } from "../src/sum.js"
import { sumAll } from "../src/sumAll.js"

test("sum (1,2) must be 3", () => {
    const result = sum(1, 2);

    expect(result).toBe(3);
})

const dataSumAll = [
    [[1, 2, 3, 4, 5], 15],
    [[10, 10, 10, 20], 50],
    [[10, 10, 10], 30]
]

const dataSumAllObj = [
    { numbers: [1, 2, 3, 4, 5], expected: 15 },
    { numbers: [10, 10, 10, 20], expected: 50 },
    { numbers: [10, 10, 10], expected: 30 }
]

it.each(dataSumAllObj)('The sum of ($numbers) must be $expected', ({numbers, expected}) => {
    expect(sumAll(numbers)).toBe(expected);
})

it.each(dataSumAll)('The sum of (%s) must be %i', (numbers, expected) => {
    expect(sumAll(numbers)).toBe(expected);
})

describe("when sumAll is [10,10,10]", () => {
    it("should be 30", () => {
        expect(sumAll([10, 10, 10])).toBe(30);
    })
})