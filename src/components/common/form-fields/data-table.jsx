import React from "react";

export const Column = ({ title, dataSource, dataKey, children }) => {
  return <th scope="col">{title}</th>;
};

export const Row = ({ children }) => {
  return <tr className="">{children}</tr>;
};

export const Cell = ({ data }) => {
  return <td>{data}</td>;
};

export const NoRecordFound = ({ colLength }) => {
  return (
    <tr>
      <td>No records found</td>
    </tr>
  );
};

const DataTable = ({ title, children }) => {
  // children korumali bir prop oldugu icin uzerinde degisiklik yapmaya izin vermez
  // degisiklik yapabilmek icin kopyasini olusturduk

  if (!dataSource) throw new Error("dataSource attribute is required");
  if (!Array.isArray(dataSource))
    throw new Error("dataSource value must be an array");
  if (!dataKey) throw new Error("dataKey attribute is required");

  const columns = [...children];

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>

        <table className="table table-striped ">
          <thead>
            <tr>
              {columns.map((item) => (
                <Column key={item.props.title} {...item.props} />
              ))}
            </tr>
          </thead>
          <tbody>{dataSource.length <= 0 ? <NoRecordFound /> : null}</tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
