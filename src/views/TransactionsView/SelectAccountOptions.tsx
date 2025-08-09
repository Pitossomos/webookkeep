import type { Account } from "../../types/types";

type SelectAccountOptionType = {
  accounts: Account[];
};

const SelectAccountOptions = ({ accounts }: SelectAccountOptionType) => {
  return (
    <>
      {accounts.map((account) => (
        <option key={account.name} value={account.name} label={account.name} />
      ))}
    </>
  );
};

export default SelectAccountOptions;
