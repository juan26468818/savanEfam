import { memo, useEffect, useState } from 'react'
import { useDrag } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'
import { Box } from '../box/box'
import { ItemTypes } from '../itemTypes/ItemTypes'

let myZIndex = 1

function getStyles(left, top, isDragging, zIndex) {
  const transform = `translate3d(${left}px, ${top}px, 0)`
  return {
    position: 'absolute',
    transform,
    WebkitTransform: transform,
    // IE fallback: hide the real node using CSS when dragging
    // because IE will ignore our custom "empty image" drag preview.
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : '',
    zIndex: zIndex
  }
}
export const DraggableBox = memo(function DraggableBox(props) {
  const [zIndex, setZIndex] = useState(1)
  const { id, image, left, top } = props
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      item: { id, left, top, image },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      myZIndex: myZIndex += 1,
      myindex: setZIndex(myZIndex),
    }),
    [id, left, top, image],
  )
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, [])
  return (
    <div
      ref={drag}
      style={getStyles(left, top, isDragging, zIndex)}
      role="DraggableBox"
    >
      <Box image={image}/>
    </div>
  )
})
