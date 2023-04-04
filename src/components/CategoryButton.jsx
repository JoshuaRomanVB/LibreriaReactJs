import React from 'react';
import '@styles/CategoryButton.scss'
import { useNavigate } from 'react-router-dom';
const CategoryButton = ({ name, image }) => {

  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate(`/categories/${name}`);
  };
  
  return (
    <button type="button" className="btn btn-primary m-2" onClick={handleCategoryClick}>
      <div className="d-flex flex-column align-items-center">
        <img src={image} alt={name} className="mb-2 category-img" />
        <span>{name}</span>
      </div>
    </button>
  );
}  

export default CategoryButton;
