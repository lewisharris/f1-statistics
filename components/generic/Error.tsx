import React, { ReactElement } from "react";

interface ErrorProps {
  refresh: () => void;
}

export default function Error({ refresh }: ErrorProps): ReactElement {
  return (
    <div
      className="m-auto text-center absolute top-[50%] left-[50%] translate-x-[-50%] cursor:pointer"
      onClick={() => refresh()}
    >
      <i className="ri-error-warning-line text-white"></i>
      <div className="text-neutral-400">Data unavailable</div>
      <div className="text-white">Try again</div>
    </div>
  );
}
