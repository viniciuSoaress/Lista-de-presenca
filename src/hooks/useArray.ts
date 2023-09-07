import { ChangeEvent, useState } from "react";
import { z } from 'zod'

import { UsersProps } from '../types'

const schema = z.string().min(4)

type Name = z.infer<typeof schema>

export function useUsers() {
    let date = new Date()

    const [array, setArray] = useState<UsersProps[]>([]);
    const [name, setName] = useState<Name>('');
    const [id, setId] = useState<number>(0)

    function handleNameUser(e: ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }

    function handleAddUser() {
        const result = schema.safeParse(name)


        if (result.success) {
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
        } else {
            alert('nome deve conter pelo menos 4 letras')
        }

    }
    console.log(id)

    return {
        array,
        handleNameUser,
        handleAddUser,
        name,
    }
}