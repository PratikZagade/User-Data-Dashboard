import React from "react";

const Usersdata = ({ userDetails, deleteUser, editUser }) => {
  return (
    <div className="row mt-4">
      {userDetails.length === 0 ? (
        <div className="text-center text-muted">No Users Found</div>
      ) : (
        userDetails.map((user, index) => (
          <div className="col-12 col-md-6 col-lg-4 mb-3" key={index}>
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title">
                  👤 {user.fullName}
                </h5>
                <p className="mb-1">
                  <strong>Email:</strong> {user.email}
                </p>
                <p className="mb-1">
                  <strong>Username:</strong> {user.username}
                </p>
                <p className="mb-3">
                  <strong>Password:</strong> ••••••••
                </p>

                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-sm btn-warning"
                    onClick={() => editUser(index)}
                  >
                    <i className="bi bi-pencil"></i> Edit
                  </button>

                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteUser(index)}
                  >
                    <i className="bi bi-trash"></i> Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Usersdata;