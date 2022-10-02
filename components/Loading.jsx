import React from "react";

export default function Loading() {
  return (
    <div className="fixed w-100 h-100 text-center loading" style={{background:" #0008", color:"white", top:"0"}}>
      <svg width={205} height={250} viewBox="0 0 40 50">
        <polygon strokeWidth="1" stroke="#fff" fill="none" points="20,1 40,40 1, 40"></polygon>
        <text fill="#fff" x="5"  y="47">Loading</text>
      </svg>
    </div>
  );
}
