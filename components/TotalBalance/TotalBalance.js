import style from './TotalBalance.module.css'
import { TextMediumShadow, TextExtraBolder } from '../Typography/Typography'
import { Mastercard } from '../icons'
const TotalBalance = () => {
  return (
    <div className={style.TotalBalance}>
      <TextMediumShadow>Total Balance</TextMediumShadow>
      <div className={style.money}>
        <TextExtraBolder>$7 534.14</TextExtraBolder>
        <Mastercard size="30" />
      </div>
    </div>
  )
}

export default TotalBalance
