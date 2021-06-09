import React from "react";
import { Table as BoostrapTable, Button } from "react-bootstrap";

const Table = (props) => {
  let { data, headers, fields, actions } = props;
  const tableHeaders = (
    <tr>
      {headers.map((header) => (
        <th>{header}</th>
      ))}
      {actions && <th>Actions</th>}
    </tr>
  );
  const tableRows = data.map((row) => (
    <tr>
      {fields.map((field) => (
        <td>{row[field]}</td>
      ))}
      {actions && (
        <td>
          {actions.map((action) => (
            <>
              <Button
                variant={action.variant}
                className={action.className}
                onClick={() => action.onClick(row)}
              >
                {action.icon}
                {action.caption}
              </Button>
            </>
          ))}
        </td>
      )}
    </tr>
  ));

  return (
    <>
      <BoostrapTable striped bordered hover responsive>
        <thead>{tableHeaders}</thead>
        <tbody>{tableRows}</tbody>
      </BoostrapTable>
    </>
  );
};

export default Table;
