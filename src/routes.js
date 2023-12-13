import Dashboard from "views/Dashboard.js";
import Map from "views/Map.js";
import TableList from "views/TableList.js";
import UserProfile from "views/UserProfile.js";
import UserList from "views/UserList";
import Product from "views/Product";
import Icons from "views/Icons";
import Order from "views/Order";
import Report from "views/Report";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "fa-solid fa-user",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/user-list",
    name: "User List",
    icon: "tim-icons icon-single-02",
    component: <UserList />,
    layout: "/admin",
  },
  {
    path: "/product",
    name: "Product",
    icon: "fa-solid fa-car-rear",
    component: <TableList />,
    layout: "/admin",
  },
  {
    path: "/order",
    name: "Order",
    icon: "fa-solid fa-cart-plus",
    component: <Order />,
    layout: "/admin",
  },
  {
    path: "/report",
    name: "Report",
    icon: "fa-solid fa-chart-pie",
    component: <Report />,
    layout: "/admin",
  },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: "tim-icons icon-single-02",
  //   component: <UserProfile />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   icon: "tim-icons icon-puzzle-10",
  //   component: <TableList />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/icon",
  //   name: "Icons",
  //   rtlName: "قائمة الجدول",
  //   icon: "tim-icons icon-puzzle-10",
  //   component: <Icons />,
  //   layout: "/admin",
  // },
];
export default routes;
