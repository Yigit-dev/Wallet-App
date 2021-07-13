import style from './BackgroundBox.module.css'
import cn from 'classnames'

export const BigBox = ({ children, className, ...props }) => {
  return (
    <div className={cn([className, style.BigBox])} {...props}>
      {children}
    </div>
  )
}

export const MediumBox = ({ children, ...props }) => {
  return (
    <div className={cn([className, style.MediumBox])} {...props}>
      {children}
    </div>
  )
}

export const SmallBox = ({ children, ...props }) => {
  return (
    <div className={cn([className, style.SmallBox])} {...props}>
      {children}
    </div>
  )
}
