import React, { Component } from "react";
import apiFetch from "./apiFetch";
import { Spinner, Table } from "react-bootstrap";
export default class tablePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: {},
      loading: true,
    };
  }
  componentDidMount = async () => {
    let tableData = await apiFetch();
    this.setState({ loading: false, tableData: tableData });
  };
  render() {
    let { loading, tableData } = this.state;
    console.log(tableData);

    return (
      <div>
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>POST ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>BODY</th>
              </tr>
            </thead>
            <tbody>
              {tableData.data.map((data) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.body}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    );
  }
}
