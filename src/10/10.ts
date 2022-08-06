export type Usertype = {
    name: string,
    hair: number,
    address: { title?: string, house?: number }
}

export type laptopType = {
    title: string
}

export type userWithLaptop = Usertype & {
    laptop: laptopType
}

export type userWithBooks = {
    books: Array<string>
}

export type userWithCompanies = {
    companies: Array<{ id: number, title: string }>
}


export function makeHairStyle(u: Usertype, lengthToCut: number) {
    const copy = {...u, hair: u.hair - lengthToCut}

    return copy
}

export function moveUser(u: userWithLaptop, city: string) {
    return {...u, address: {...u.address, title: city}}
}

export function upgradeLaptop(u: userWithLaptop, laptop: string) {
    const copy = {...u, laptop: {...u.laptop, title: laptop}}

    return copy
}

export function upgradeHouseNum(u: userWithLaptop & userWithBooks, number: number) {
    const copy = {...u, address: {...u.address, house: number}}

    return copy
}

export function addNewBooks(u: userWithLaptop & userWithBooks, books: Array<string>) {
    const copy = {...u, books: [...u.books.concat(books)]}

    return copy
}

export function updateBook(u: userWithLaptop & userWithBooks, ch: string, nw: string) {
    return {...u, books: u.books.map(b => b === ch ? nw : b)}
}

export function removeBook(u: userWithLaptop & userWithBooks, rm: string) {
    return {...u, books: u.books.filter(b => b !== rm)}
}

export function addCompany(
    u: userWithLaptop & userWithCompanies,
    id: number,
    company: string
) {
    return {
        ...u,
        companies: u.companies.map(c => c.id === id ? {...c, title: company} : c)
    }
}

export function updateCompanyTitle(
    companies: {
        [key: string]: Array<{ id: number, title: string }>
    },
    name: string,
    id: number,
    newTitle: string
) {
    return {
        ...companies,
        [name]: companies[name].map(c => c.id === id ? {...c, title: newTitle} : c)
    }
}