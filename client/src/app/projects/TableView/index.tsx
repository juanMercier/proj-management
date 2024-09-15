import { useAppSelector } from '@/app/redux';
import Header from '@/components/Header';
import PriorityTag from '@/components/PriorityTag';
import UserImage from '@/components/UserImage';
import { dataGridClassNames, dataGridSxStyles } from '@/lib/utils';
import { useGetTasksQuery, User } from '@/state/api';
import { Fade, Tooltip } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Image from 'next/image';
import React from 'react'

type TableProps = {
  id: string;
  setIsModalNewTaskOpen: (isOpen: boolean) => void;
};

const columns: GridColDef[] = [
  {
    field: "title",
    headerName: "Title",
    width: 100,
  },
  {
    field: "description",
    headerName: "Description",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 130,
    renderCell: (params) => (
      <span className='inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-gray-800'>
        {params.value}
      </span>
    )
  },
  {
    field: "priority",
    headerName: "Priority",
    width: 75,
    renderCell: (params) => (
      <div className='py-4 flex justify-center items-center'>
        <PriorityTag priority={params.value} />
      </div>
    )
  },
  {
    field: "tags",
    headerName: "Tags",
    width: 130,
  },
  {
    field: "startDate",
    headerName: "Start Date",
    width: 130,
    renderCell: (params) => (new Date(params.value as string).toLocaleDateString())
  },
  {
    field: "dueDate",
    headerName: "Due Date",
    width: 130,
    renderCell: (params) => (new Date(params.value as string).toLocaleDateString())
  },
  {
    field: "author",
    headerName: "Author",
    width: 75,
    renderCell: (params) => (
      <div className='flex items-center justify-start py-3'>
        <UserImage user={params.value} />
      </div>
    )
  },
  {
    field: "assignee",
    headerName: "Assignee",
    width: 75,
    renderCell: (params) => (
      <div className='flex items-center justify-start py-3'>
        <UserImage user={params.value} />
      </div>
    )
  },
]


const Table = ({ id, setIsModalNewTaskOpen }: TableProps) => {
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  const {
    data: tasks,
    error,
    isLoading,
  } = useGetTasksQuery({ projectId: Number(id) });

  if (isLoading) return <div>Loading...</div>;
  if (error || !tasks) return <div>An error occurred while fetching tasks</div>;

  return (
    <div className="h-[400px] w-full px-4 pb-8 xl:px-6">
      <div className="pt-5">
        <Header
          name="Table"
          buttonComponent={
            <button
              className="flex items-center rounded bg-blue-primary px-3 py-2 text-white hover:bg-blue-600"
              onClick={() => setIsModalNewTaskOpen(true)}
            >
              Add Task
            </button>
          }
          isSmallText
        />
      </div>
      <DataGrid
        rows={tasks || []}
        columns={columns}
        className={dataGridClassNames}
        sx={dataGridSxStyles(isDarkMode)}
      />
    </div>
  );
}

export default Table