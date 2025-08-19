import React from "react";

const RequestCard = ({ user,requestId,reviewRequests}) => {
  if (!user) return null; // safeguard

  console.log(requestId);

  return (
    <div className="card bg-base-300 w-80 shadow-sm my-2">
      <figure>
        <img
          className="w-full h-72 rounded-md"
          src={user.photo || "https://via.placeholder.com/150"}
          alt={user.firstName || "User"}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title my-1">
          {user.firstName + " " + user.lastName}
        </h2>
        <p>{user.about || "No description available."}</p>
        <p>
          Age: {user.age || "N/A"} , Gender: {user.gender || "N/A"}
        </p>
        <p>Skills: {user.skills?.join(", ") || "No skills listed"}</p>
        <div className="card-actions justify-center gap-8">
      <button className="btn btn-primary" onClick={()=>reviewRequests("rejected",requestId)}>Reject</button>
      <button className="btn btn-secondary" onClick={()=>reviewRequests("accepted",requestId)}>Accept</button>
       </div>
     
      </div>
    </div>
  );
};

export default RequestCard;
