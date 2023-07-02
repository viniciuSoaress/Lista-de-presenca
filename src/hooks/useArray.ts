import { ChangeEvent, useState } from "react";

import { UsersProps } from '../types'



export function useUsers() {
    let date = new Date()

    const [array, setArray] = useState<UsersProps[]>([]);
    const [name, setName] = useState<string>('');
    const [id, setId] = useState<number>(0)

    function handleNameUser(e: ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }

    function handleAddUser() {
        setId(n => n + 1)
        setArray([
            ...array,
            {
                id: id + 1,
                name: name,
                horario: date.toLocaleTimeString('pt-br', {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                })
            }
        ])
        setName('')
    }
    console.log(id)

    return {
        array,
        handleNameUser,
        handleAddUser,
        name
    }
}