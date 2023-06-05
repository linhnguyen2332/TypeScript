/**
 * uniq: Cho một mảng đầu vào, viết một function để loại bỏ các phần tử bị lặp trong mảng.
 * @param {array} arr
 */
export function uniq(arr: Array<number | string>) {
    let array = new Set(arr);
    return [...array];
}
