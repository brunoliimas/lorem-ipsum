import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { CurvedMenuNav } from './curved-menu/CurvedMenuNav'

export function SiteHeader() {
  const [isActive, setIsActive] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsActive(false)
  }, [router.asPath])

  useEffect(() => {
    document.body.style.overflow = isActive ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isActive])

  const toggleMenu = () => setIsActive((current) => !current)

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[1001] padding-global pointer-events-none">
        <div className="container-base flex items-center justify-end py-6 pointer-events-auto">
          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isActive}
            aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
            className="flex size-16 shrink-0 items-center justify-center rounded-full bg-accent transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <span
              className={`curved-menu-burger ${isActive ? 'is-active' : ''}`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isActive && (
          <CurvedMenuNav
            key="curved-menu"
            activePath={router.asPath}
            onClose={() => setIsActive(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
