import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Modal } from "../../components";
import useTableStyle from "./useTable.style";
import { getGridColumn, getGridData } from "../../services/api";
import TablePagination from "@mui/material/TablePagination";
import {
  GridCsvExportOptions,
  GridCsvGetRowsToExportParams,
  gridPaginatedVisibleSortedGridRowIdsSelector,
  gridSortedRowIdsSelector,
  GridToolbarContainer,
  gridVisibleSortedRowIdsSelector,
  useGridApiContext,
} from "@mui/x-data-grid";

const getRowsFromCurrentPage = ({ apiRef }: GridCsvGetRowsToExportParams) =>
  gridPaginatedVisibleSortedGridRowIdsSelector(apiRef);

const Table = (props: any) => {
  const { tableActions, columnURl, tableFilters, dataURl, newForm } = props;
  const [uiData, setUiData] = useState<any>(null);

  const [openNew, setOpenNew] = useState(false);

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

  const CustomToolbar = () => {
    const apiRef = useGridApiContext();

    const handleExport = (options: GridCsvExportOptions) =>
      apiRef.current.exportDataAsCsv(options);
    const handleExportPDF = (options: GridCsvExportOptions) =>
      apiRef.current.exportDataAsPrint(options);

    const buttonBaseProps: any = {
      color: "primary",
      size: "small",
      // startIcon: <ExportIcon />,
    };
    const handleOnClick = (type: string) => {
      switch (type) {
        case "new": {
          setOpenNew(true);
          // handleExport({ getRowsToExport: getRowsFromCurrentPage });
          break;
        }
        case "exportExcel": {
          handleExport({ getRowsToExport: getRowsFromCurrentPage });
          break;
        }
        case "exportPDF": {
          handleExportPDF({ getRowsToExport: getRowsFromCurrentPage });
          break;
        }
        default:
      }
    };
    return (
      <GridToolbarContainer>
        {tableActions?.map((item: any) => (
          <span className={classes.actionBtn}>
            <Button
              title={item.title}
              icon={item.icon}
              onClick={() => handleOnClick(item.type)}
            />
          </span>
        ))}
      </GridToolbarContainer>
    );
  };

  return (
    <div className={classes.container}>
      <Modal open={openNew} onClose={() => setOpenNew(!openNew)}>
        {props.newForm}
      </Modal>
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
          // {...data}
          // loading={loading}
          components={{ Toolbar: CustomToolbar }}
          // pageSize={10}
          // rowsPerPageOptions={[10]}
          // initialState={{
          //   filter: {
          //     filterModel: {
          //       items: [
          //         { columnField: 'quantity', operatorValue: '>', value: '20000' },
          //       ],
          //     },
          //   },
          // }}
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
