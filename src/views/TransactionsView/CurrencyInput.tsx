import { useState } from "react";

type CurrencyInputProps = {
  initialValue: number;
  isEditing: boolean;
};

const CurrencyInput = ({ initialValue, isEditing }: CurrencyInputProps) => {
  const [value, setValue] = useState(initialValue);

  return (
    <input
      type="number"
      inputMode="decimal"
      className="border-b-2 disabled:border-white focus:outline-none focus:border-gray-300 text-right"
      disabled={!isEditing}
      value={value}
      onChange={(e) => setValue(Number(e.target.value))}
      onBlur={(e) => setValue(Math.floor(Number(e.target.value) * 100) / 100)}
    />
  );
};

export default CurrencyInput;
