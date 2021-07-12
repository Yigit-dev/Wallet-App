import { Apple, Charge, Mastercard } from '../icons'
import style from './Card.module.css'
import { apple, charge } from '../icons/IconSettings'

const Card = () => {
  return (
    <div className={style.Card}>
      <div className={style.Top}>
        <Apple size={apple.size} />
        <Charge size={charge.size} color={charge.color} />
      </div>
      <div className={style.Center}>
        <h3 className="money">$7 534.14</h3>
        <p className="shadow-text">Platinum Plus</p>
      </div>
      <div className={style.Footer}>
        <Mastercard size="30" />
        <div className={style.date}>
          <p className="shadow-text">Valid Thru</p>
          <h4 className="date">12/24</h4>
        </div>
      </div>
    </div>
  )
}

export default Card
