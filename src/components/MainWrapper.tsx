import type { ReactNode } from "react";

const MainWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen rounded-lg shadow-md">
      { children }
    </div>
  );
};

export default MainWrapper;