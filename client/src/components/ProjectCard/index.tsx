import { Project } from "@/state/api";
import React from "react";

type Props = {
    project: Project;
};

const ProjectCard = ({ project }: Props) => {
    return (
        <div className="rounded border p-4 shadow">
            <h3>
                <strong>Name: </strong>
                {project.name}
            </h3>
            <p>
                <strong>Description: </strong>
                {project.description}
            </p>
            <p>
                <strong>Start Date:</strong>
                {project.startDate}
            </p>
            <p>
                <strong>End Date:</strong>
                {project.endDate}
            </p>
        </div>
    );
};

export default ProjectCard;