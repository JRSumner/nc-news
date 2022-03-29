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
    <section className="voter-component">
      <button
        className="up-vote"
        disabled={voterVotes === 1}
        onClick={() => {
          handleVote(1);
        }}
      >
        👍
      </button>

      {apiVotes + voterVotes}

      <button
        className="down-vote"
        disabled={voterVotes === -1}
        onClick={() => {
          handleVote(-1);
        }}
      >
        👎
      </button>
    </section>
  );
}
