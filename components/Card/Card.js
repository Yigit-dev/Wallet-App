import { Charge } from '../icons'
import { charge } from '../icons/IconSettings'
import style from './Card.module.css'
import {
  TextBolder,
  TextMediumShadow,
  TextSmallerShadow,
  TextMedium,
} from '../Typography/Typography'
import cn from 'classnames'

const Card = ({ className, cardIcon, payment, money, type, valid }) => {
  return (
    <div className={cn([style.Card, className])}>
      <div className={style.Top}>
        {cardIcon}
        <Charge size={charge.size} color={charge.color} />
      </div>
      <div className={style.Center}>
        <TextBolder>{money}</TextBolder>
        <TextMediumShadow>{type}</TextMediumShadow>
      </div>
      <div className={style.Footer}>
        {payment}
        <div className={style.date}>
          <TextSmallerShadow>VALID THRU</TextSmallerShadow>
          <TextMedium>{valid}</TextMedium>
        </div>
      </div>
    </div>
  )
}

export default Card
