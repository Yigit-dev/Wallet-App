import Layout from '../components/Layout/Layout'
import TotalBalance from '../components/TotalBalance/TotalBalance'
import WaveBackground from '../components/WaveBackground/WaveBackground'
import { LeftArrow } from '../components/icons'
import { leftArrow } from '../components/icons/IconSettings'
import TopBar from '../components/TopBar/TopBar'

export default function CardDetailPage() {
  return (
    <Layout>
      <WaveBackground />
      <TopBar>
        <LeftArrow color={leftArrow.color} size={leftArrow.size} />
      </TopBar>
      <TotalBalance />
    </Layout>
  )
}
