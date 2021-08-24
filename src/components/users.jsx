import React, { useImperativeHandle, useState } from "react";
import api from "../API";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const table = document.querySelector(".table");

  const handleDelete = (userId) => {
    users.length > 0
      ? setUsers(users.filter((user) => user._id !== userId))
      : table.remove();
  };

  const renderPhase = (number) => {
    if (number === 0)
      return (table.textContent = ""), "Никто с тобой не тусанет";
    if (number === 1) return `${number} человек тусанет с тобой сегодня`;
    if (
      number.toString() === "2" ||
      number.toString() === "3" ||
      number.toString() === "4"
    )
      return `${number} человека тусанут с тобой сегодня`;
    return `${number} человек тусанут с тобой сегодня`;
  };

  let classesOfTitle = "badge bg-";
  classesOfTitle += users.length === 0 ? "danger" : "primary";

  let classesOfQualities = "badge m-2 bg-";

  return (
    <>
      <h2>
        <span className={classesOfTitle}>{renderPhase(users.length)}</span>
      </h2>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  {user.qualities.map((quality) => (
                    <span
                      key={quality._id}
                      className={classesOfQualities + quality.color}
                    >
                      {quality.name}
                    </span>
                  ))}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate} /5</td>
                <td>
                  <button
                    className="badge bg-danger"
                    onClick={() => handleDelete(user._id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Users;
