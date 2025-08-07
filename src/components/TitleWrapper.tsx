import type { ReactNode } from "react";

const TitleWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-3xl font-extrabold mb-6 text-gray-900 flex items-center">
      {children}
    </div>
  );
};

export default TitleWrapper;
