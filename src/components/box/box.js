import { memo } from 'react'

  export const Box = memo(function Box({ image }) {
  return (
    <div>
      <img src={image} className="digital1"/>
    </div>
  )
})
