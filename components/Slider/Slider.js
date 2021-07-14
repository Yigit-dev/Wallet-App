import style from './Slider.module.css'
import cn from 'classnames'

const Slider = ({ children, className, ...props }) => {
  return (
    <ul className={cn([className, style.Slider])} {...props}>
      {children}
    </ul>
  )
}

export default Slider
