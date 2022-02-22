import React, { useState } from 'react';

const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.debug(event.target.value);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event);
  };

  return (
    <>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag me
      </div>
    </>
  );
};

export default EventComponent;
