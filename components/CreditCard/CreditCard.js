import style from './CreditCard.module.css'
import Card from '../Card/Card'
import Slider from '../Slider/Slider'

const CreditCard = () => {
  return (
    <div className={style.CreditCard}>
      <Slider>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
      </Slider>
    </div>
  )
}

export default CreditCard
