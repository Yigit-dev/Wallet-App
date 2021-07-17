import style from './WaveBackground.module.css'
import { WaveFront, WaveBack } from '../icons'

const WaveBackground = () => {
  return (
    <div className={style.WaveBackground}>
      <WaveFront size="600" />
      <WaveBack size="600" />
    </div>
  )
}

export default WaveBackground
