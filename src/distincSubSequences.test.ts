import {countDistinctSubsequences} from"./distincSubSequences";

test("tìm số lượng các dãy con riêng biệt của danh sách có tổng bằng một giá trị đích", () => {
    expect(countDistinctSubsequences([1, 2, 3, 4, 5], 5)).toBe(3);
});

test("tìm số lượng các dãy con riêng biệt của danh sách có tổng bằng một giá trị đích", () => {
    expect(countDistinctSubsequences([-2, -1, 3, 4, 5], 4)).toBe(3);
});

test("tìm số lượng các dãy con riêng biệt của danh sách có tổng bằng một giá trị đích", () => {
    expect(countDistinctSubsequences([-2, -1, "test", 3, 4, 5], 4)).toBe(3);
});

