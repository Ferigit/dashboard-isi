import Api from "../index";
import openNotification from "../../helpers/Notification";

//sample data
const menu = [
  {
    icon: "LocalLibraryOutlinedIcon",
    title: "مدیریت امنیت",
    items: [
      {
        icon: "TrendingUpOutlinedIcon",

        title: "نقش ها",
        items: [
          {
            icon: "DescriptionOutlinedIcon",

            title: "مدیریت گروه ها ",
            to: "/group",
          },
          {
            title: "مدیریت نقش ها ",
            to: "/rules",
          },
        ],
      },
    ],
  },
];
export const getMenu = async () => {
  try {
    const res = await Api.get(`/getMenuList`);

    return { data: menu }; //res.data;
  } catch (error) {
    return { data: menu }; //res.data;
  }
};

//sample data
const formSchema = {
  onCreate: {
    url: "/login",
    method: "POST",
  },
  form: {
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
};
export const getSearchItems = async (url: string) => {
  try {
    const res = await Api.get(`/${url}/searchItems`);

    console.log("searchItems: ", res);
    return { data: formSchema }; //res.data;
  } catch (error) {
    return { data: formSchema }; //res.data;
  }
};

//sample data
const gridColumns = {
  url: "/group/getGridColumn",
  columns: [
    { field: "col1", headerName: "نام ", width: 150 },
    { field: "col2", headerName: "نام خانوادگی", width: 150 },
  ],
};
export const getGridColumn = async (url: string) => {
  try {
    const res = await Api.get(`/${url}/getGridColumn`);
    return { data: gridColumns }; //res.data;
  } catch (error) {
    return { data: gridColumns }; //res.data;
  }
};

//sample data
const gridData = {
  pageSize: 10,
  pageNumber: 1,
  rows: [
    { id: 1, col1: "آینم ۱", col2: "آیتم ۱" },
    { id: 2, col1: "آیتم ۲ ", col2: "آیتم ۱ " },
    { id: 3, col1: "آیتم ۳ ", col2: "آیتم ۱ " },
  ],
};

export const getGridData = async (url: string) => {
  try {
    const res = await Api.get(`/${url}/getGridData`);
    return { data: gridData }; //res.data;
  } catch (error) {
    return { data: gridData }; //res.data;
  }
};
