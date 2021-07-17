import style from './CreditCard.module.css'
import Card from '../Card/Card'
import Slider from '../Slider/Slider'
import { Apple, Charge, Mastercard, Bitcoin, VisaLogo } from '../icons'
import { apple, charge } from '../icons/IconSettings'
import Link from 'next/link'

const CreditCard = () => {
  return (
    <div className={style.CreditCard}>
      <Slider>
        <li>
          <Link href="/card_detail" scroll={false}>
            <a>
              <Card
                card={<Apple size={apple.size} />}
                payment={<Mastercard size="30" />}
                money="$7 534.14"
                type="Platinum Plus"
                valid="12/24"
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/card_detail" scroll={false}>
            <a>
              <Card
                card={<Apple size={apple.size} />}
                money="$7 534.14"
                type="Platinum Plus"
                valid="12/24"
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/card_detail" scroll={false}>
            <a>
              <Card
                card={<Apple size={apple.size} />}
                payment={<Mastercard size="30" />}
                money="$7 534.14"
                type="Platinum Plus"
                valid="12/24"
              />
            </a>
          </Link>
        </li>
      </Slider>
    </div>
  )
}

export default CreditCard
