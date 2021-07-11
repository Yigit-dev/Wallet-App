import style from './TopBar.module.css'
import { Grid, Search } from '../icons'
import { grid, search } from '../icons/IconSettings'

const TopBar = () => {
  return (
    <div className={style.TopBar}>
      <div className={style.icons}>
        <Grid color={grid.color} size={grid.size} />
        <Search color={search.color} size={search.size} />
      </div>
    </div>
  )
}

export default TopBar
