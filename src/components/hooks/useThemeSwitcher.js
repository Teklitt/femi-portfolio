import React from 'react'
import { useEffect, useState } from 'react'

const useThemeSwitcher = () => {
  const preferDarkQuery = '(prefer-color-schema: dark)'
  //preferDarkQuery.matches

  const [mode, setMode] = useState()
  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery)
    const userPref = window.localStorage.getItem('theme')

    const handleChange = () => {
      if (userPref) {
        let check = userPref === 'dark' ? 'dark' : 'light'
        setMode({ check })
        if (check === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      } else {
        let check = mediaQuery.matches ? 'dark' : 'light'
        setMode({ check })
        window.localStorage.setItem('them', check)
        if (check === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }
    }

    handleChange()

    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (mode === 'dark') {
      window.localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    } else {
      window.localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    }
  }, [mode])

  return [mode, setMode]
}

export default useThemeSwitcher
