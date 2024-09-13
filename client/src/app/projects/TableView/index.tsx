import React from 'react'

type TableProps = {
    id: string;
    setIsModalNewTaskOpen: (isOpen: boolean) => void;
}

const Table = ({id, setIsModalNewTaskOpen}: TableProps) => {
  return (
    <div>Table</div>
  )
}

export default Table