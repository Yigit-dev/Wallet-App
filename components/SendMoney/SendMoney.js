import { AddButton } from '../Buttons/Buttons'
import Person from '../Person/Person'
import Slider from '../Slider/Slider'
import { TextMedium } from '../Typography/Typography'
import style from './SendMoney.module.css'

const SendMoney = () => {
  return (
    <div className={style.SendMoney}>
      <TextMedium className={style.title}>Send Money</TextMedium>
      <div className={style.Slider}>
        <Slider>
          <li>
            <AddButton />
          </li>
          <li>
            <Person name="Chris" />
          </li>
          <li>
            <Person name="Yiğit Çakmak" />
          </li>
          <li>
            <Person name="Şeftali" />
          </li>
          <li>
            <Person name="Kavun" />
          </li>
        </Slider>
      </div>
    </div>
  )
}

export default SendMoney
