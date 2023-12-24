"use client";
import React, { useState } from "react";
import { app } from "../api/firebase";

const AddForm = () => {
  const [member, setMember] = useState("Irene");
  const memberList = ["Irene", "Seulgi", "Wendy", "Joy", "Yeri"];
  const onSubmitHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
  };
  return (
    <>
      <form className="bg-red-300 w-[500px] h-[230px] mx-auto p-[20px]">
        <div className="mb-10">
          <label htmlFor="nickname">Nickname</label>
          <input
            id="nickname"
            className="float-end w-4/5 p-2"
            placeholder="Put your Nickname"
          />
        </div>
        <div className="mb-10">
          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            className="float-end w-4/5 resize-none p-2"
            placeholder="Comment ..."
          />
        </div>
        <div className="pt-7">
          <select onChange={(e) => setMember(e.target.value)}>
            {memberList.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <button
            className="float-end border-2 border-red-50 px-3 py-1"
            onClick={(e) => onSubmitHandler(e)}
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default AddForm;
