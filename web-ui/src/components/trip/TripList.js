import React, { useEffect } from "react";
import { connect } from "react-redux";
import { deleteTrip } from "../../redux/actions/tripActions";
import { Button, Table } from "react-bootstrap";
import { getFormattedDate } from "../common/DateUtils";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const TripList = (props) => {
  useEffect(() => {
    if (props.handleChange) {
      props.handleChange({ target: { name: props.name, value: props.trips } });
    }
  }, [props.trips]);
  const trips =
    props.trips &&
    props.trips
      .sort((a, b) => (a.id < b.id ? -1 : a.id === b.id ? 0 : 1))
      .map((item, index) => (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{getFormattedDate(new Date(item.tripDate))}</td>
          <td>{item.shift}</td>
          <td>{item.vehicle.name}</td>
          <td>{item.vehicle.registration}</td>
          <td>{item.driver.name}</td>
          <td>{item.client.name}</td>
          {/* <td>{item.fromLocation}</td>
          <td>{item.toLocation}</td>
          <td>{item.startKm}</td>
          <td>{item.endKm}</td> */}
          <td>{item.cost}</td>
          {!props.disableActions && (
            <td>
              <Button
                variant="outline-primary"
                className="mr-2"
                onClick={() => props.onEdit(item)}
              >
                <FiEdit className="mb-1 mr-1" />
                Edit
              </Button>
              <Button
                variant="outline-danger"
                onClick={() => props.deleteTrip(item)}
              >
                <FiTrash2 className="mb-1 mr-1" />
                Delete
              </Button>
            </td>
          )}
        </tr>
      ));
  return (
    <div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Id</th>
            <th>Trip Date</th>
            <th>Shift</th>
            <th>Vehicle Name</th>
            <th>Vehicle Registration</th>
            <th>Driver</th>
            <th>Client</th>
            {/* <th>From</th>
            <th>To</th>
            <th>Start Km</th>
            <th>End Km</th> */}
            <th>Cost</th>
            {!props.disableActions && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>{trips}</tbody>
      </Table>
    </div>
  );
};

export default connect(null, { deleteTrip })(TripList);
