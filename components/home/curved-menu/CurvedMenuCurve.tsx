import { motion } from 'framer-motion'

const initialPath = 'M100 0 L200 0 L200 100 L100 100 Q-100 50 100 0'
const targetPath = 'M100 0 L200 0 L200 100 L100 100 Q100 50 100 0'

const curve = {
  initial: { d: initialPath },
  enter: {
    d: targetPath,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] as const },
  },
  exit: {
    d: initialPath,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const },
  },
}

export function CurvedMenuCurve() {
  return (
    <svg
      className="curved-menu-curve"
      viewBox="0 0 200 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path variants={curve} initial="initial" animate="enter" exit="exit" />
    </svg>
  )
}
