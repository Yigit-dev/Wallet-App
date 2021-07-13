import style from './Typography.module.css'
import cn from 'classnames'

const TextSmall = ({ children, className, ...props }) => {
  return (
    <p className={cn([className, style.TextSmall])} {...props}>
      {children}
    </p>
  )
}

const TextLight = ({ children, className, ...props }) => {
  return (
    <p className={cn([className, style.TextLight])} {...props}>
      {children}
    </p>
  )
}

const TextMedium = ({ children, className, ...props }) => {
  return (
    <p className={cn([className, style.TextMedium])} {...props}>
      {children}
    </p>
  )
}

const TextBold = ({ children, className, ...props }) => {
  return (
    <p className={cn([className, style.TextBold])} {...props}>
      {children}
    </p>
  )
}

const TextBolder = ({ children, className, ...props }) => {
  return (
    <p className={cn([className, style.TextBolder])} {...props}>
      {children}
    </p>
  )
}

export { TextSmall, TextLight, TextMedium, TextBold, TextBolder }
