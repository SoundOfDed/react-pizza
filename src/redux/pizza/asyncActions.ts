import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchPizzasArgs, Pizza } from "./types";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzasStatus',
    async (params: FetchPizzasArgs) => {
      const { categoryId, sortType, searchInput, currentPage } = params
      const { data } = await axios.get<Pizza[]>(
        `https://651ef7de44a3a8aa476944af.mockapi.io/items?${
          Number(categoryId) > 0 ? `category=${categoryId}` : ''
        }&sortBy=${sortType.replace('-', '')}&order=${sortType.includes('-') ? 'asc' : 'desc'}${
          searchInput ? `&search=${searchInput}` : ''
        }&page=${currentPage}&limit=4`,
      );
      return data as Pizza[];
    },
  );