import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";

import Usersdata from "./components/Userdata.jsx";
import Usersfiled from "./components/Usersfiled.jsx";

const App = () => {
  const [users, setusers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const registerUser = (data) => {
    if (editIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editIndex] = data;
      setusers(updatedUsers);
      setEditIndex(null);
    } else {
      setusers([...users, data]);
    }
  };

  const deleteUser = (index) => {
    const confirmDelete = window.confirm("Delete this user?");
    if (confirmDelete) {
      const filteredUsers = users.filter((_, i) => i !== index);
      setusers(filteredUsers);
    }
  };

  const editUser = (index) => {
    setEditIndex(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">📱 User Registration App</h2>

      <Usersfiled
        register={registerUser}
        editIndex={editIndex}
        users={users}
      />

      <Usersdata
        userDetails={users}
        deleteUser={deleteUser}
        editUser={editUser}
      />
    </div>
  );
};

export default App;