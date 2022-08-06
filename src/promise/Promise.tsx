import React from 'react'
import axios from 'axios';


function Promise1() {

    const findUserInDB = (id: number) => {

        const db: Array<{ id: number, name: string, friend: number | null }> = [
            {id: 1, name: 'Dima', friend: 3},
            {id: 2, name: 'Dasha', friend: null},
            {id: 3, name: 'Anya', friend: 2},
            {id: 4, name: 'Katya', friend: 1},
        ]

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let user = db.find(u => u.id === id)

                if (user === null) {
                    reject('user not found')
                } else {
                    resolve(user)
                }
            }, 2000)
        })
    }

    findUserInDB(1)
        .then(u => console.log(u.name))
        .catch(error => console.warn(error))

    return (
        <div>
            Hi
        </div>
    )
}

export default Promise1