function UserList1(props) {
  return (
    <div className="container mt-4 mb-3">
      <h3 className="display-6 text-center fw-semibold text-dark bg-warning">
        List of Users
      </h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.user.map((userObj, index) => (
            <tr key={index}>
              <td>{userObj.username}</td>
              <td>{userObj.email}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => props.onDelete(userObj.username)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList1;
