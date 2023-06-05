/**
 * reverses: Cho đầu vào là 1 mảng, Viết một function để đảo ngược thứ tự phần tử trong mảng , yêu cầu không dùng hàm Reverses có sẵn của javascrip
 * @param {array} arr 
 */
export function reverseArray(arr: number[] | string[]): Array<number | string> {
    const reversed: Array<number | string> = [];
    arr.forEach((element) => {
        [].unshift()
        reversed.unshift(element);
    });
    return reversed;
}

