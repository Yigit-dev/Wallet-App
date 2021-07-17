import Image from 'next/image'
import style from './Avatar.module.css'
import avatar from '../../public/yigit.png'

const Avatar = () => {
  return (
    <div className={style.Avatar}>
      <Image src={avatar} width={52} height={52} objectFit="cover" />
    </div>
  )
}

export default Avatar
