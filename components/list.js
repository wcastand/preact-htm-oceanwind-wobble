import ow from 'https://unpkg.com/oceanwind'
import { useState, useMemo, useEffect } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module'

import html from '../utils.js'

const List = ({ head, data }) => {
  const [d, setD] = useState(data)
  const deleteRow = (i) => () => setD(d.filter((_, idx) => idx !== i))
  const getChild = (row, key, idx) => {
    if (typeof row[key] === 'string') return row[key]
    else return html`<${row[key]} remove=${deleteRow(idx)} />`
  }

  useEffect(() => {
    setD(data)
  }, [data])
  return html`<table className=${ow`w-full text-center table-auto border-collapse border-2 border-gray-500`}>
    <thead>
      <tr>
        ${head.map((h) => html`<th className=${ow`border-1 border-gray-400 px-4 py-2`}>${h.label || h.key || '-'}</th>`)}
      </tr>
    </thead>
    <tbody>
      ${useMemo(
        () =>
          d.map(
            (d, idx) =>
              html`<tr>
                ${head.map((h) => html`<td className=${ow`border-1 border-gray-400 px-4 py-2`}>${getChild(d, h.key, idx)}</td>`)}
              </tr>`
          ),
        [d]
      )}
    </tbody>
  </table>`
}

export default List
