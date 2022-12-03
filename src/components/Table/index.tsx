import React, { useState, useEffect } from "react";
// import { DataGrid, GridRowsProp } from "@mui/x-data-grid";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { Button } from "../../components";
import useTableStyle from "./useTable.style";

const Table = (props: any) => {
  const { tableActions } = props;
  const classes = useTableStyle();
  const rows: GridRowsProp = [
    { id: 1, col1: "آینم ۱", col2: "آیتم ۱" },
    { id: 2, col1: "آیتم ۲ ", col2: "آیتم ۱ " },
    { id: 3, col1: "آیتم ۳ ", col2: "آیتم ۱ " },
  ];

  const columns: GridColDef[] = [
    { field: "col1", headerName: "نام ", width: 150 },
    { field: "col2", headerName: "نام خانوادگی", width: 150 },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.actionContainer}>
        {tableActions.map((item: any) => (
          <span className={classes.actionBtn}>
            <Button title={item.title} icon={item.icon} />
          </span>
        ))}
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        componentsProps={{
          pagination: {
            labelRowsPerPage: "تعداد سطر بر صفحه ",
          },
        }}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default Table;
