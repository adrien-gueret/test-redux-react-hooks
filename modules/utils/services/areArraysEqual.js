export default function areArraysEqual(array1, array2) {
    return array1 && array2 && array1.length === array2.length && array1.every((value, index) => value === array2[index]);
}