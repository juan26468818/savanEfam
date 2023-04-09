import React, { useState, useCallback } from 'react';
import { Container } from '../container/container';
import { CustomDragLayer } from '../customDragLayer/CustomDragLayer';





const Mosaic = ({images}) => {

    const [snapToGridAfterDrop, setSnapToGridAfterDrop] = useState(false)
    const [snapToGridWhileDragging, setSnapToGridWhileDragging] = useState(false)
    const handleSnapToGridAfterDropChange = useCallback(() => {
        setSnapToGridAfterDrop(!snapToGridAfterDrop)
    }, [snapToGridAfterDrop])
    const handleSnapToGridWhileDraggingChange = useCallback(() => {
        setSnapToGridWhileDragging(!snapToGridWhileDragging)
    }, [snapToGridWhileDragging])
    return (
        <div className='mosaic__container'>
          <Container snapToGrid={snapToGridAfterDrop} images={images}/>
          <CustomDragLayer snapToGrid={snapToGridWhileDragging} />
          
        </div>
      )
};

export default Mosaic;