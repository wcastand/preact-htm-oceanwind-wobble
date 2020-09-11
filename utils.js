import htm from 'https://unpkg.com/htm?module'
import { h } from 'https://unpkg.com/preact@latest?module'
import { Spring } from 'https://unpkg.com/wobble@1.5.1/dist/wobble.es.js?module'
import { useMemo, useEffect } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module'

const defaultOpts = {
  stiffness: 1000,
  damping: 50,
  mass: 3,
  fromValue: 0,
  toValue: 1,
  auto: true,
}

export const useSpring = (ref, interpolate = [], options = defaultOpts) => {
  const spring = useMemo(() => new Spring({ ...defaultOpts, ...options }), [options])
  useEffect(() => {
    if (ref) {
      spring
        .onStart(() => interpolate.map(([prop, fn]) => (ref.current.style[prop] = fn(options.fromValue, 0))))
        .onUpdate((s) => interpolate.map(([prop, fn]) => (ref.current.style[prop] = fn(s.currentValue, s.currentVelocity))))
        .onStop(() => interpolate.map(([prop, fn]) => (ref.current.style[prop] = fn(options.toValue, 0))))
      if (options.auto) spring.start()
    }

    return () => spring.removeAllListeners()
  }, [ref, spring])

  return spring
}

export const html = htm.bind(h)
export default html
