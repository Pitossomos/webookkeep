import { useState } from "react";

type CurrencyInputProps = {
  initialValue: number;
  isEditing: boolean;
};

const CurrencyInput = ({ initialValue, isEditing }: CurrencyInputProps) => {
  let valueInCents: number = initialValue;
  const [displayValue, setDisplayValue] = useState<string>(
    (initialValue / 100).toLocaleString("pt-BR", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );

  return (
    <input
      type="string"
      className="appearance-none text-right"
      disabled={!isEditing}
      value={displayValue}
      onChange={(e) => {
        setDisplayValue(e.target.value);
      }}
      onBlur={(e) => {
        valueInCents =
          Math.round(parseFloat(e.target.value.replace(",", ".")) * 100) || 0;
        const newDisplayValue = (valueInCents / 100).toLocaleString("pt-BR", {
          style: "decimal",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
        valueInCents = parseInt(newDisplayValue);
        setDisplayValue(newDisplayValue);
      }}
    />
  );
};

export default CurrencyInput;
