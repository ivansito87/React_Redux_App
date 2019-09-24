import React, { Component } from 'react';

class AppointmentItem extends Component {

  render() {

    const { available, name, phone, last_name, modal, time } = this.props;

    let statusClass = available ? 'bg-gradient-success' : 'bg-gradient-danger';
    let status = name ? 'Closed' : 'Open';
    let phoneNumber = phone ? phone : '';

    return (
        <tbody onClick={modal}>
        <tr className={statusClass}>
          <th scope="row">{time}</th>
          <td>{name}</td>
          <td>{last_name}</td>
          <td>{phoneNumber}</td>
          <td>{status}</td>
        </tr>
        </tbody>
    );
  }
}

export default AppointmentItem;
