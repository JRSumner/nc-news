import React, { useState } from "react";
import { patchArticleVote } from "../api/api";

export default function Voter({ id, apiVotes }) {
  const [voterVotes, setVoterVotes] = useState(0);

  const handleVote = (vote) => {
    setVoterVotes((current) => {
      return current + vote;
    });
    patchArticleVote(id, vote);
  };

  return (
    <div className="voter">
      <button
        disabled={voterVotes === 1}
        onClick={() => {
          handleVote(1);
        }}
      >
        👍
      </button>

      {apiVotes + voterVotes}

      <button
        disabled={voterVotes === -1}
        onClick={() => {
          handleVote(-1);
        }}
      >
        👎
      </button>
    </div>
  );
}
