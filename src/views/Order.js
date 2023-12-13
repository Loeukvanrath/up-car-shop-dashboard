import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col } from "reactstrap";

function Order() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">
                  <div className="d-flex justify-content-between">
                    <h4>Orders Table</h4>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>ID</th>
                      <th>#</th>
                      <th>Customer</th>
                      <th>Product Name</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 4 }, (_, index) => (
                      <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <th>#001</th>
                        <td>Vanrath</td>
                        <td>Audi QR7</td>
                        <td>11/12/2023</td>
                        <td style={{ width: "200px" }}>
                          <i className="fas fa-check-circle text-success"></i>
                        </td>
                        <td>$106,738</td>
                      </tr>
                    ))}
                    {Array.from({ length: 2 }, (_, index) => (
                      <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <th>#001</th>
                        <td>Sengheang</td>
                        <td>BMW M5</td>
                        <td>11/12/2023</td>
                        <td style={{ width: "200px" }}>
                            <i class="fa-solid fa-rotate-left text-secondary"></i>
                        </td>
                        <td>$206,738</td>
                      </tr>
                    ))}
                    {Array.from({ length: 2 }, (_, index) => (
                        <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <th>#001</th>
                        <td>Thaileang</td>
                        <td>BMW M5</td>
                        <td>11/12/2023</td>
                        <td style={{ width: "200px" }}>
                            <i class="fa-solid fa-circle-exclamation text-danger"></i>
                        </td>
                        <td>$206,738</td>
                      </tr>
                    ))}
                    {Array.from({ length: 2 }, (_, index) => (
                      <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <th>#001</th>
                        <td>Socheat</td>
                        <td>BMW M5</td>
                        <td>11/12/2023</td>
                        <td style={{ width: "200px" }}>
                            <i class="fa-solid fa-rotate-left text-secondary"></i>
                        </td>
                        <td>$206,738</td>
                      </tr>
                    ))}
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

export default Order;
