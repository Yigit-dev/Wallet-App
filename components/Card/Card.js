import { Apple, Charge, Mastercard } from '../icons'
import style from './Card.module.css'
import { apple, charge } from '../icons/IconSettings'
import {
  TextBolder,
  TextLight,
  TextMediumShadow,
  TextSmallShadow,
} from '../Typography/Typography'

const Card = () => {
  return (
    <div className={style.Card}>
      <div className={style.Top}>
        <Apple size={apple.size} />
        <Charge size={charge.size} color={charge.color} />
      </div>
      <div className={style.Center}>
        <TextBolder>$7 534.14</TextBolder>
        <TextMediumShadow>Platinum Plus</TextMediumShadow>
      </div>
      <div className={style.Footer}>
        <Mastercard size="30" />
        <div className={style.date}>
          <TextSmallShadow>VALID THRU</TextSmallShadow>
          <TextLight>12/24</TextLight>
        </div>
      </div>
    </div>
  )
}

export default Card
