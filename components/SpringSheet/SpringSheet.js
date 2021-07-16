import style from './SpringSheet.module.css'
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'

const SpringSheet = ({ children }) => {
  return (
    <BottomSheet
      open={true}
      blocking={false}
      scrollLocking={false}
      skipInitialTransition
      snapPoints={({ maxHeight }) => [
        maxHeight - maxHeight / 2,
        maxHeight / 6,
        maxHeight * 0.3,
      ]}
      className={style.BottomSheet}
    >
      {children}
    </BottomSheet>
  )
}

export default SpringSheet
