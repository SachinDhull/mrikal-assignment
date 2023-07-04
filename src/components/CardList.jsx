import React, { useState } from "react";
import Card from "./Card";
import { data } from "../utils/Constant";

const CardList = () => {
  const [items, setItems] = useState(data);
  const [sortedItems, setSortedItems] = useState(items);

// function to group data by category
  const groupByyCategory = (category) => {
    const sortedItems = [...items].filter((item) => item.category === category);
    setSortedItems(sortedItems);
  };
// function to sort data alphabetically
  const handleSortAlphabetically = () => {
    const sortedItems = [...items].sort((a, b) => (a.title > b.title ? 1 : -1));
    console.log(sortedItems.map((item) => item.title));
    setSortedItems(sortedItems);
  };
  
  const reset = () => {
    setSortedItems(items);
  };
  // function to filter data by selected date
  const handleDateChange = (e) => {
    console.log(e.target.value);
    const sortedItems = [...items].filter(
      (item) => item.date === e.target.value
    );
    setSortedItems(sortedItems);
  };
  return (
    <div className="container">

      <div className="btn-wrapper filters">
          <h2>Category Filters : </h2>
         <button className="button-primary"  onClick={() => groupByyCategory("Appliances")}>Appliances</button>
          <button className="button-primary" onClick={() => groupByyCategory("Furniture")}>Furniture</button>
          <button className="button-primary" onClick={() => groupByyCategory("Electronics")}>
            Electronics
          </button>
      </div>
      <div className="btn-wrapper">
       <h2>Other Filters : </h2>
       <button className="button-primary" onClick={handleSortAlphabetically}>Sort Alphabetically</button>

      </div>

      <div className="btn-wrapper m-top">
        <input type="date" onChange={handleDateChange} className="first-child-button"></input>
         <button className="button-primary-sm" onClick={reset}>Reset</button>
      </div>
     
    
      <div className="card-list"> 
        {sortedItems.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          date={item.date}
          category={item.category}
        />
      ))}
      </div>
      
    </div>
  );
};
export default CardList;
