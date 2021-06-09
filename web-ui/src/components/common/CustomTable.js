import React from "react";
import Table from "./Table";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const CustomTable = (props) => {
  const { editAction, deleteAction, downloadAction, ...rest } = props;
  const actions = [];
  editAction &&
    actions.push({
      icon: <FiEdit className="mb-1 mr-1" />,
      caption: "Edit",
      variant: "outline-primary",
      className: deleteAction ? "mr-2" : "",
      onClick: editAction,
    });
  deleteAction &&
    actions.push({
      icon: <FiTrash2 className="mb-1 mr-1" />,
      caption: "Delete",
      variant: "outline-danger",
      className: downloadAction ? "mr-2" : "",
      onClick: deleteAction,
    });
  downloadAction &&
    actions.push({
      caption: "Download",
      variant: "outline-success",
      onClick: downloadAction,
    });
  return (
    <div>
      <Table {...rest} actions={actions} />
    </div>
  );
};

export default CustomTable;
