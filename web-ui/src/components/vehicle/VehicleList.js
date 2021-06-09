import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { connect } from "react-redux";
import {
  deleteVehicle,
  fetchVehicles,
} from "../../redux/actions/vehicleActions";
import CustomTable from "../common/CustomTable";

const VehicleList = (props) => {
  const { fetchVehicles } = props;
  useEffect(() => {
    fetchVehicles();
  }, [fetchVehicles]);
  const vehicles = props.vehicles.sort((a, b) =>
    a.id < b.id ? -1 : a.id === b.id ? 0 : 1
  );

  return (
    <di>
      <CustomTable
        data={vehicles}
        headers={["Id", "Name", "Registration"]}
        fields={["id", "name", "registration"]}
        editAction={props.onEdit}
        deleteAction={props.deleteVehicle}
      />
    </di>
  );
};

const mapStateToProps = (state) => {
  return {
    vehicles: state.vehicle.items,
  };
};

export default connect(mapStateToProps, { deleteVehicle, fetchVehicles })(
  VehicleList
);
