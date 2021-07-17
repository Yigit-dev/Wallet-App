import style from './TopBar.module.css'

const TopBar = ({ children }) => {
  return (
    <div className={style.TopBar}>
      <div className={style.icons}>{children}</div>
    </div>
  )
}

export default TopBar
