function UserCount(props) {
    return (
      <div className="container mt-3">
        <h2 className="display-6 text-center text-success fw-semibold">
          User Count: {props.count}
        </h2>
      </div>
    );
  }
  
  export default UserCount;