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

function Report() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">
                  <div className="d-flex justify-content-between">
                    <h4>Reports Table</h4>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>ID</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Discounted </th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>BMW</td>
                      <td>10%</td>
                      <td>$106,738</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <th>1</th>
                      <td>BMW</td>
                      <td>10%</td>
                      <td>$106,738</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <th>1</th>
                      <td>BMW</td>
                      <td>10%</td>
                      <td>$106,738</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <th>1</th>
                      <td>BMW</td>
                      <td>10%</td>
                      <td>$106,738</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <th>1</th>
                      <td>BMW</td>
                      <td>10%</td>
                      <td>$106,738</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <th>1</th>
                      <td>BMW</td>
                      <td>10%</td>
                      <td>$106,738</td>
                      <td>10</td>
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

export default Report;
