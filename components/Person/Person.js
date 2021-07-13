import { BigBox } from '../Box/BackgroundBox'
import { TextLight } from '../Typography/Typography'
import style from './Person.module.css'

const Person = ({ name }) => {
  return (
    <BigBox className={style.Person}>
      <TextLight>{name}</TextLight>
    </BigBox>
  )
}

export default Person
