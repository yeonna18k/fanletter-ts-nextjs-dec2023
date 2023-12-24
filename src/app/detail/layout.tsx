import React from "react";

const layout: React.FC<React.ReactNode> = (props: React.ReactNode) => {
  return (
    <div>
      <div>Layout</div>
      {props.children}
    </div>
  );
};

export default layout;
