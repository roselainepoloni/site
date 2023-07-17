module.exports = {
  content: [
    './node_modules/flowbite/**/*.js',
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        'brand-100': '#87eb87',
        'brand-200': '#00d700',
        'brand-300': '#006e00',
        'brand-400': '#003c00'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
