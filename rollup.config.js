import postcss from 'rollup-plugin-postcss'
import bundleSize from 'rollup-plugin-bundle-size'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

const watch = process.env.ROLLUP_WATCH

export default {
  input: 'src/app.js',
  output: {
    file: 'dist/app.js',
    format: 'iife'
  },
  plugins: [
    postcss({
      extract: 'dist/app.css'
    }),
    bundleSize(),
    watch && serve({
      contentBase: 'dist',
      host: '0.0.0.0',
      port: 3000,
      verbose: false
    }),
    watch && livereload('dist')
  ],
  watch: {
    clearScreen: false
  }
}
