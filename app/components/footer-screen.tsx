'use client'

import { motion } from 'framer-motion'
import { Github, Heart, Star, Twitter } from 'lucide-react'

const links = [
  {
    section: 'Product',
    items: ['Features', 'Download', 'Changelog', 'Roadmap']
  },
  {
    section: 'Resources',
    items: ['Documentation', 'GitHub', 'Discord', 'Blog']
  },
  {
    section: 'Company',
    items: ['About', 'Sponsor', 'Privacy', 'Terms']
  }
]

export function FooterScreen() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 pt-20 pb-16">
      <div className="mx-auto max-w-[980px]">
        {/* Top section */}
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="mb-3 text-2xl font-black tracking-tight text-white">
              Exodus
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-white/40">
              The open-source AI ChatBot for the modern era. Free, powerful, and
              extensible.
            </p>
            <div className="flex gap-4">
              {[
                {
                  icon: Github,
                  href: 'https://github.com/exodus-ai-org/exodus',
                  label: 'GitHub'
                },
                {
                  icon: Twitter,
                  href: 'https://twitter.com/YanceyOfficial',
                  label: 'Twitter'
                },
                {
                  icon: Star,
                  href: 'https://github.com/exodus-ai-org/exodus/stargazers',
                  label: 'Star'
                }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all hover:border-white/20 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {links.map((group) => (
            <div key={group.section}>
              <p className="mb-4 text-xs font-semibold tracking-widest text-white/40 uppercase">
                {group.section}
              </p>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-white/50 transition-colors hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mb-8 h-px bg-white/8" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Yancey Inc. All rights reserved.
          </p>
          <motion.p
            className="flex items-center gap-1.5 text-xs text-white/25"
            whileHover={{ scale: 1.05 }}
          >
            Built with <Heart className="h-3 w-3 fill-pink-400 text-pink-400" />{' '}
            by the Exodus team
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
