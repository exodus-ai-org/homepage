import { CallingToolsScreen } from './components/calling-tools-screen'
import { ClientLayout } from './components/client-layout'
import { DeepResearchScreen } from './components/deep-research'
import { DownloadScreen } from './components/download-screen'
import { FeaturesGrid } from './components/features-grid'
import { FooterScreen } from './components/footer-screen'
import { MainScreen } from './components/main-screen'
import { ProvidersScreen } from './components/providers-screen'

interface GithubAsset {
  name: string
  browser_download_url: string
  size: number
}

export interface GithubRelease {
  tag_name: string
  published_at: string
  assets: GithubAsset[]
}

async function getLatestRelease(): Promise<GithubRelease | null> {
  try {
    const res = await fetch(
      'https://api.github.com/repos/exodus-ai-org/exodus/releases/latest',
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}

export default async function Page() {
  const release = await getLatestRelease()

  return (
    <ClientLayout>
      <MainScreen />
      <ProvidersScreen />
      <FeaturesGrid />
      <CallingToolsScreen />
      <DeepResearchScreen />
      <DownloadScreen release={release} />
      <FooterScreen />
    </ClientLayout>
  )
}
