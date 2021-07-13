import { BigBox } from '../Box/BackgroundBox'
import { TextMedium } from '../Typography/Typography'
import style from './Person.module.css'

const Person = ({ name }) => {
  return (
    <BigBox className={style.Person}>
      <TextMedium>{name}</TextMedium>
    </BigBox>
  )
}

export default Person
