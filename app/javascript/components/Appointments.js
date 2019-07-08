// Path : app/javascript/components/Appointments.js
import React from "react";
import PropTypes from "prop-types";
import AppointmentForm from './appointment_form'

class Appointments extends React.Component {
  render () {
    return (
      <div>
      <AppointmentForm />
      {this.props.appointments.map(function(appointment) {
        return (
          <Appointment appointment={appointment}/>
        )
      })}
      </div>
    );
  }
}

Appointments.propTypes = {
  name: PropTypes.string
};

export default Appointments;
