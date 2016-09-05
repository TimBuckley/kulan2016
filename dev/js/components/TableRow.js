import React from 'react';
import {IndexLink, Link} from 'react-router';
import {Grid, Row, Col, Table} from 'react-bootstrap';

class TableRow extends React.Component {
  render() {
    return (
      <tr className={this.props.data.Ledigt === 'Ja' ? 'available': 'rented'} >
        <td>{this.props.data.Ledigt}</td>
        <td>{this.props.data.Vecka}</td>
        <td>{this.props.data.Datum}</td>
        <td>{this.props.data.Pris}</td>
      </tr>
    );
  }
}

export default TableRow;