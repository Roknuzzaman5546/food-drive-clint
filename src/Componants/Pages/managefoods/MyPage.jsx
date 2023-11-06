import React from "react";
import { useTable } from "react-table";

const FoodTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Food Name",
        accessor: "foodname",
      },
      {
        Header: "Quantity",
        accessor: "foodquantity",
      },
      {
        Header: "Pickup Location",
        accessor: "pickuplocation",
      },
      {
        Header: "Expired Time",
        accessor: "expiredtime",
      },
      {
        Header: "Status",
        accessor: "status",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default FoodTable;
