import update from 'immutability-helper'
import { useCallback, useState } from 'react'
import { useDrop } from 'react-dnd'
import { DraggableBox } from '../DragableBox/DragableBox'
import { ItemTypes } from '../itemTypes/ItemTypes'
import { snapToGrid as doSnapToGrid } from '../snapToGrid/SnapToGrid'


const styles = {
  width: "100vw",
  height: "500px",
  position: 'relative',
}
export const Container = ({ snapToGrid, images }) => {
  const [boxes, setBoxes] = useState({
    a: { top: 20, left: 500, image: images[0]},
    b: { top: 100, left: 350, image: images[1]},
    c: { top: 80, left: 600, image: images[2]},
    d: { top: 200, left: 520, image: images[3]},
    e: { top: 150, left: 850, image: images[4]},
    f: { top: 100, left: 750, image: images[5]},
    g: { top: 25, left: 670, image: images[6]},
    h: { top: 20, left: 330, image: images[7]},


  })
  const moveBox = useCallback(
    (id, left, top) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top },
          },
        }),
      )
    },
    [boxes],
  )
  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset()
        let left = Math.round(item.left + delta.x)
        let top = Math.round(item.top + delta.y)
        if (snapToGrid) {
          ;[left, top] = doSnapToGrid(left, top)
        }
        moveBox(item.id, left, top)
        return undefined
      },
    }),
    [moveBox],
  )
  return (
    <div ref={drop} style={styles}>
      {Object.keys(boxes).map((key) => (
        <DraggableBox key={key} id={key} {...boxes[key]} />
      ))}
    </div>
  )
}
