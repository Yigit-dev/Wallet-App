import CreditCard from '../components/CreditCard/CreditCard'
import History from '../components/History/History'
import Layout from '../components/Layout/Layout'
import SendMoney from '../components/SendMoney/SendMoney'
import TopBar from '../components/TopBar/TopBar'

export default function Home() {
  return (
    <Layout>
      <TopBar />
      <CreditCard />
      <SendMoney />
      <History />
    </Layout>
  )
}
