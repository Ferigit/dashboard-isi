import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "../../components";
import useTableStyle from "./useTable.style";
import { getGridColumn, getGridData } from "../../services/api";
import TablePagination from "@mui/material/TablePagination";

const Table = (props: any) => {
  const { tableActions, columnURl, tableFilters, dataURl } = props;
  const [uiData, setUiData] = useState<any>(null);

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [pageData, setPageData] = useState<any>({
    pageNum: 0,
    pageSize: 5,
    total: 9,
  });
  const { pageNum, pageSize, total } = pageData;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPageData({ ...pageData, pageNum: newPage });
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log("handleChangeRowsPerPage: ", parseInt(event.target.value, 10));
    // setRowsPerPage(parseInt(event.target.value, 10));

    setPageData({
      ...pageData,
      page: 0,
      pageSize: parseInt(event.target.value, 10),
    });
  };
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

  const fetchGridData = async (tableFilters: any) => {
    try {
      const res: any = await getGridData(dataURl, {
        ...tableFilters,
        pageNum,
        pageSize,
      });

      setRows(res?.data);
    } catch (error: any) {}
  };

  useEffect(() => {
    !!uiData?.url && fetchGridData(tableFilters);
  }, [uiData, tableFilters, pageData]);

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
          rowCount={total}
          componentsProps={{
            pagination: {
              labelRowsPerPage: "تعداد سطر بر صفحه ",
            },
          }}
          hideFooter={true}
          rows={rows ?? []}
          columns={uiData?.columns}
          checkboxSelection
        />
      )}
      <TablePagination
        component="div"
        count={9}
        page={pageNum}
        onPageChange={handleChangePage}
        rowsPerPage={pageSize}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 15]}
      />
    </div>
  );
};

export default Table;
