import TableColumn from "./TableColumn";

const tableColumns = [
  { id: "1", label: "New Pairs" },
  { id: "2", label: "Final Stretch" },
  { id: "3", label: "Migrated" },
];

const DiscoveryTable = () => {
  return (
    <div className="flex-1 border-primaryStroke bg-backgroundSecondary border flex flex-row w-full justify-start items-start  rounded-[8px] sm:rounded-[4px] overflow-hidden">
      {tableColumns.map((column) => (
        <TableColumn key={column.id} label={column.label} />
      ))}
    </div>
  );
};

export default DiscoveryTable;
