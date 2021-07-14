import style from './CreditCard.module.css'
import Card from '../Card/Card'
import Slider from '../Slider/Slider'
import { Apple, Charge, Mastercard, Bitcoin, VisaLogo } from '../icons'
import { apple, charge } from '../icons/IconSettings'

const CreditCard = () => {
  return (
    <div className={style.CreditCard}>
      <Slider>
        <li>
          <Card
            card={<Apple size={apple.size} />}
            payment={<Mastercard size="30" />}
            money="$7 534.14"
            type="Platinum Plus"
            valid="12/24"
          />
        </li>
        <li>
          <Card
            card={<Apple size={apple.size} />}
            money="$7 534.14"
            type="Platinum Plus"
            valid="12/24"
          />
        </li>
        <li>
          <Card
            card={<Apple size={apple.size} />}
            money="$7 534.14"
            type="Platinum Plus"
            valid="12/24"
          />
        </li>
      </Slider>
    </div>
  )
}

export default CreditCard
