import SpringSheet from '../SpringSheet/SpringSheet'
import { TextMedium } from '../Typography/Typography'
import style from './History.module.css'
import { Amazon, Uber, Spotify, Netflix, PieChart } from '../icons'
import { amazon, uber, spotify, netflix, piechart } from '../icons/IconSettings'
import Expense from '../Expense/Expense'
import { SmallBox } from '../Box/BackgroundBox'

const History = () => {
  return (
    <SpringSheet>
      <div className={style.History}>
        <div className={style.bar}>
          <div className={style.topBar}>
            <TextMedium>History</TextMedium>
            <PieChart color={piechart.color} size={piechart.size} />
          </div>
        </div>
        <div className={style.content}>
          <Expense
            box={
              <SmallBox color={netflix.color}>
                <Netflix size="30" />
              </SmallBox>
            }
            brand="Netflix"
            date="15/12/2019"
            expense="7.99"
          />
          <Expense
            box={
              <SmallBox color={amazon.color}>
                <Amazon size="24" />
              </SmallBox>
            }
            brand="Amazon"
            date="15/12/2019"
            expense="52.25"
          />
          <Expense
            box={
              <SmallBox color={spotify.color}>
                <Spotify size="26" />
              </SmallBox>
            }
            brand="Spotify"
            date="15/12/2019"
            expense="52.25"
          />
          <Expense
            box={
              <SmallBox color={uber.color}>
                <Uber size="34" />
              </SmallBox>
            }
            brand="Uber"
            date="15/12/2019"
            expense="52.25"
          />
          <Expense
            box={
              <SmallBox color={uber.color}>
                <Uber size="34" />
              </SmallBox>
            }
            brand="Uber"
            date="15/12/2019"
            expense="52.25"
          />
        </div>
      </div>
    </SpringSheet>
  )
}

export default History
