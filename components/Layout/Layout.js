import Head from 'next/head'
import style from './Layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={style.Layout}>
      <Head>
        <title>Home</title>
      </Head>
      <main>{children}</main>
    </div>
  )
}

export default Layout
