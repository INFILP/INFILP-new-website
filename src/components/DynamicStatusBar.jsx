// 'use client'

// import { useEffect } from 'react'

// const DynamicStatusBar = () => {
//   useEffect(() => {
//     let currentState = null

//     const handleScroll = () => {
//       const scrollY = window.scrollY
//       const isScrolled = scrollY > 150

//       if (currentState !== isScrolled) {
//         currentState = isScrolled

//         const themeColor = isScrolled ? '#ffffff' : '#000000'

//         // Only update existing meta tag content
//         const themeMeta = document.querySelector('meta[name="theme-color"]')
//         if (themeMeta) {
//           themeMeta.setAttribute('content', themeColor)
//         }
//       }
//     }

//     window.addEventListener('scroll', handleScroll, { passive: true })
//     handleScroll()

//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return null
// }

// export default DynamicStatusBar

'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const DynamicStatusBar = () => {
  const pathname = usePathname()

  useEffect(() => {
    let currentState = null

    const setThemeColor = (color) => {
      let themeMeta = document.querySelector('meta[name="theme-color"]')
      if (themeMeta) {
        themeMeta.setAttribute('content', color)
      } else {
        themeMeta = document.createElement('meta')
        themeMeta.setAttribute('name', 'theme-color')
        themeMeta.setAttribute('content', color)
        document.head.appendChild(themeMeta)
      }
    }

    if (pathname === '/spotlight') {
      // Always start black on spotlight
      setThemeColor('#000000')

      const handleScroll = () => {
        const scrollY = window.scrollY
        const isScrolled = scrollY > 150

        if (currentState !== isScrolled) {
          currentState = isScrolled
          const themeColor = isScrolled ? '#ffffff' : '#000000'
          setThemeColor(themeColor)
        }
      }

      window.addEventListener('scroll', handleScroll, { passive: true })

      return () => window.removeEventListener('scroll', handleScroll)
    } else {
      // Default → always white
      setThemeColor('#ffffff')
    }
  }, [pathname])

  return null
}

export default DynamicStatusBar
