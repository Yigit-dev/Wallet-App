import { Charge, Mastercard } from '../icons'
import { charge } from '../icons/IconSettings'
import style from './Card.module.css'
import {
  TextBolder,
  TextLight,
  TextMediumShadow,
  TextSmallShadow,
} from '../Typography/Typography'

const Card = ({ card, payment, money, type, valid }) => {
  return (
    <div className={style.Card}>
      <div className={style.Top}>
        {card}
        <Charge size={charge.size} color={charge.color} />
      </div>
      <div className={style.Center}>
        <TextBolder>{money}</TextBolder>
        <TextMediumShadow>{type}</TextMediumShadow>
      </div>
      <div className={style.Footer}>
        {payment}
        <div className={style.date}>
          <TextSmallShadow>VALID THRU</TextSmallShadow>
          <TextLight>{valid}</TextLight>
        </div>
      </div>
    </div>
  )
}

export default Card
