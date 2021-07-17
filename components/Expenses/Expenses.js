import SpringSheet from '../SpringSheet/SpringSheet'
import { TextBolder } from '../Typography/Typography'
import style from './Expenses.module.css'
import { Amazon, Uber, Spotify, Netflix, PieChart } from '../icons'
import { amazon, uber, spotify, netflix, piechart } from '../icons/IconSettings'
import Expense from '../Expense/Expense'
import { MediumBox } from '../Box/BackgroundBox'

const Expenses = () => {
  const measure = [3, 2.1, 0.5]
  return (
    <SpringSheet className={style.Sheet} measure={measure}>
      <div className={style.Expenses}>
        <div className={style.bar}>
          <div className={style.topBar}>
            <TextBolder>Expenses</TextBolder>
          </div>
        </div>
        <div className={style.content}>
          <Expense
            box={
              <MediumBox color={netflix.color}>
                <Netflix size="40" />
              </MediumBox>
            }
            brand="Netflix"
            nextPayment="next payment"
            date="15/12/2019"
            expense="7.99"
          />
          <Expense
            box={
              <MediumBox color={amazon.color}>
                <Amazon size="40" />
              </MediumBox>
            }
            brand="Amazon"
            nextPayment="next payment"
            date="15/12/2019"
            expense="7.99"
          />
          <Expense
            box={
              <MediumBox color={uber.color}>
                <Uber size="40" />
              </MediumBox>
            }
            brand="Uber"
            nextPayment="next payment"
            date="15/12/2019"
            expense="7.99"
          />
        </div>
      </div>
    </SpringSheet>
  )
}

export default Expenses
