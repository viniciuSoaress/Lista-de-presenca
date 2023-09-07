import { useUsers } from './hooks/useArray'

import style from './App.module.css'

import { Card } from './components'


export function App() {

   const { array, handleAddUser, handleNameUser, name } = useUsers()




   return (
      <main className={style.main}>

         <header className={style.header}>
            <h1>lista de presença</h1>

            <input
               className={style.input}
               type="text"
               placeholder='ex: name'
               onChange={handleNameUser}
               value={name}
            />

            <button className={style.button} onClick={handleAddUser}>
               Adicionar
            </button>
         </header>


         <div className={style.content}>
            {
               array.map(user => (
                  <Card
                     key={user.id}
                     name={user.name}
                     horario={user.horario}
                  />
               ))
            }
         </div>




      </main>
   )
}