import React from 'react'
import { Task as TaskType } from "@/state/api"
import Image from 'next/image'
import { format } from 'date-fns'
import PriorityTag from '@/components/PriorityTag'
import { Fade, Tooltip } from '@mui/material'

type TaskCardProps = {
    task: TaskType
}

const TaskCard = ({ task }: TaskCardProps) => {
    const taskTagsSplit =
        task.tags
            ? task.tags.split(",")
            : []

    const formattedStartDate =
        task.startDate
            ? format(new Date(task.startDate), "P")
            : ""

    const formattedDueDate =
        task.dueDate
            ? format(new Date(task.dueDate), "P")
            : ""


    return (
        <div className='mb-3 rounded-lg bg-white p-4 shadow dark:bg-dark-secondary dark:text-white'>
            {/* ATTACHMENT */}
            {task.attachments && task.attachments.length > 0 && (
                <div>
                    <strong>Attachments:</strong>
                    <div className="flex flex-wrap pb-1">
                        {task.attachments && task.attachments.length > 0 && (
                            <Image
                                src={`/${task.attachments[0].fileURL}`}
                                alt={task.attachments[0].fileName}
                                width={400}
                                height={200}
                                className='h-auto w-full rounded-t-md'
                            />
                        )}
                    </div>
                </div>
            )}
            {/* TITLE */}
            <p className='pb-1'>
                <strong>Title: </strong>
                {task.title}
            </p>
            {/* DESCRIPTION */}
            {task.description && (
                <p className='pb-1'>
                    <strong>Description: </strong>
                    {task.description}
                </p>
            )}
            {/* STATUS */}
            {task.status && (

                <p className='pb-1'>
                    <strong>Status: </strong>
                    {task.status}
                </p>
            )}
            {/* PRIORITY */}
            {task.priority && (
                <p className='flex flex-row gap-2 pb-1'>
                    <strong>Priority: </strong>
                    <PriorityTag priority={task.priority} />
                </p>
            )}
            {/* TAGS */}
            {task.tags && (
                <p className='flex flex-row gap-2  pb-1'>
                    <strong>Tags: </strong>
                    <div className='flex gap-2'>
                        {taskTagsSplit.map((tag) => (
                            <div key={tag} className='rounded-full bg-blue-100 px-2 py-1 text-xs text-black'>
                                {" "}
                                {tag}
                            </div>
                        ))}
                    </div>
                </p>
            )}
            {/* START DATE */}
            {formattedStartDate && (
                <p className='pb-1'>
                    <strong>Start Date: </strong>
                    {formattedStartDate}
                </p>
            )}
            {/* DUE DATE */}
            {formattedDueDate && (
                <p className='pb-1'>
                    <strong>Due Date: </strong>
                    {formattedDueDate}
                </p>
            )}
            {/* AUTHOR */}
            {task.author && (
                <p className='flex items-center flex-row gap-2  pb-1'>
                    <strong>Author: </strong>
                    <Tooltip
                        title={task.author.username}
                        placement="top"
                        arrow
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 600 }}
                    >
                        <Image
                            key={task.author.userId}
                            src={`/${task.author.profilePictureUrl!}`}
                            alt={task.author.username}
                            width={30}
                            height={30}
                            className='h-8 w-8 rounded-full border-2 border-white object-cover dark:border-dark-secondary'
                        />
                    </Tooltip>
                </p>
            )}
            {/* ASSIGNEE */}
            {task.assignee && (
                <p className='flex items-center flex-row gap-2  pb-1'>
                    <strong>Assignee: </strong>
                    <Tooltip
                        title={task.assignee.username}
                        placement="top"
                        arrow
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 600 }}
                    >
                        <Image
                            key={task.assignee.userId}
                            src={`/${task.assignee.profilePictureUrl!}`}
                            alt={task.assignee.username}
                            width={30}
                            height={30}
                            className='h-8 w-8 rounded-full border-2 border-white object-cover dark:border-dark-secondary'
                        />
                    </Tooltip>
                </p>
            )}
        </div>
    )
}

export default TaskCard