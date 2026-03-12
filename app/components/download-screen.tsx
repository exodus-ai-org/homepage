'use client'

import type { GithubRelease } from '@/app/page'
import { motion } from 'framer-motion'
import { ArrowRight, Download, ExternalLink } from 'lucide-react'

// ─── Fallback ────────────────────────────────────────────────────────────────

const FALLBACK_VERSION = 'v1.9.0'
const FALLBACK_BASE = `https://github.com/exodus-ai-org/exodus/releases/download/${FALLBACK_VERSION}`

// ─── Platform icons ──────────────────────────────────────────────────────────

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M14.94 5.19A4.38 4.38 0 0 0 16 2a4.44 4.44 0 0 0-3 1.52 4.07 4.07 0 0 0-1 3.09 3.69 3.69 0 0 0 2.94-1.42zm2.52 7.44a4.51 4.51 0 0 1 2.16-3.81 4.66 4.66 0 0 0-3.66-2c-1.56-.16-3 .91-3.83.91s-2-.89-3.3-.87a4.92 4.92 0 0 0-4.14 2.53C2.93 12.45 4.24 17 6 19.47c.8 1.21 1.8 2.53 3.12 2.49s1.75-.82 3.28-.82 2 .82 3.3.79 2.22-1.24 3.06-2.45a11 11 0 0 0 1.38-2.85 4.41 4.41 0 0 1-2.68-4z" />
    </svg>
  )
}

function WindowsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M0 3.449 9.75 2.1v9.451H0m10.949-9.6L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.8" />
    </svg>
  )
}

function LinuxIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z" />
    </svg>
  )
}

// ─── Asset helpers ───────────────────────────────────────────────────────────

function findUrl(
  assets: GithubRelease['assets'],
  pattern: RegExp,
  fallback: string
): string {
  return (
    assets.find((a) => pattern.test(a.name) && !a.name.endsWith('.blockmap'))
      ?.browser_download_url ?? fallback
  )
}

// ─── Component ───────────────────────────────────────────────────────────────

export function DownloadScreen({
  release
}: {
  release: GithubRelease | null
}) {
  const version = release?.tag_name ?? FALLBACK_VERSION
  const assets = release?.assets ?? []

  const urls = {
    dmg: findUrl(assets, /\.dmg$/, `${FALLBACK_BASE}/exodus-1.9.0.dmg`),
    zip: findUrl(
      assets,
      /-arm64-mac\.zip$/,
      `${FALLBACK_BASE}/Exodus-1.9.0-arm64-mac.zip`
    ),
    exe: findUrl(
      assets,
      /-setup\.exe$/,
      `${FALLBACK_BASE}/exodus-1.9.0-setup.exe`
    ),
    appimage: findUrl(
      assets,
      /\.AppImage$/,
      `${FALLBACK_BASE}/exodus-1.9.0.AppImage`
    ),
    deb: findUrl(assets, /\.deb$/, `${FALLBACK_BASE}/exodus_1.9.0_amd64.deb`),
    snap: findUrl(
      assets,
      /\.snap$/,
      `${FALLBACK_BASE}/exodus_1.9.0_amd64.snap`
    )
  }

  const platforms = [
    {
      id: 'mac',
      name: 'macOS',
      icon: AppleIcon,
      requirement: 'macOS 12 Monterey or later',
      accent: 'from-zinc-500/10 to-zinc-400/5',
      border: 'border-zinc-200 dark:border-zinc-700/60',
      iconColor: 'text-zinc-700 dark:text-zinc-300',
      primary: {
        label: 'Download for Mac',
        sub: 'Universal .dmg · Intel & Apple Silicon',
        url: urls.dmg
      },
      secondary: [{ label: 'Apple Silicon (.zip)', url: urls.zip }]
    },
    {
      id: 'windows',
      name: 'Windows',
      icon: WindowsIcon,
      requirement: 'Windows 10 / 11 (64-bit)',
      accent: 'from-blue-500/10 to-blue-400/5',
      border: 'border-blue-100 dark:border-blue-900/50',
      iconColor: 'text-blue-500',
      primary: {
        label: 'Download for Windows',
        sub: 'Installer .exe · 64-bit',
        url: urls.exe
      },
      secondary: []
    },
    {
      id: 'linux',
      name: 'Linux',
      icon: LinuxIcon,
      requirement: 'Ubuntu 20.04+ · Debian · Fedora',
      accent: 'from-orange-500/10 to-orange-400/5',
      border: 'border-orange-100 dark:border-orange-900/50',
      iconColor: 'text-orange-500',
      primary: {
        label: 'Download AppImage',
        sub: 'Portable · No install needed',
        url: urls.appimage
      },
      secondary: [
        { label: '.deb package', url: urls.deb },
        { label: 'Snap package', url: urls.snap }
      ]
    }
  ]

  return (
    <section id="download" className="bg-[#f5f5f7] py-28 dark:bg-[#111]">
      <div className="mx-auto max-w-[980px] px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mb-16 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-1.5 text-sm font-medium text-zinc-500 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Latest release · {version}
          </div>

          <h2 className="mb-4 text-[56px] font-semibold leading-tight tracking-tight text-zinc-900 dark:text-white">
            Download Exodus.
          </h2>
          <p className="mx-auto max-w-md text-xl text-[#86868b]">
            Free and open source. Available for every major platform.
          </p>
        </motion.div>

        {/* Platform cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.55,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
              }}
              whileHover={{ y: -4 }}
              className={`group flex flex-col overflow-hidden rounded-3xl border ${platform.border} bg-gradient-to-b ${platform.accent} bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl dark:bg-zinc-900/60`}
            >
              {/* Icon + platform */}
              <div className="mb-6 flex items-center gap-3">
                <platform.icon className={`h-9 w-9 ${platform.iconColor}`} />
                <div>
                  <p className="text-lg font-semibold text-zinc-900 dark:text-white">
                    {platform.name}
                  </p>
                  <p className="text-xs text-[#86868b]">
                    {platform.requirement}
                  </p>
                </div>
              </div>

              {/* Primary download */}
              <a
                href={platform.primary.url}
                className="mb-5 flex items-center justify-between rounded-2xl bg-zinc-900 px-5 py-4 transition-all duration-200 hover:bg-zinc-700 dark:bg-white dark:hover:bg-zinc-100"
              >
                <div>
                  <p className="text-sm font-semibold text-white dark:text-zinc-900">
                    {platform.primary.label}
                  </p>
                  <p className="mt-0.5 text-xs text-zinc-400 dark:text-zinc-500">
                    {platform.primary.sub}
                  </p>
                </div>
                <Download className="h-4 w-4 shrink-0 text-zinc-400 dark:text-zinc-500" />
              </a>

              {/* Secondary links */}
              {platform.secondary.length > 0 && (
                <div className="mt-auto flex flex-col gap-2">
                  {platform.secondary.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      className="flex items-center justify-between rounded-xl border border-black/6 bg-black/3 px-4 py-2.5 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:border-white/8 dark:bg-white/5 dark:hover:text-white"
                    >
                      {link.label}
                      <ArrowRight className="h-3.5 w-3.5 opacity-40" />
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* All releases link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/exodus-ai-org/exodus/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[#86868b] transition-colors hover:text-zinc-900 dark:hover:text-white"
          >
            View all releases on GitHub
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
