import style from './SpringSheet.module.css'
import { BottomSheet } from 'react-spring-bottom-sheet'
import cn from 'classnames'
import 'react-spring-bottom-sheet/dist/style.css'

const SpringSheet = ({
  children,
  className,
  measure = [2, 6, 0.3],
  ...props
}) => {
  return (
    <BottomSheet
      open={true}
      blocking={false}
      scrollLocking={false}
      skipInitialTransition
      snapPoints={({ maxHeight }) => [
        maxHeight - maxHeight / measure[0],
        maxHeight / measure[1],
        maxHeight * measure[2],
      ]}
      className={cn([className, style.BottomSheet])}
      {...props}
    >
      {children}
    </BottomSheet>
  )
}

export default SpringSheet
