import {
  TextMedium,
  TextMediumShadow,
  TextBold,
  TextLight,
} from '../Typography/Typography'
import style from './Expense.module.css'

const Expense = ({ logo, brand, box, nextPayment, date, expense }) => {
  return (
    <div className={style.Expense}>
      <div className={style.logo}>
        {box}
        <div className={style.brand}>
          <TextLight>{brand}</TextLight>
          {nextPayment ? (
            <div className={style.info}>
              <TextMedium>{nextPayment}</TextMedium>
              <TextMedium>{date}</TextMedium>
            </div>
          ) : (
            <TextMediumShadow>{date}</TextMediumShadow>
          )}
        </div>
      </div>
      <TextBold className={style.expense}>
        <span>- $</span> {expense}
      </TextBold>
    </div>
  )
}

export default Expense
