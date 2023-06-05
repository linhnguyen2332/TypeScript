import {findMaxProduct} from "./findMax";

test("tìm tích của 3 pt riêng biệt trong arr", () => {
    expect(findMaxProduct([-10, -5, 0, 1, 2, 3, 4])).toBe(200);
});

test("tìm tích của 3 pt riêng biệt trong arr", () => {
    expect(findMaxProduct([-10, -5, 0, 1, -10, -5, 0, 1, 2, 9, 2, 3, 4])).toBe(
        900
    );
});

test("tìm tích của 3 pt riêng biệt trong arr", () => {
    expect(findMaxProduct([0, 1, 2, 3, 4, 29, 479, 3, 10, 7])).toBe(138910);
});

test("tìm tích của 3 pt riêng biệt trong arr", () => {
    expect(findMaxProduct([-10, -5, 0, 1, 2, 3, 4 - 1000, 3737, 11, 6])).toBe(
        37220520
    );
});

test("tìm tích của 3 pt riêng biệt trong arr", () => {
    expect(findMaxProduct([1, 2, 4, 6, 9, 2, 92, 2])).toBe(4968);
});