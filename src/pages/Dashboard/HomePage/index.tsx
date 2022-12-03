import React, { useState } from "react";
import useHomePageStyle from "./useHomePage.style";
import { Form, Table } from "../../../components";
import cs from "classnames";
import { useNavigate } from "react-router-dom";
export default function HomePage() {
  const classes = useHomePageStyle();
  const navigate = useNavigate();
  const [moreIconAnchorEl, setMoreIconAnchorEl] = useState(null);

  const handleMoreIcon = () => {
    setMoreIconAnchorEl(null);
  };
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
  return (
    <div className={cs(classes.container)}>
      <Form formData={formSchema} onFormSubmit={handleSubmit} />
      <Table />
    </div>
  );
}
