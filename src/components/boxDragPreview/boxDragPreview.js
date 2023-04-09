import { memo, useEffect, useState } from 'react'
import { Box } from '../box/box'



const styles = {
  display: 'inline-block',
}

export const BoxDragPreview = memo(function BoxDragPreview({image}) {


  
  const [tickTock, setTickTock] = useState(false)
  useEffect(
    function subscribeToIntervalTick() {
      const interval = setInterval(() => setTickTock(!tickTock), 500)
      return () => clearInterval(interval)
    },
    [tickTock],
  )
  return (
    <div style={styles}>
      <Box image={image}/>
    </div>
  )
})
