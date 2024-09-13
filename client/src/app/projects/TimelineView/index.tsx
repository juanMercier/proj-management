import React from 'react'

type TimelineProps = {
    id: string;
    setIsModalNewTaskOpen: (isOpen: boolean) => void;
}

const Timeline = ({id, setIsModalNewTaskOpen}: TimelineProps) => {
  return (
    <div>Timeline</div>
  )
}

export default Timeline