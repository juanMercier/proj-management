import { Task } from '@/state/api'
import React from 'react'

type Props = {
    priority: Task["priority"]
}

const PriorityTag = ({ priority }: Props) => {
    return (

        <div
            className={`rounded-full px-2 py-1 text-xs font-semibold 
        ${priority === "Urgent"
                    ? "bg-red-200 text-red-700"
                    : priority === "High"
                        ? "bg-yellow-200 text-yellow-700"
                        : priority === "Medium"
                            ? "bg-green-200 text-green-700"
                            : priority === "Low"
                                ? "bg-blue-200 text-blue-700"
                                : "bg-gray-200 text-gray-700"
                }`}
        >
            {priority}
        </div>
    )
}

export default PriorityTag