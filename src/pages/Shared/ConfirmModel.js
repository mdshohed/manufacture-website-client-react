import React from 'react';

const ConfirmModel = ({setOpenModel}) => {
  return (
    <div className="card w-96 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Are you sure!</h2>
        <p>You want to delete this Products.</p>
        <div className="card-actions justify-end">
          <button  className="btn btn-primary">Accept</button>
          <button  className="btn btn-ghost">Deny</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModel;