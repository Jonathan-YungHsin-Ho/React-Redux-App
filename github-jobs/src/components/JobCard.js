import React from 'react';

export default function JobCard(props) {
  return (
    <div className='job-card'>
      <a href={props.data.url} target='_blank'>
        <h2 className='job-card-header'>{props.data.title}</h2>
        {(props.data.type = 'Full Time' && <p>FULL TIME</p>)}
        <img alt='logo' src={props.data.company_logo} />
        <h3 className='job-company'>{props.data.company}</h3>
        <h3 className='job-location'>Location: {props.data.location}</h3>
      </a>
    </div>
  );
}
