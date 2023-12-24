import React from "react";

const Tab = () => {
  const memberList: string[] = ["Irene", "Seulgi", "Wendy", "Joy", "Yeri"];
  return (
    <div className="bg-red-300 w-[500px] mx-auto mb-5 p-[10px] flex justify-between">
      {memberList.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
};

export default Tab;
