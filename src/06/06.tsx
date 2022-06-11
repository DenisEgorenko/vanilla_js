import {ChangeEvent, ChangeEventHandler, EventHandler, MouseEvent} from 'react';


const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
    }

    const search = (event: MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget.name)
    }

    const nameChanged = (event: ChangeEvent<HTMLTextAreaElement>) => {
        console.log('name changed')
    }

    return (
        <div>
            <textarea onChange={nameChanged}>Dimych</textarea>

            <button name={'save'} onClick={deleteUser}>x</button>
            <button name={'delete'} onClick={search}>search</button>
        </div>
    )
} 


export default User