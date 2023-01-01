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
        name: "name",
        placeholder: "نام را وارد نمایید",
        type: "text",
        initialValue: "",
        defaultValue: null,
        grid: { xs: 3 },
      },
      {
        label: "نام خانوادگی ",
        name: "lastname",
        placeholder: "نام خانوادگی را وارد نمایید",
        type: "text",
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
          { label: "همه", value: 3 },
          { label: "مرد", value: 1 },
          { label: "زن", value: 2 },
        ],
        onChange: () => {},
        grid: { xs: 3 },
      },
      {
        label: "انتخاب نوع ",
        name: "type",
        placeholder: "نوع را وارد نمایید ",
        type: "autocomplete",
        initialValue: "",
        defaultValue: null,
        options: [
          { label: "همه", value: 3 },
          { label: "نوع ۱", value: 1 },
          { label: "نوع ۲", value: 2 },
        ],
        onChange: () => {},
        grid: { xs: 3 },
      },
      {
        label: "تاریخ ",
        name: "startdate",
        placeholder: "تاریخ شروع ",
        type: "calendar",
        initialValue: "",
        defaultValue: null,
        grid: { xs: 3 },
      },
      {
        label: "دسته بندی",
        name: "group",
        placeholder: "دسته بندی  ",
        type: "radiogroup",
        inputType: "checkbox",
        // type: "radiogroup",
        // inputType:"radio",
        initialValue: "",
        defaultValue: null,
        grid: { xs: 3 },
        options: [
          { label: "اول", value: "اول" },
          { label: "دوم", value: "دوم" },
          { label: "سوم", value: "سوم" },
        ],
      },
      {
        label: "تایید شده ",
        name: "checkbox",
        placeholder: "تایید شده ",
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
    { field: "name", headerName: "نام ", width: 150 },
    { field: "lastname", headerName: "نام خانوادگی", width: 150 },
    { field: "gender", headerName: "جنسیت", width: 150 },
    { field: "itemType", headerName: "نوع", width: 150 },
    { field: "startdate", headerName: "تاریخ شروع", width: 150 },
    { field: "group", headerName: "نوع گروه", width: 150 },
    { field: "checkbox", headerName: "وضعیت", width: 150 },
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
    {
      id: 1,
      name: "امنیت ۱",
      lastname: "امنیتی ",
      gender: "مرد",
      itemType: "نوع ۱",
      group: "گروه ۱",
      checkbox: "تایید شده",
      startdate: "1401-10-11",
    },
    {
      id: 2,
      name: "امنیت ۲",
      lastname: "امنیت ۲",
      gender: "زن",
      itemType: "نوع ۲",
      group: "گروه ۲",
      checkbox: "تایید شده",
      startdate: "1401-10-12",
    },
    {
      id: 3,
      name: "امنیت ۳",
      lastname: "امنیت ۳",
      gender: "مرد",
      itemType: "نوع ۳",
      group: "گروه ۳",
      checkbox: "تایید شده",
      startdate: "1401-10-12",
    },
    {
      id: 4,
      name: "امنیت ۴",
      lastname: "امنیت ۴",
      gender: "زن",
      itemType: "نوع ۴",
      group: "گروه ۴",
      checkbox: "تایید شده",
      startdate: "1401-10-14",
    },
    {
      id: 5,
      name: "امنیت ۵",
      lastname: "امنیت ۵",
      gender: "مرد",
      itemType: "نوع ۶",
      group: "گروه ۶",
      checkbox: "تایید شده",
      startdate: "1401-10-15",
    },
    {
      id: 6,
      name: "امنیت ۶",
      lastname: "امنیت ۶",
      gender: "زن",
      itemType: "نوع ۱",
      group: "گروه ۶",
      checkbox: "تایید شده",
      startdate: "1401-10-16",
    },
    {
      id: 6,
      name: "امنیت ۶",
      lastname: "امنیت ۷",
      gender: "مرد",
      itemType: "نوع ۶",
      group: "گروه ۶",
      checkbox: "تایید شده",
      startdate: "1401-10-17",
    },
    {
      id: 7,
      name: "امنیت ۷",
      lastname: "امنیت ۷",
      gender: "زن",
      itemType: "نوع ۷",
      group: "گروه ۷",
      checkbox: "تایید شده",
      startdate: "1401-10-18",
    },
    {
      id: 8,
      name: "امنیت ۸",
      lastname: "امنیت ۸",
      gender: "مرد",
      itemType: "نوع ۸",
      group: "گروه ۸",
      checkbox: "تایید شده",
      startdate: "1401-10-19",
    },
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
  let arr1 = gridData?.rows?.slice(
    pageNum * pageSize,
    (pageNum + 1) * pageSize
  );
  let arr2 = arr1.filter((item: any) => {
    let ok = true;
    Object.keys(tableFilters).map((key: string) => {
      console.log(
        "check:",
        item?.[key]?.includes(tableFilters?.[key]),
        !!tableFilters?.[key]
      );
      if (
        !!tableFilters?.[key] &&
        !item?.[key]?.includes(tableFilters?.[key]) &&
        key !== "pageNum" &&
        key !== "pageSize"
      ) {
        ok = false;
      }
    });
    return ok;
  });
  console.log("arr2: ", Object.keys(tableFilters), arr2);
  try {
    // const res = await Api.post(url, tableFilters);
    const res = await getFakeData();

    return {
      data: arr2, //gridData?.rows?.slice(pageNum * pageSize, (pageNum + 1) * pageSize),
      total: 9,
    }; //res.data;
  } catch (error) {
    return {
      data: gridData?.rows?.slice(pageNum * pageSize, (pageNum + 1) * pageSize),
    }; //res.data;
  }
};
