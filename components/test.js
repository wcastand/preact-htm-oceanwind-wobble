import ow from 'https://unpkg.com/oceanwind'
import { useRef } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module'

import html, { useSpring } from '../utils.js'

const Test = () => {
  const ref = useRef(null)
  useSpring(ref, [['width', (v) => `${v * 450}px`]])
  return html` <button ref=${(r) => (ref.current = r)} className=${ow`text-bold bg-red-500 p-4 my-4`}>Test</button>`
}

export default Test
