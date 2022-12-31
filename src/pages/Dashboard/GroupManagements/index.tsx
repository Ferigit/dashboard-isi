import React, { useState, useEffect } from "react";
import useGroupManagementsStyle from "./useGroupManagementsPage.style";
import cs from "classnames";
import { Form, Table } from "../../../components";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ViewWeekIcon from "@mui/icons-material/ViewWeek";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ReplayIcon from "@mui/icons-material/Replay";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { getSearchItems, getGridColumn } from "../../../services/api";
import { useSearchParams, useLocation } from "react-router-dom";

export default function GroupManagements() {
  const classes = useGroupManagementsStyle();
  let location = useLocation();
  const { pathname } = location;
  const [formSchema, setFormSchema] = useState(null);
  const [tableFilters, setTableFilters] = useState<any>({});

  const handleSubmit = (data: any) => {
    console.log("data is:", data);
    setTableFilters({
      username: "test",
      lastname: "test",
    });
  };

  const tableActions = [
    { type: "new", title: "جدید", icon: <AddIcon /> },
    {
      type: "removeSelected",
      title: "حذف موارد انتخابی",
      icon: <DeleteSweepIcon />,
    },
    { type: "exportExcel", title: "خروجی اکسل", icon: <FileDownloadIcon /> },
    { type: "exportPDF", title: "خروجی پی دی اف", icon: <PictureAsPdfIcon /> },
    {
      type: "customizeColumns",
      title: "سفارشی سازی ستون ها",
      icon: <ViewWeekIcon />,
    },
    { type: "advancedSearch", title: "جستجوی پیشرفته", icon: <ZoomInIcon /> },
    { type: "filter", title: "نمایش فیلتر ", icon: <FilterAltIcon /> },
    { type: "recovery", title: "بازیابی", icon: <ReplayIcon /> },
  ];

  const fetchSearchItems = async (url: any) => {
    try {
      const res: any = await getSearchItems(url);
      setFormSchema(res?.data);
    } catch (error) {}
  };

  useEffect(() => {
    !!pathname && fetchSearchItems(pathname);
  }, []);

  const NewForm: any = (
    <div className={classes.newFormContainer}>
      <p className={classes.newFormHeader}>ایجاد جدید</p>
      {formSchema && <Form formData={formSchema} onFormSubmit={handleSubmit} />}
    </div>
  );

  console.log("tableFilters: ", pathname, tableFilters);
  return (
    <div className={cs(classes.container)}>
      {formSchema && <Form formData={formSchema} onFormSubmit={handleSubmit} />}
      <Table
        columnURl={`${pathname}/getGridColumn`}
        dataURl={`${pathname}/getGridData`}
        tableActions={tableActions}
        tableFilters={tableFilters}
        newForm={NewForm}
      />
    </div>
  );
}
