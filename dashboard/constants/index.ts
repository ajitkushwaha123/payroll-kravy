import { image } from "@nextui-org/theme";
import { link, read } from "fs";

export const sideBarLinks = [
  {
    title: "Dashboard",
    icon: "LayoutDashboard",
    link: "/",
  },
  {
    title: "Employees",
    icon: "Contact",
    link: "/all-employees",
  },
  {
    title: "Departments",
    icon: "Table",
    link: "/departments",
  },
  {
    title: "Attendance",
    icon: "FileChartColumn",
    link: "/attendance",
  },
  {
    title: "Payroll",
    icon: "CircleDollarSign",
    link: "/payroll",
  },
  {
    title: "Jobs",
    icon: "Box",
    link: "/jobs",
  },
  {
    title: "Candidates",
    icon: "CalendarRange",
    link: "/candidates",
  },

  {
    title: "Leaves",
    icon: "BriefcaseBusiness",
    link: "/leaves",
  },
  {
    title: "Holidays",
    icon: "CalendarCheck2",
    link: "/holidays",
  },
  {
    title: "Settings",
    icon: "Settings",
    link: "/settings",
  },
];

export const notificationData = [
  {
    name: "Ralph Edwards",
    time: "2 min Ago.",
    order: "Ordered 3 meals and 1 drink.",
    image: "/bag-happy.png",
    unread: true,
    items: [
      {
        quantity: "1x",
        name: "Fish and Chips with sausage vegetarian",
        price: "$12.00",
      },
      {
        quantity: "1x",
        name: "Fish and Chips with sausage vegetarian",
        price: "$12.00",
      },
      {
        quantity: "1x",
        name: "Fish and Chips with sausage vegetarian",
        price: "$12.00",
      },
    ],
  },
  {
    name: "Ralph Edwards",
    time: "2 min Ago.",
    order: "Ordered 3 meals and 1 drink.",
    image: "/clipboard-close.png",
    unread: true,
    items: [
      {
        quantity: "1x",
        name: "Fish and Chips with sausage vegetarian",
        price: "$12.00",
      },
      {
        quantity: "1x",
        name: "Fish and Chips with sausage vegetarian",
        price: "$12.00",
      },
      {
        quantity: "1x",
        name: "Fish and Chips with sausage vegetarian",
        price: "$12.00",
      },
    ],
  },
  {
    name: "Ralph Edwards",
    time: "2 min Ago.",
    order: "Ordered 3 meals and 1 drink.",
    image: "/bag-happy.png",
    unread: false,
    items: [
      {
        quantity: "1x",
        name: "Fish and Chips with sausage vegetarian",
        price: "$12.00",
      },
      {
        quantity: "1x",
        name: "Fish and Chips with sausage vegetarian",
        price: "$12.00",
      },
      {
        quantity: "1x",
        name: "Fish and Chips with sausage vegetarian",
        price: "$12.00",
      },
    ],
  },
  {
    name: "Ralph Edwards",
    time: "2 min Ago.",
    order: "Ordered 3 meals and 1 drink.",
    image: "/bag-happy.png",
    unread: false,
    items: [
      {
        quantity: "1x",
        name: "Fish and Chips with sausage vegetarian",
        price: "$12.00",
      },
      {
        quantity: "1x",
        name: "Fish and Chips with sausage vegetarian",
        price: "$12.00",
      },
      {
        quantity: "1x",
        name: "Fish and Chips with sausage vegetarian",
        price: "$12.00",
      },
    ],
  },
];

export const statsData = [
  {
    title: "Total Employee",
    amount: 560,
    orders: 28,
    percentage: 28,
    icon: "Contact",
    bgColor: "primary-50",
    lastUpdated: "July 14 , 2023",
  },
  {
    title: "Total Departments",
    amount: 10,
    orders: 10,
    percentage: -28,
    icon: "Table",
    bgColor: "warning-100",
    lastUpdated: "July 14 , 2023",
  },
  {
    title: "Today Attendance",
    amount: 20,
    orders: 14,
    percentage: 56,
    icon: "FileChartColumn",
    bgColor: "default-100",
    lastUpdated: "July 14 , 2023",
  },
  {
    title: "Total Payroll",
    amount: 28033,
    orders: 16,
    percentage: -10,
    icon: "CircleDollarSign",
    bgColor: "success-100",
    lastUpdated: "July 14 , 2023",
  },
];
