type HeaderCellProps = {
  text: string;
};

const HeaderCell = ({ text }: HeaderCellProps) => (
  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
    {text}
  </th>
);

export default HeaderCell;
