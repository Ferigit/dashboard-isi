import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import React from "react";

export const menu = [
  {
    icon: <LocalLibraryOutlinedIcon />,
    title: "مدیریت امنیت",
    items: [
      {
        icon: <TrendingUpOutlinedIcon />,

        title: "نقش ها",
        items: [
          {
            icon: <DescriptionOutlinedIcon />,

            title: "مدیریت گروه ها ",
            to: "/group-managements",
          },
          {
            title: "مدیریت نقش ها ",
            to: "/group-managements",
          },
        ],
      },
    ],
  },
];
