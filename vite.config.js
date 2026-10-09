import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'

// Adds app files (manifest, service worker, icons) so the site can be installed as an app.
const pwa = () => ({
  name: 'jan-awaaz-pwa',
  generateBundle() {
    const manifest = {
      name: 'जन आवाज़ · Jan Awaaz', short_name: 'Jan Awaaz', lang: 'hi',
      description: 'स्वतंत्र नागरिक सूचना मंच', start_url: '/', scope: '/', display: 'standalone',
      background_color: '#12284c', theme_color: '#12284c',
      icons: [
        { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      ],
    }
    this.emitFile({ type: 'asset', fileName: 'manifest.webmanifest', source: JSON.stringify(manifest) })
    this.emitFile({ type: 'asset', fileName: 'sw.js', source: "self.addEventListener('install',()=>self.skipWaiting());self.addEventListener('activate',e=>e.waitUntil(clients.claim()));self.addEventListener('fetch',e=>e.respondWith(fetch(e.request)))" })
    for (const f of ['icon-192.png', 'icon-512.png', 'privacy.html']) this.emitFile({ type: 'asset', fileName: f, source: fs.readFileSync(f) })
  },
})
export default defineConfig({ plugins: [react(), pwa()] })
