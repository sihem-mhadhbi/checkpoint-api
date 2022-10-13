import React from "react";
import UserCard from "./UserCard";
const ListOfUser = ({ users }) => {
  return (
    <section className="card">
      {users.map((user) => (
        <UserCard key={user} user={user} />
      ))}
    </section>
  );
};

export default ListOfUser;
