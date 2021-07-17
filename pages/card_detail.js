import Layout from '../components/Layout/Layout'
import TotalBalance from '../components/TotalBalance/TotalBalance'
import WaveBackground from '../components/WaveBackground/WaveBackground'
import { LeftArrow } from '../components/icons'
import { leftArrow } from '../components/icons/IconSettings'
import TopBar from '../components/TopBar/TopBar'
import Statement from '../components/Statement/Statement'
import Link from 'next/link'
import Expenses from '../components/Expenses/Expenses'

export default function CardDetailPage() {
  return (
    <Layout>
      <WaveBackground />
      <TopBar>
        <Link href="/">
          <a>
            <LeftArrow color={leftArrow.color} size={leftArrow.size} />
          </a>
        </Link>
      </TopBar>
      <TotalBalance />
      <Statement />
      <Expenses />
    </Layout>
  )
}
