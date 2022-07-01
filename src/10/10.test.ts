import {
    addCompany,
    addNewBooks,
    makeHairStyle,
    moveUser, removeBook, updateBook, updateCompanyTitle,
    upgradeHouseNum,
    upgradeLaptop,
    Usertype,
    userWithBooks, userWithCompanies,
    userWithLaptop
} from './10';




test('reference type test', () => {
    let user: Usertype = {
        name: 'Denis',
        hair: 26,
        address: {
            title: 'Minsk'
        }
    }

    const newUser = makeHairStyle(user, 13)


    expect(user.hair).toBe(26)
    expect(newUser.hair).toBe(13)
})

test('change address', () => {
    let user: userWithLaptop = {
        name: 'Denis',
        hair: 26,
        address: {
            title: 'Minsk'
        },
        laptop: {title: 'Zenbook'}
    }

    const newUser = moveUser(user, 'Kiev')


    expect(user).not.toBe(newUser)
    expect(user.address).not.toBe(newUser.address)
    expect(user.laptop).toBe(newUser.laptop)
    expect(user.address.title).toBe('Minsk')
    expect(newUser.address.title).toBe('Kiev')
})

test('upgrade laptop', () => {
    let user: userWithLaptop = {
        name: 'Denis',
        hair: 26,
        address: {
            title: 'Minsk'
        },
        laptop: {title: 'Zenbook'}
    }

    const newUser = upgradeLaptop(user, 'MacBook')


    expect(user).not.toBe(newUser)
    expect(user.laptop).not.toBe(newUser.laptop)
    expect(user.address).toBe(newUser.address)
    expect(user.laptop.title).toBe('Zenbook')
    expect(newUser.laptop.title).toBe('MacBook')

})

test('moove to house', () => {
    let user: userWithLaptop & userWithBooks = {
        name: 'Denis',
        hair: 26,
        address: {
            title: 'Minsk',
            house: 12
        },
        laptop: {title: 'Zenbook'},
        books: ['css', 'html', 'js', 'react']
    }

    const newUser = upgradeHouseNum(user, 25)


    expect(user).not.toBe(newUser)
    expect(user.books).toBe(newUser.books)
    expect(user.laptop).toBe(newUser.laptop)

    expect(user.address).not.toBe(newUser.address)

    expect(user.address.house).toBe(12)
    expect(newUser.address.house).toBe(25)

})

test('add new books to user', () => {
    let user: userWithLaptop & userWithBooks = {
        name: 'Denis',
        hair: 26,
        address: {
            title: 'Minsk',
            house: 12
        },
        laptop: {title: 'Zenbook'},
        books: ['css', 'html', 'js', 'react']
    }

    const newUser = addNewBooks(user, ['ts', 'rest API'])


    expect(user).not.toBe(newUser)
    expect(user.laptop).toBe(newUser.laptop)
    expect(user.address).toBe(newUser.address)

    expect(user.books).not.toBe(newUser.books)

    expect(newUser.books[4]).toBe('ts')
    expect(newUser.books[5]).toBe('rest API')

})

test('update js to ts', () => {
    let user: userWithLaptop & userWithBooks = {
        name: 'Denis',
        hair: 26,
        address: {
            title: 'Minsk',
            house: 12
        },
        laptop: {title: 'Zenbook'},
        books: ['css', 'html', 'js', 'react']
    }

    const newUser = updateBook(user, 'js','ts')

    expect(user).not.toBe(newUser)
    expect(user.laptop).toBe(newUser.laptop)
    expect(user.address).toBe(newUser.address)

    expect(user.books).not.toBe(newUser.books)

    expect(user.books[2]).toBe('js')
    expect(newUser.books[2]).toBe('ts')
})


test('remove js from books', () => {
    let user: userWithLaptop & userWithBooks = {
        name: 'Denis',
        hair: 26,
        address: {
            title: 'Minsk',
            house: 12
        },
        laptop: {title: 'Zenbook'},
        books: ['css', 'html', 'js', 'react']
    }

    const newUser = removeBook(user, 'js')

    expect(user).not.toBe(newUser)
    expect(user.laptop).toBe(newUser.laptop)
    expect(user.address).toBe(newUser.address)

    expect(user.books).not.toBe(newUser.books)

    expect(user.books[2]).toBe('js')
    expect(newUser.books[2]).toBe('react')
})

test('add company', () => {
    let user: userWithLaptop & userWithCompanies = {
        name: 'Denis',
        hair: 26,
        address: {
            title: 'Minsk',
            house: 12
        },
        laptop: {title: 'Zenbook'},
        companies: [
            {id: 1, title: 'pwc'},
            {id: 2, title: 'tedo'},
        ]
    }

    const newUser = addCompany(user, 1,'google')

    expect(user).not.toBe(newUser)
    expect(user.laptop).toBe(newUser.laptop)
    expect(user.address).toBe(newUser.address)

    expect(user.companies).not.toBe(newUser.companies)
    expect(newUser.companies[0].title).toBe('google')
});


test('update company', () => {

    let company = {
        'denis' : [{id: 1, title: 'pwc'}, {id: 2, title: 'tedo'}],
        'Artem' : [{id: 1, title: 'epam'}],
    }

    const companyCopy = updateCompanyTitle(company, 'Artem',1, 'google')

    expect(company).not.toBe(companyCopy)


    expect(company['denis']).toBe(companyCopy['denis'])
    expect(company['Artem']).not.toBe(companyCopy['Artem'])
    expect(companyCopy['Artem'][0].title).toBe('google')
});