import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AppointmentItem extends Component {

  render() {

    let statusClass = this.props.available ? 'bg-gradient-success' : 'bg-gradient-danger';
    let status = this.props.name ? 'Closed' : 'Open'
    let phone = this.props.phone ? `${this.props.phone}` : '';

    return (
        <tbody onClick={this.props.modal}>
        <tr className={statusClass} >
          <th scope="row">{this.props.time}</th>
          <td>{this.props.name}</td>
          <td>{this.props.last_name}</td>
          <td>{phone}</td>
          <td>{status}</td>
        </tr>
        {/*<tr className="bg-gradient-success">
          <th scope="row">10:00 am</th>
          <td>{""}</td>
          <td>{""}</td>
          <td>{""}</td>
          <td>Open</td>
        </tr>*/}
        </tbody>
    );
  }
}

AppointmentItem.propTypes = {};

export default AppointmentItem;
