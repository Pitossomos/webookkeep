import { Plus } from "lucide-react";
import type { ReactNode } from "react";

type PlusButtonProps = {
  children: ReactNode,
  onClick?: () => {},
}

const PlusButton = ({ children }: PlusButtonProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <button
        className={`px-6 py-3 bg-blue-600 text-white flex items-center rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200`}
      >
        <Plus size={20} className="mr-2" />
        { children }
      </button>
    </div>
  );
};

export default PlusButton;
