// Polyfills
import 'babel-polyfill' // es polyfill
import 'dom4' // dom4 polyfill
import 'focus-visible' // focus-visible polyfill
// modules
import Headroom from 'headroom.js'
import Blazy from 'blazy'
import Tablist from 'accedeweb-tablist'
import iframeResizer from './modules/iframeResizer'
import FontFaceLoader from './modules/fontFaceLoader'
import Pager from './modules/pager'
import fontsData from '../../fontfaces.json'

// Init Colette object
const colette = window.colette || {}

colette.iframeResizer = iframeResizer
colette.Headroom = Headroom
colette.fonts = new FontFaceLoader({ data: fontsData })

colette.Pager = Pager
colette.pagers = []
Array.prototype.forEach.call(document.querySelectorAll('.block-list'), (item) => {
  colette.pagers.push(new Pager({ blockList: item }))
})

colette.Tablist = Tablist
colette.tablists = []
Array.prototype.forEach.call(document.querySelectorAll('.tabpanel-list'), (item) => {
  colette.tablists.push(new Tablist(item))
})

// lazyload init (images)
colette.lazy = new Blazy({
  offset: 500,
})

export { colette }
