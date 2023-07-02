import { CardProps } from '../../types'
import style from './index.module.css'

export function Card({name, horario}: CardProps){

    return(
        <section className={style.section}>

            <strong>{name}</strong>

            <small>{horario}</small>

        </section>
    )
}