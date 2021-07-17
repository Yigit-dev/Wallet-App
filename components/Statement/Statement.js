import style from './Statement.module.css'
import { TextMediumShadow, TextBold } from '../Typography/Typography'

const Statement = () => {
  return (
    <div className={style.Statement}>
      <div className="income">
        <TextMediumShadow>Income</TextMediumShadow>
        <TextBold>$2 542.25</TextBold>
      </div>
      <h4>/</h4>
      <div className="spent">
        <TextMediumShadow>Spent</TextMediumShadow>
        <TextBold>$1 832.74</TextBold>
      </div>
    </div>
  )
}

export default Statement
