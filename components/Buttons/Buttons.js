import cn from 'classnames'
import style from './Buttons.module.css'
import { X } from '../icons'
import { x } from '../icons/IconSettings'

const AddButton = ({ children, className, ...props }) => {
  return (
    <button className={cn([className, style.AddButton])} {...props}>
      <X color={x.color} size={x.size} />
    </button>
  )
}

export { AddButton }
