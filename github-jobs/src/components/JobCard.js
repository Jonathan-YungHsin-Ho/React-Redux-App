import React from 'react';

export default function JobCard(props) {
  console.log(props.data);
  return (
    <div className='job-card'>
      <h2>{props.data.company}</h2>
      <img src={props.data.company_logo} />
      <h3>{props.data.title}</h3>
      <h3>{props.data.location}</h3>
    </div>
  );
}
