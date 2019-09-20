import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AppointmentItem extends Component {
  constructor(props) {
    super(props);
    // State with constructor
    this.state = {
      name: "Ivan"
    }
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {

  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount() {

  }

  render() {
    return (
        <tbody>
        <tr className="bg-gradient-danger">
          <th scope="row">9:00 am</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>770-688-7959</td>
          <td>Closed</td>
        </tr>
        <tr className="bg-gradient-success">
          <th scope="row">10:00 am</th>
          <td>{""}</td>
          <td>{""}</td>
          <td>{""}</td>
          <td>Open</td>
        </tr>
        </tbody>
    );
  }
}

AppointmentItem.propTypes = {};

export default AppointmentItem;
