import CreditCard from '../components/CreditCard/CreditCard'
import History from '../components/History/History'
import Layout from '../components/Layout/Layout'
import SendMoney from '../components/SendMoney/SendMoney'
import TopBar from '../components/TopBar/TopBar'
import { Grid, Search } from '../components/icons'
import { grid, search } from '../components/icons/IconSettings'

export default function Home() {
  return (
    <Layout>
      <TopBar>
        <Grid color={grid.color} size={grid.size} />
        <Search color={search.color} size={search.size} />
      </TopBar>
      <CreditCard />
      <SendMoney />
      <History />
    </Layout>
  )
}
