import React, { useEffect } from "react";
import { connect } from "react-redux";
import { deleteDriver, fetchDrivers } from "../../redux/actions/driverActions";
import CustomTable from "../common/CustomTable";

const DriverList = (props) => {
  const { fetchDrivers } = props;
  useEffect(() => {
    fetchDrivers();
  }, [fetchDrivers]);

  const drivers = props.drivers.sort((a, b) =>
    a.id < b.id ? -1 : a.id === b.id ? 0 : 1
  );

  return (
    <div>
      <CustomTable
        data={drivers}
        headers={["Id", "Name", "License Number", "Mobile"]}
        fields={["id", "name", "licenseNumber", "mobile"]}
        editAction={props.setSelectedDriver}
        deleteAction={props.deleteDriver}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    drivers: state.driver.items,
  };
};
export default connect(mapStateToProps, { deleteDriver, fetchDrivers })(
  DriverList
);
