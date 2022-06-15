import {isatty} from 'tty';


export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}

type UsersType = {
    [key: string]: {id: number, name: string}
}

export const users: UsersType = {
    '0': {id: 101, name: 'Dimych'},
    '1': {id: 102, name: 'Natasha'},
    '2': {id: 102342, name: 'Valera'},
    '3': {id: 2434, name: 'Katya'}
}

export const userArray = [
    {id: 101, name: 'Dimych'},
    {id: 102, name: 'Natasha'},
    {id: 102342, name: 'Valera'},
    {id: 2434, name: 'Katya'}
]

let newUser = {id: 3468, name: 'Zhenya'}


users[newUser.id] = newUser