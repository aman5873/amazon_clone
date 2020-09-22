import React from "react";
// import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
// import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import RedeemIcon from "@material-ui/icons/Redeem";

import HomeIcon from "@material-ui/icons/Home";
export const SidebarData = [
  {
    title: "Amazon-Clone",
    path: "/",
    icon: <HomeIcon />,
    cName: "nav-text",
  },
  {
    title: "Checkout",
    path: "/checkout",
    icon: <ShoppingBasketIcon />,
    cName: "nav-text",
  },
  {
    title: "Orders",
    path: "/orders",
    icon: <RedeemIcon />,
    cName: "nav-text",
  },

  {
    title: "Support",
    path: "/support",
    icon: <ContactSupportIcon />,
    cName: "nav-text",
  },
];
