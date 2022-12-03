import React, { useState } from "react";
import useGroupManagementsStyle from "./useGroupManagementsPage.style";
// import { Card, Menu, MenuItem, Carousel } from "../../../components";
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

export default function GroupManagements() {
  const classes = useGroupManagementsStyle();
  const navigate = useNavigate();
  const [moreIconAnchorEl, setMoreIconAnchorEl] = useState(null);

  const formSchema = {
    onCreate: {
      url: "/login",
      method: "POST",
    },
    onUpdate: {},
    sections: [
      {
        name: "privateInformationSection",
        fields: [
          {
            label: "نام",
            name: "username",
            placeholder: "Enter the user name",
            type: "text",
            initialValue: "",
            defaultValue: null,
            grid: { xs: 3 },
          },
          {
            label: "نام خانوادگی ",
            name: "password",
            placeholder: "Enter the password ",
            type: "password",
            initialValue: "",
            defaultValue: null,
            grid: { xs: 3 },
          },
          {
            label: "انتخاب نوع ",
            name: "type",
            placeholder: "Enter the password ",
            type: "dropdown",
            initialValue: "",
            defaultValue: null,
            options: [{ label: "نوع ۱", value: "نوع ۱" }],
            onChange: () => {},
            grid: { xs: 3 },
          },
        ],
      },
    ],
  };
  const handleSubmit = () => {};

  const tableActions = [
    { type: "news", title: "جدید", icon: <AddIcon /> },
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
  return (
    <div className={cs(classes.container)}>
      <Form formData={formSchema} onFormSubmit={handleSubmit} />
      <Table tableActions={tableActions} />
    </div>
  );
}
