import {sum, mult, splitIntoWords} from './01';

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})


test.skip('sum should be correct', () => {

    const result1 = sum(a, b);
    const result2 = sum(b, c);

    expect(result1).toBe(3)
    expect(result2).toBe(5)
})


test.skip('multiply should be correct', () => {

    const result1 = mult(a, b);
    const result2 = mult(b, c);

    expect(result1).toBe(2)
    expect(result2).toBe(6)
})

test.skip('splitting into words should be correct', () => {
    const sentence1 = 'Hello my friends';
    const sentence2 = 'JS - is a programming language';

    const result1 = splitIntoWords(sentence1);
    const result2 = splitIntoWords(sentence2);

    expect(result1.length).toBe(3)
    expect(result2.length).toBe(6)

    // expect(result1).toBe(["Hello", "my", "friends"])
    expect(result1[0]).toBe('Hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friends')


    expect(result2[0]).toBe('JS')
    expect(result2[1]).toBe('-')
    expect(result2[2]).toBe('is')
    expect(result2[3]).toBe('a')
    expect(result2[4]).toBe('programming')
    expect(result2[5]).toBe('language')


    // expect(result2).toBe(["JS", "-", "is", "a", "programming", "language"])
})