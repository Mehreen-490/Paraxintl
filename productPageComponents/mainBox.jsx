import {
  Autocomplete,
  Box,
  TextField,
  Typography,
  Grid,
  Pagination,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import ListIcon from "@mui/icons-material/List";
import Product from "./product";
import { Stack } from "@mui/system";

function getPaginatedItems(items, ItemsPerPage, pageNumber) {
  return items.splice((pageNumber - 1) * ItemsPerPage, ItemsPerPage);
}

const MainBox = () => {
  // sorting options
  const sorting = [
    "Default Sorting",
    "Sort By Popularity",
    "Sort By Latest",
    "Sort By Price: Low To High",
    "Sort By Price: High To Low",
  ];

  // pagination per page options
  const paginationPerPageOptions = ["4", "12", "24", "ALL"];

  // all products
  const [products, setProducts] = useState([]);

  // current page
  const [page, setPage] = useState(1);

  // selected items per page
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // viewType (grid or list)
  const [viewType, SetViewType] = useState("gridView");

  const handleItemsPerPage = (event, newValue) => {
    setPage(1);
    setItemsPerPage(newValue);
  };

  const handleViewChange = (vType) => {
    SetViewType(vType);
  };

  const pageChangeHandler = (event, pageNumber = 1) => {
    setPage(pageNumber);
  };

  const paginatedProducts =
    itemsPerPage !== "ALL"
      ? getPaginatedItems(products.slice(0), itemsPerPage, page)
      : products;

  useEffect(() => {
    const apiProducts = [
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-3.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-3.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Summer New Casual Print Short Sleeve All Over Print",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-3.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-3.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Summer New Casual Print Short Sleeve All Over Print",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-3.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-3.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-3.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-3.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Summer New Casual Print Short Sleeve All Over Print",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-5.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-5.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Button Up Short Sleeves Tie Dye Shirts",
      },
      {
        fontImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/1-3.jpg",
        backImage:
          "https://apparel.paraxintl.com/wp-content/uploads/2022/10/2-3.jpg",
        categories: ["Casual Shirts", "Casual Wear"],
        title: "Custom Summer New Casual Print Short Sleeve All Over Print",
      },
    ];
    setProducts(apiProducts);
  }, []);

  return (
    <Box sx={{ py: 4, width: "100%", px: 2, pb: 10 }}>
      {/* Top Bar */}
      <Box>
        {/* Divider */}
        <Box sx={{ height: "0.5px", width: "100%", bgcolor: "#192d34" }}></Box>
        {/* Content i.e. grid, list, sorting, view detail */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Grid & List View Icons */}
          <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
            <GridViewIcon
              onClick={() => handleViewChange("gridView")}
              sx={{
                border: viewType === "gridView" ? "2px solid #6AA3C2" : "",
                width: "37px",
                height: "37px",
                p: "5px",
                borderRadius: "2px",
                cursor: "pointer",
                "&:hover": {
                  border: "2px solid #6AA3C2",
                },
              }}
            />
            <ListIcon
              onClick={() => handleViewChange("listView")}
              sx={{
                border: viewType === "listView" ? "2px solid #6AA3C2" : "",
                width: "37px",
                height: "37px",
                p: "5px",
                borderRadius: "2px",
                cursor: "pointer",
                mx: 1.2,
                "&:hover": {
                  border: "2px solid #6AA3C2",
                },
              }}
            />
            <Autocomplete
              disableClearable={true}
              disablePortal
              id="combo-box-demo"
              options={sorting}
              size="small"
              defaultValue="Default Sorting"
              sx={{ width: 250, p: 0 }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Box>
          {/* VIEW 12/24/ALL */}
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ ml: "auto", pr: 2 }}
          >
            <Typography>View: &nbsp;</Typography>
            <Autocomplete
              disableClearable={true}
              disablePortal
              id="combo-box-demo"
              options={paginationPerPageOptions}
              size="small"
              defaultValue="12"
              value={itemsPerPage}
              onChange={handleItemsPerPage}
              sx={{ p: 0 }}
              renderInput={(params) => {
                console.log(params);
                return <TextField {...params} />;
              }}
            />
          </Stack>
        </Box>
        {/* Divider */}
        <Box sx={{ height: "0.5px", width: "100%", bgcolor: "#192d34" }}></Box>
      </Box>
      <Box width="100%" mt={2}>
        {viewType === "gridView" ? (
          <Grid container direction="row" spacing={1}>
            {paginatedProducts.map((product, index) => {
              return (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Product product={product} viewType={viewType}></Product>
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <Stack>
            {paginatedProducts.map((product, index) => {
              return <Product product={product} viewType={viewType}></Product>;
            })}
          </Stack>
        )}
        {itemsPerPage !== "ALL" ? (
          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Pagination
              count={Math.ceil(products.length / itemsPerPage)}
              variant="outlined"
              shape="rounded"
              page={page}
              defaultPage={1}
              boundaryCount={2}
              onChange={(event, pageNumber) =>
                pageChangeHandler(event, pageNumber)
              }
            />
          </Box>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
};

export default MainBox;
