import React from 'react';

export default function JobCard(props) {
  console.log(props.data);
  return (
    <div className='job-card'>
      <h2 className='job-card-header'>{props.data.title}</h2>
      <img src={props.data.company_logo} />
      <h3 className='job-company'>{props.data.company}</h3>
      <h3 className='job-location'>Location: {props.data.location}</h3>
    </div>
  );
}
