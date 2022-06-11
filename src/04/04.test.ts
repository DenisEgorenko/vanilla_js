let ages: Array<number>

let courses: Array<courseType>

let tasks: Array<taskType>

type courseType = {
    title: string,
    price: number
}

type taskType = {
    id: number,
    title: string,
    isDone: boolean
}

beforeEach(() => {
    ages = [18, 20, 22, 1, 100, 90, 14];

    courses = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150}
    ]

    tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Salt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true},
    ]

})


test.skip('Should return only older 90 years', () => {

    const oldFilter = ages.filter(ages => ages > 90)

    expect(oldFilter.length).toBe(1)
    expect(oldFilter[0]).toBe(100)
})


test.skip('Should return only cheap courses', () => {

    const cheapCourses = courses.filter(course => course.price < 160)

    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].title).toBe('CSS')
    expect(cheapCourses[1].title).toBe('REACT')
})


test.skip('only bought items', () => {

    const boughtItems = tasks.filter(task => task.isDone)

    expect(boughtItems.length).toBe(2)
    expect(boughtItems[0].id).toBe(2)
    expect(boughtItems[1].id).toBe(4)
})