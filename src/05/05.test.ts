import {createGreetMessage, getStreetsTitles, teachPeople} from './05';
import {cityType} from '../02/02_02';

export type ManType = {
    name: string,
    age: number
}

let city: cityType;

let people: Array<ManType>


beforeEach(() => {
    people = [
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Alexandr Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18}
    ]

    city = {
        title: 'New York',
        houses: [
            {id: 1, builtAt: 2012, repaired: false, address: {number: 100, street: {title: 'White Street'}}},
            {id: 2, builtAt: 2000, repaired: false, address: {number: 100, street: {title: 'Happy Street'}}},
            {id: 3, builtAt: 2020, repaired: false, address: {number: 101, street: {title: 'Happy Street'}}}
        ],
        governmentBuildings: [
            {type: 'HOSPITAL', budget: 200000, staffCount: 200, address: {street: {title: 'Central Str'}}},
            {type: 'FIRE-STATION', budget: 500000, staffCount: 1000, address: {street: {title: 'South Str'}}}
        ],
        citizensNumber: 1000000
    }
})


test.skip('People should know stack', () => {


    let newpeople = people.map(man => ({
        stack: ['CSS', 'html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        secondName: man.name.split(' ')[1],
        age: man.age
    }))

    expect(newpeople.length).toBe(3)
    expect(newpeople[0].firstName).toBe('Andrew')
    expect(newpeople[0].age).toBe(33)
})


test.skip('Say Hello to People', () => {


    let hello = people.map(man => `Hello ${man.name.split(' ')[0]}`)

    expect(hello.length).toBe(3)
    expect(hello[0]).toBe('Hello Andrew')
})


test.skip('List of streets titles', () => {


    let streets = getStreetsTitles(city.governmentBuildings)

    expect(streets.length).toBe(2)
    expect(streets[0]).toBe('Central Str')
    expect(streets[1]).toBe('South Str')
})


test.skip('Create greeting messages for streets', () => {

        let streets = createGreetMessage(city.houses)

        expect(streets.length).toBe(3)
        expect(streets[0]).toBe('Hello guys from White Street')
        expect(streets[1]).toBe('Hello guys from Happy Street')
        expect(streets[2]).toBe('Hello guys from Happy Street')
    }
)