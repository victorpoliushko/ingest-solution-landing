import React from "react";

const ProjectDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <div>ProjectDetails: { id }</div>;
};

export default ProjectDetails;
