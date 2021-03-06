import React from 'react';

import JobCard from './JobCard';

export default function Jobs(props) {
  return (
    <div className='job-card-wrapper'>
      {props.data.map(job => (
        <JobCard key={job.id} data={job} />
      ))}
    </div>
  );
}
