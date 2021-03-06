import SpringSheet from '../SpringSheet/SpringSheet'
import { TextBolder } from '../Typography/Typography'
import style from './Expenses.module.css'
import { Amazon, Uber, Spotify, Netflix, PieChart } from '../icons'
import { amazon, uber, spotify, netflix, piechart } from '../icons/IconSettings'
import Expense from '../Expense/Expense'
import { MediumBox } from '../Box/BackgroundBox'

const Expenses = () => {
  const measure = [2.7, 2, 0.4]
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
            nextPayment="18/07/2021"
            date="15/07/2021"
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
            date="15/07/2021"
            expense="50.25"
          />
          <Expense
            box={
              <MediumBox color={uber.color}>
                <Uber size="40" />
              </MediumBox>
            }
            brand="Uber"
            nextPayment="next payment"
            date="25/07/2021"
            expense="17.99"
          />
          <Expense
            box={
              <MediumBox color={amazon.color}>
                <Amazon size="40" />
              </MediumBox>
            }
            brand="Amazon"
            nextPayment="next payment"
            date="15/07/2021"
            expense="27.99"
          />
          <Expense
            box={
              <MediumBox color={uber.color}>
                <Uber size="40" />
              </MediumBox>
            }
            brand="Uber"
            nextPayment="next payment"
            date="15/07/2021"
            expense="8"
          />
        </div>
      </div>
    </SpringSheet>
  )
}

export default Expenses
