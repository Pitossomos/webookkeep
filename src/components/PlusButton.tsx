import { Plus } from "lucide-react";
import type { ReactNode } from "react";

type PlusButtonProps = {
  children: ReactNode,
  onClick?: () => {},
  pageThemeColor?: string,
}

const PlusButton = ({ onClick, children, pageThemeColor = "blue" }: PlusButtonProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <button
        className={`px-6 py-3 bg-${pageThemeColor}-600 text-white rounded-lg shadow-md hover:bg-${pageThemeColor}-700 transition-colors duration-200 flex items-center`}
      >
        <Plus size={20} className="mr-2" />
        { children }
      </button>
    </div>
  );
};

export default PlusButton;
