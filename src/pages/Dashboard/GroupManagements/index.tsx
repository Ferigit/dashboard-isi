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
import moment from "jalali-moment";

export default function GroupManagements() {
  const classes = useGroupManagementsStyle();
  let location = useLocation();
  const { pathname } = location;
  const [formSchema, setFormSchema] = useState(null);
  const [tableFilters, setTableFilters] = useState<any>({});

  const handleSubmit = (payload: any) => {
    console.log("payload is:", payload);
    // setTableFilters({
    //   ...tableFilters,
    //   name: payload.name,
    //   lastname: payload.lastname,
    //   gender: payload.gender,
    //   itemType: payload.itemType,
    //   group: payload.group,
    //   checkbox: payload.checkbox,
    //   startdate: payload.startdate,
    // });
  };
  const handleSearchSubmit = (payload: any) => {
    console.log("search payload:", payload);
    setTableFilters({
      ...tableFilters,
      name: payload.name,
      lastname: payload.lastname,
      gender: payload.gender === 1 ? "مرد" : payload.gender === 2 ? "زن" : null,
      itemType:
        payload.itemType === 1
          ? "نوع ۱"
          : payload.itemType === 2
          ? "نوع ۲"
          : null,
      group: payload.group,
      checkbox: payload.checkbox,
      startdate: moment(payload.startdate).format("jYYYY-jMM-jDD"),
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
    { type: "reset", title: "بازیابی", icon: <ReplayIcon /> },
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
      {formSchema && (
        <Form formData={formSchema} onFormSubmit={handleSearchSubmit} />
      )}
      <Table
        columnURl={`${pathname}/getGridColumn`}
        dataURl={`${pathname}/getGridData`}
        tableActions={tableActions}
        tableFilters={tableFilters}
        newForm={NewForm}
        setTableFilters={setTableFilters}
      />
    </div>
  );
}
