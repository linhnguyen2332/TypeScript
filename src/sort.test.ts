import { sortremake } from "./sort";
// import {test} from
test('Sorts an array of positive numbers in ascending order', () => {
    const arr = [5, 2, 8, 1, 6];
    const sortedArr = sortremake(arr);
    expect(sortedArr).toEqual([1, 2, 5, 6, 8]);
});

test('Sorts an array of negative numbers in ascending order', () => {
    const arr = [-5, -2, -8, -1, -6];
    const sortedArr = sortremake(arr);
    expect(sortedArr).toEqual([-8, -6, -5, -2, -1]);
});

test('Sorts an array of mixed positive and negative numbers in ascending order', () => {
    const arr = [-5, 2, -8, 1, 6];
    const sortedArr = sortremake(arr);
    expect(sortedArr).toEqual([-8, -5, 1, 2, 6]);
});

test('Sorts an array of numbers with duplicates in ascending order', () => {
    const arr = [5, 2, 8, 1, 6, 2, 5, 1];
    const sortedArr = sortremake(arr);
    expect(sortedArr).toEqual([1, 1, 2, 2, 5, 5, 6, 8]);
});

test('Sorts an empty array and returns an empty array', () => {
    const arr: number[] = [];
    const sortedArr = sortremake(arr);
    expect(sortedArr).toEqual([]);
});