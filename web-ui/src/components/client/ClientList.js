import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { deleteClient, fetchClients } from "../../redux/actions/clientActions";
import CustomTable from "../common/CustomTable";

const ClientList = (props) => {
  const { fetchClients } = props;
  useEffect(() => fetchClients(), [fetchClients]);
  const clients = props.clients.sort((a, b) =>
    a.id < b.id ? -1 : a.id === b.id ? 0 : 1
  );
  return (
    <div>
      <CustomTable
        data={clients}
        headers={["Id", "Name", "PAN Number", "Address", "Mobile"]}
        fields={["id", "name", "pan", "address", "mobile"]}
        editAction={props.setSelectedClient}
        deleteAction={props.deleteClient}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    loading: state.client.loading,
    clients: state.client.items,
  };
};
export default connect(mapStateToProps, { deleteClient, fetchClients })(
  ClientList
);
