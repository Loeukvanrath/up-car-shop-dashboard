import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col,
  } from "reactstrap";
import { _userList } from "resources/UserList/UserList";

const UserList = () => {
    return (
        <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Users Table</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>ID</th>
                        <th>User Name</th>
                        <th>Phone Number</th>
                        <th>Gender</th>
                        <th>Role</th>
                        <th>Created at</th>
                      </tr>
                    </thead>
                    <tbody>
                    {_userList.map((user) => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.phoneNumber}</td>
                        <td>{user.gender}</td>
                        <td>{user.role}</td>
                        <td>{user.createdAt}</td>
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
 
export default UserList;