import Avatar from '../Avatar/Avatar'
import { BigBox } from '../Box/BackgroundBox'
import { TextMedium } from '../Typography/Typography'
import style from './Person.module.css'

const Person = ({ name }) => {
  return (
    <BigBox className={style.Person}>
      <Avatar />
      <TextMedium>
        {name.length > 8 ? name.substring(0, 8) + '...' : name}
      </TextMedium>
    </BigBox>
  )
}

export default Person
