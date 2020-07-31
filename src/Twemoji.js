import React, { memo } from 'react'
import twemoji from 'twemoji'

const Twemoji = ({ emoji }) => emoji != null ? (
  <span
    dangerouslySetInnerHTML={{
      __html: twemoji.parse(emoji, {
        folder: 'svg',
        ext: '.svg'
      })
    }}
  />
) : (<span/>)

export default memo(Twemoji)
