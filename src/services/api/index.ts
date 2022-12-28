import Api from "../index";
import openNotification from "../../helpers/Notification";

//sample data
const menu = [
  {
    icon: "LocalLibraryOutlinedIcon",
    title: "مدیریت امنیت",
    items: [
      {
        icon: "Favorite",

        title: "زیر مدیریت ها",
        items: [
          {
            icon: "DescriptionOutlinedIcon",

            title: "مدیریت گروه ها ",
            to: "/group",
            breadCrump: "مدیریت امنیت / زیر مدیریت / مدیریت گروه ها",
          },
          {
            title: "مدیریت نقش ها ",
            to: "/rules",
            breadCrump: "مدیریت امنیت / زیر مدیریت / مدیریت نقش ها",
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
    url: "/group/search",
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
        label: "جنسیت",
        name: "gender",
        placeholder: "جنسیت را وارد کنید",
        type: "dropdown",
        initialValue: "",
        defaultValue: null,
        options: [
          { label: "مرد", value: 1 },
          { label: "زن", value: 2 },
        ],
        onChange: () => {},
        grid: { xs: 3 },
      },
      {
        label: "انتخاب نوع ",
        name: "type",
        placeholder: "Enter the password ",
        type: "autocomplete",
        initialValue: "",
        defaultValue: null,
        options: [{ label: "نوع ۱", value: "نوع ۱" }],
        onChange: () => {},
        grid: { xs: 3 },
      },
      {
        label: "تاریخ ",
        name: "calendar",
        placeholder: "Enter the date ",
        type: "calendar",
        initialValue: "",
        defaultValue: null,
        grid: { xs: 3 },
      },
      {
        label: "لیست ",
        name: "list",
        placeholder: "Enter the date ",
        type: "radiogroup",
        inputType: "checkbox",
        // type: "radiogroup",
        // inputType:"radio",
        initialValue: "",
        defaultValue: null,
        grid: { xs: 3 },
        options: [
          { label: "Female", value: "female" },
          { label: "Male", value: "male" },
          { label: "Other", value: "other" },
        ],
      },
      {
        label: "تایید قوانین ",
        name: "checkbox",
        placeholder: "Enter the date ",
        type: "checkbox",
        initialValue: "",
        defaultValue: null,
        grid: { xs: 3 },
      },
    ],
  },
  actions: [
    { type: "new", title: "", tooltip: "", icon: "", url: "/group/new" },
    {
      type: "removerSelected",
      title: "",
      tooltip: "",
      icon: "",
      url: "/group/delete",
    },
    { type: "exportExcel", title: "", tooltip: "", icon: "" },
    { type: "exportPdf", title: "", tooltip: "", icon: "" },
    { type: "customiseColumns", title: "", tooltip: "", icon: "" },
    {
      type: "advancedSearch",
      title: "",
      tooltip: "",
      icon: "",
      formType: "modal",
      url: "/group/advanced-search",
    },
    { type: "reset", title: "", tooltip: "", icon: "" },
  ],
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
    const res = await Api.get(url);
    return { data: gridColumns }; //res.data;
  } catch (error) {
    return { data: gridColumns }; //res.data;
  }
};

//sample data
const gridData: any = {
  // pageSize: 5,
  // pageNumber: 1,
  total: 9,
  rows: [
    { id: 1, col1: "آینم ۱", col2: "آیتم ۱" },
    { id: 2, col1: "آیتم ۲ ", col2: "آیتم ۲ " },
    { id: 3, col1: "آیتم ۳ ", col2: "آیتم ۳ " },
    { id: 4, col1: "آینم ۴", col2: "آیتم ۴" },
    { id: 5, col1: "آیتم ۵ ", col2: "آیتم ۵ " },
    { id: 6, col1: "آیتم ۶ ", col2: "آیتم ۶ " },
    { id: 7, col1: "آینم ۷", col2: "آیتم ۷" },
    { id: 8, col1: "آیتم ۸ ", col2: "آیتم ۸ " },
    { id: 9, col1: "آیتم ۹ ", col2: "آیتم ۹ " },
  ],
};

const getFakeData = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve({}), 250);
  });

export const getGridData = async (url: string, tableFilters: any) => {
  const { pageNum, pageSize } = tableFilters;

  console.log(
    "api tableFilters: ",
    gridData,
    // gridData?.slice((pageNum - 1) * pageSize, pageNum * pageSize),
    pageNum * pageSize,
    (pageNum + 1) * pageSize,
    tableFilters
  );

  try {
    // const res = await Api.post(url, tableFilters);
    const res = await getFakeData();

    return {
      data: gridData?.rows?.slice(pageNum * pageSize, (pageNum + 1) * pageSize),
      total: 9,
    }; //res.data;
  } catch (error) {
    return {
      data: gridData?.rows?.slice(pageNum * pageSize, (pageNum + 1) * pageSize),
    }; //res.data;
  }
};
