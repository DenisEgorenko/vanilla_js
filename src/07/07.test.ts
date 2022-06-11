

export type ManType = {
    name: string,
    age: number,
    lessons: Array<{title: string}>,
    address: {street: {title: string}}
}

let man: ManType;

beforeEach(() => {
    man = {
        name: 'Denis',
        age: 32,
        lessons: [{title: '1'}, {title: '2'} , {title: '3'}],
        address: {
            street: {
                title: 'lenin str'
            }
        }
    }
})


test('', () => {

    const [ls1, ,...Rest] = man.lessons


    const {age, lessons} = man;
    const {title} = man.address.street


    const a = man.age
    const l = man.lessons


    expect(age).toBe(32)
    expect(lessons.length).toBe(3)
    expect(title).toBe('lenin str')
    expect(ls1.title).toBe("1")
    expect(Rest[0]).toStrictEqual({title: '3'})

})