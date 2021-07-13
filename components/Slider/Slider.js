import style from './Slider.module.css'

const Slider = ({ children }) => {
  return <ul className={style.Slider}>{children}</ul>
}

export default Slider
