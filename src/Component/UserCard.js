import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="Card">
      <ul>
        <li>
          <strong>id:</strong>
          {user.id}
        </li>
        <li>
          <strong>Name:</strong>
          {user.name}
        </li>
        <li>
          <strong>UseName</strong>
          {user.username}
        </li>
        <li>
          <strong>Email:</strong>
          {user.email}
        </li>
        <li>
          <strong>Address street:</strong>
          {user.address.street}
        </li>
        <li>
          <strong>Address suite:</strong>
          {user.address.suite}
        </li>
        <li>
          <strong>Address city:</strong>
          {user.address.city}
        </li>
        <li>
          <strong>Address Zipcode:</strong>
          {user.address.zipcode}
        </li>

        <li>
          <strong>Phone:</strong>
          {user.phone}
        </li>
        <li>
          <strong>website:</strong>
          {user.website}
        </li>
        <li>
          <strong>company name:</strong>
          {user.company.name}
        </li>
        <li>
          <strong>company catchPhrase:</strong>
          {user.company.catchPhrase}
        </li>
        <li>
          <strong>company bs: </strong>
          {user.company.bs}
        </li>
      </ul>
    </div>
  );
};

export default UserCard;
