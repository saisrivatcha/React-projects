function UserList({ user = [] }) {
    return (
      <div className="container mt-4 mb-3">
        <h3 className="display-6 text-center fw-semibold text-dark bg-warning">
          List of Users
        </h3>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Username</th>
              <th>DOB</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {user.map((userObj, index) => (
              <tr key={index}>
                <td>{userObj.username}</td>
                <td>{userObj.birth}</td>
                <td>{userObj.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default UserList;
  