import React, { useState } from 'react';

const AuthorItem = ({ author }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(!isHovered)}
    >
      <img src={author.imageUrl} className="card-img-top" alt={`${author.name} profile`} />
      <div className="card-body">
        <h5 className="card-title">{author.name}</h5>
        <p className="card-text">{isHovered ? author.bio : author.description}</p>
      </div>
    </div>
  );
};

export default AuthorItem;
