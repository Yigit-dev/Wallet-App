import style from './Statement.module.css'
import { TextMediumShadow, TextBold } from '../Typography/Typography'

const Statement = () => {
  return (
    <div className={style.Statement}>
      <div className={style.content}>
        <div className={style.income}>
          <TextMediumShadow>Income</TextMediumShadow>
          <TextBold>$2 542.25</TextBold>
        </div>
        <h4>/</h4>
        <div className={style.spent}>
          <TextMediumShadow>Spent</TextMediumShadow>
          <TextBold>$1 832.74</TextBold>
        </div>
      </div>
    </div>
  )
}

export default Statement
