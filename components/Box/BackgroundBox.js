import style from './BackgroundBox.module.css'
import cn from 'classnames'

export const BigBox = ({ children, className, ...props }) => {
  return (
    <div className={cn([className, style.BigBox])} {...props}>
      {children}
    </div>
  )
}

export const MediumBox = ({ children, className, ...props }) => {
  return (
    <div className={cn([className, style.MediumBox])} {...props}>
      {children}
    </div>
  )
}

export const SmallBox = ({ children, className, color, ...props }) => {
  return (
    <div
      className={cn([className, style.SmallBox])}
      style={{ backgroundColor: color }}
      {...props}
    >
      {children}
    </div>
  )
}
