import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "../../components";
import useTableStyle from "./useTable.style";
import { getGridColumn, getGridData } from "../../services/api";

const Table = (props: any) => {
  const { tableActions, columnURl } = props;
  const [uiData, setUiData] = useState<any>(null);
  const [rows, setRows] = useState<any>(null);

  const classes = useTableStyle();

  const fetchGridColumn = async () => {
    try {
      const res: any = await getGridColumn(columnURl);

      setUiData(res?.data);
    } catch (error) {}
  };

  useEffect(() => {
    !!columnURl && fetchGridColumn();
  }, []);

  const fetchGridData = async () => {
    try {
      const res: any = await getGridData(columnURl);
      setRows(res?.data);
    } catch (error) {}
  };

  useEffect(() => {
    !!uiData?.url && fetchGridData();
  }, [uiData]);

  return (
    <div className={classes.container}>
      <div className={classes.actionContainer}>
        {tableActions?.map((item: any) => (
          <span className={classes.actionBtn}>
            <Button title={item.title} icon={item.icon} />
          </span>
        ))}
      </div>
      {uiData && rows && (
        <DataGrid
          rows={rows.rows ?? []}
          columns={uiData?.columns}
          componentsProps={{
            pagination: {
              labelRowsPerPage: "تعداد سطر بر صفحه ",
            },
          }}
          checkboxSelection
          disableSelectionOnClick
        />
      )}
    </div>
  );
};

export default Table;
