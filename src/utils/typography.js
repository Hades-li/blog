import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'
// import bootstrap from 'typography-theme-bootstrap'
// import oceanBeachTheme from 'typography-theme-ocean-beach'
import stAnnesTheme from 'typography-theme-st-annes'
// import doelgerTheme from 'typography-theme-doelger'

Wordpress2016.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
})

// delete Wordpress2016.googleFonts
Wordpress2016.bodyFontFamily.unshift('Microsoft YaHei')
Wordpress2016.headerFontFamily.unshift('Microsoft YaHei')

const typography = new Typography(stAnnesTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
