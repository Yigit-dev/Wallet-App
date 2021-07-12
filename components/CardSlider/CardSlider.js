import style from './CardSlider.module.css'
import Card from '../Card/Card'

const CardSlider = () => {
  return (
    <ul className={style.CardSlider}>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
    </ul>
  )
}

export default CardSlider
