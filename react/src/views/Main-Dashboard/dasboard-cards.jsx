import React from 'react';

const Dashboard_cards = ({ data, employees, fetchallemp, changeRoute }) => {
  if (!data || data.length === 0) {
    return <p>No departments available.</p>;  // Show a message if data is empty
  }
const clickEvent=(name)=>{
  changeRoute()
  fetchallemp(name)
}
  return (
    <div className="row mt-4">
      {data.map((item, index) => (
        <div key={index} className="col-2 mx-2 mt-2 bg-red-500 card-dashboard"       onClick={() => clickEvent(item.name)}>
          <p 
            className='card-dashboard-dept-text mb-0' 
      
          >
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard_cards;
