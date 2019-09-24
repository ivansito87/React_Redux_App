import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AppointmentItem extends Component {

  render() {

    const { available, name, phone } = this.props;

    let statusClass = available ? 'bg-gradient-success' : 'bg-gradient-danger';
    let status = name ? 'Closed' : 'Open';
    let phoneNumber = phone ? `${this.props.phone}` : '';

    return (
        <tbody onClick={this.props.modal}>
        <tr className={statusClass}>
          <th scope="row">{this.props.time}</th>
          <td>{this.props.name}</td>
          <td>{this.props.last_name}</td>
          <td>{phoneNumber}</td>
          <td>{status}</td>
        </tr>
        </tbody>
    );
  }
}

AppointmentItem.propTypes = {};

export default AppointmentItem;
