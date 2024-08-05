import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Export the Vite configuration
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This alias is optional and can be used if you have specific path resolutions
      // 'aceternity-ui': path.resolve(__dirname, 'node_modules/aceternity-ui'),
    },
  },
});
