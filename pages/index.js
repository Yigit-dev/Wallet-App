import CardSlider from '../components/CardSlider/CardSlider'
import Layout from '../components/Layout/Layout'
import SendMoney from '../components/SendMoney/SendMoney'
import TopBar from '../components/TopBar/TopBar'

export default function Home() {
  return (
    <Layout>
      <TopBar />
      <CardSlider />
      <SendMoney />
    </Layout>
  )
}
