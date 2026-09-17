import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves project sites from https://<user>.github.io/<repo>/,
  // so the build needs to know it isn't at the domain root.
  //
  // Change 'portfolio' below to your actual repository name before deploying.
  // If you deploy to a custom domain or to a <user>.github.io *user* site
  // (a repo literally named <username>.github.io), set this back to '/'.
  base: '/portfolio/',
})
