import { useUsers } from './hooks/useArray'

import style from './App.module.css'

import { Card } from './components'


export function App() {

   const { array, handleAddUser, handleNameUser, name } = useUsers()



   return (
      <main className={style.main}>

         <h1>lista de presença</h1>

         <input
            className={style.input}
            type="text"
            placeholder='ex: name'
            onChange={handleNameUser}
            value={name}
         />

         <button onClick={handleAddUser}>
            Adicionar
         </button>

         {
            array.map(user => (
               <Card
                  key={user.id}
                  name={user.name}
                  horario={user.horario}
               />
            ))
         }


      </main>
   )
}