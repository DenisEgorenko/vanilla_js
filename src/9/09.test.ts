function increaseAge(user: {name: string, age: number}) {
    user.age++;
}

test('should update age', ()=>{

    var user = {
        name: 'Denis',
        age: 26
    }

    increaseAge(user)

    expect(user.age).toBe(27)


    const superman = user

    superman.age = 1000

    expect(user.age).toBe(1000)
})

test('array test', ()=>{

    var users = [
        {name: 'Denis', age: 26},
        {name: 'Vanya', age: 30},
    ]

    var admins = users

    admins.push({name: 'x', age: 50})

    expect(users[2].name).toBe('x')

})

test('value type test', ()=>{

    let usersCount = 100

    let adminsCount = usersCount

    adminsCount = 200

    expect(usersCount).toBe(100)

})


test('obj', ()=>{

    let user = {
        name: 'Denis',
        age: 26,
        address: {
            title: 'Minsk'
        }
    }

    let addr = user.address

    let user2 = {
        name: 'Natasha',
        age: 40,
        address: addr
    }


    user2.address.title = "Moscow"

    expect(user.address.title).toBe("Moscow")
})


test('array test 2', ()=>{

    const address = {
        title: 'Minsk'
    }

    let user = {
        name: 'Denis',
        age: 26,
        address: address
    }

    let user2 = {
        name: 'Natasha',
        age: 40,
        address: address
    }

    const users = [user, user2, {name: 'dd', age: 22, address: address}]

    const admins = [user, user2]

    admins[0].name = "dmitry"


    expect(users[0].name).toBe("dmitry")
})


test('sort array test', ()=>{

    const letters = ['z', 'o', 'v', 'x', 'k']

    pasp(letters)


    expect(letters).toEqual(['z', 'o', 'v', 'x', 'k'])
})

function pasp(letters: any){
    const copy = [...letters].sort()
}