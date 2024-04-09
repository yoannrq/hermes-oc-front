import React from 'react';
import { Link } from 'react-router-dom';

const Room = ({ groups }) => {
  return (
    <div className="Room">
      <h2>Groupes de discussion</h2>
      <ul>
        {groups.map(group => (
          <li key={group.id}>
            <Link to={`/conversation/${group.id}`}>{group.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Room;
