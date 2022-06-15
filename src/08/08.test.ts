type UsersType = {
    [key: string]: {id: number, name: string}
}

let users: UsersType

beforeEach(()=>{
    users = {
        '0': {id: 101, name: 'Dimych'},
        '1': {id: 102, name: 'Natasha'},
        '2': {id: 102342, name: 'Valera'},
        '3': {id: 2434, name: 'Katya'}
    }
})


test('Should select corresponding user from obj', ()=>{

    expect(users[0].name).toBe('Dimych')
    expect(users[1].name).toBe('Natasha')
    expect(users[2].name).toBe('Valera')


    users[3].name = 'Ekaterina'

    expect(users[3].name).toBe('Ekaterina')

    expect(users[3]).toEqual({id: 2434, name: 'Ekaterina'})


})


test('Should delete corresponding obj', ()=>{

    delete users[3]

    expect(Object.keys(users).length).toBe(3)

    expect(users[3]).toBeUndefined()


})