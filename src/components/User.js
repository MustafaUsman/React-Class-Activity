import React from 'react';

const User = ({ user }) => {
  const { username, firstName, lastName, school, email, profilePicture, classLevel } = user;
  const textColor = classLevel === "Freshman" ? "green" : "black";

  return (
    <div className="user">
      <img src={profilePicture} alt={username} />
      <h2>{firstName} {lastName}</h2>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>School: </strong>{school}</p>
      <p><strong>Class Level:</strong> <span style={{ color: textColor }}>{classLevel}</span></p>
      <div></div>
    </div>
  );
};

export default User;