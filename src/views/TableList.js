/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function Tables() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">
                  <div className="d-flex justify-content-between">
                    <h4>Car Table</h4>
                    <button className="btn btn-info" style={{ "cursor": "pointer" }}>Add Product</button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>ID</th>
                      <th>Make</th>
                      <th>Model</th>
                      <th>Color </th>
                      <th>Year</th>
                      <th>Price</th>
                      <th style={{ 'width': '200px' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>BMW</td>
                      <td>M5</td>
                      <td>Black</td>
                      <td>2021</td>
                      <td>$106,738</td>
                      <td style={{ 'width': '200px' }}>
                        <button type="button" className="btn btn-info btn-sm mr-1">Update</button>
                        <button type="button" className="btn btn-sm">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <th>1</th>
                      <td>BMW</td>
                      <td>M5</td>
                      <td>Black</td>
                      <td>2021</td>
                      <td>$106,738</td>
                      <td style={{ 'width': '200px' }}>
                        <button type="button" className="btn btn-info btn-sm mr-1">Update</button>
                        <button type="button" className="btn btn-sm">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <th>1</th>
                      <td>BMW</td>
                      <td>M5</td>
                      <td>Black</td>
                      <td>2021</td>
                      <td>$106,738</td>
                      <td style={{ 'width': '200px' }}>
                        <button type="button" className="btn btn-info btn-sm mr-1">Update</button>
                        <button type="button" className="btn btn-sm">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <th>1</th>
                      <td>BMW</td>
                      <td>M5</td>
                      <td>Black</td>
                      <td>2021</td>
                      <td>$106,738</td>
                      <td style={{ 'width': '200px' }}>
                        <button type="button" className="btn btn-info btn-sm mr-1">Update</button>
                        <button type="button" className="btn btn-sm">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <th>1</th>
                      <td>BMW</td>
                      <td>M5</td>
                      <td>Black</td>
                      <td>2021</td>
                      <td>$106,738</td>
                      <td style={{ 'width': '200px' }}>
                        <button type="button" className="btn btn-info btn-sm mr-1">Update</button>
                        <button type="button" className="btn btn-sm">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <th>1</th>
                      <td>BMW</td>
                      <td>M5</td>
                      <td>Black</td>
                      <td>2021</td>
                      <td>$106,738</td>
                      <td style={{ 'width': '200px' }}>
                        <button type="button" className="btn btn-info btn-sm mr-1">Update</button>
                        <button type="button" className="btn btn-sm">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <th>1</th>
                      <td>BMW</td>
                      <td>M5</td>
                      <td>Black</td>
                      <td>2021</td>
                      <td>$106,738</td>
                      <td style={{ 'width': '200px' }}>
                        <button type="button" className="btn btn-info btn-sm mr-1">Update</button>
                        <button type="button" className="btn btn-sm">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <th>1</th>
                      <td>BMW</td>
                      <td>M5</td>
                      <td>Black</td>
                      <td>2021</td>
                      <td>$106,738</td>
                      <td style={{ 'width': '200px' }}>
                        <button type="button" className="btn btn-info btn-sm mr-1">Update</button>
                        <button type="button" className="btn btn-sm">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <th>1</th>
                      <td>BMW</td>
                      <td>M5</td>
                      <td>Black</td>
                      <td>2021</td>
                      <td>$106,738</td>
                      <td style={{ 'width': '200px' }}>
                        <button type="button" className="btn btn-info btn-sm mr-1">Update</button>
                        <button type="button" className="btn btn-sm">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <th>1</th>
                      <td>BMW</td>
                      <td>M5</td>
                      <td>Black</td>
                      <td>2021</td>
                      <td>$106,738</td>
                      <td style={{ 'width': '200px' }}>
                        <button type="button" className="btn btn-info btn-sm mr-1">Update</button>
                        <button type="button" className="btn btn-sm">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <th>1</th>
                      <td>BMW</td>
                      <td>M5</td>
                      <td>Black</td>
                      <td>2021</td>
                      <td>$106,738</td>
                      <td style={{ 'width': '200px' }}>
                        <button type="button" className="btn btn-info btn-sm mr-1">Update</button>
                        <button type="button" className="btn btn-sm">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <th>1</th>
                      <td>BMW</td>
                      <td>M5</td>
                      <td>Black</td>
                      <td>2021</td>
                      <td>$106,738</td>
                      <td style={{ 'width': '200px' }}>
                        <button type="button" className="btn btn-info btn-sm mr-1">Update</button>
                        <button type="button" className="btn btn-sm">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <th>1</th>
                      <td>BMW</td>
                      <td>M5</td>
                      <td>Black</td>
                      <td>2021</td>
                      <td>$106,738</td>
                      <td style={{ 'width': '200px' }}>
                        <button type="button" className="btn btn-info btn-sm mr-1">Update</button>
                        <button type="button" className="btn btn-sm">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <th>1</th>
                      <td>BMW</td>
                      <td>M5</td>
                      <td>Black</td>
                      <td>2021</td>
                      <td>$106,738</td>
                      <td style={{ 'width': '200px' }}>
                        <button type="button" className="btn btn-info btn-sm mr-1">Update</button>
                        <button type="button" className="btn btn-sm">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
