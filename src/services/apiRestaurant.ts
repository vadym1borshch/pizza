import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://react-fast-pizza-api.onrender.com/api";

// Define types for the expected data structures
export interface IMenuItem {
  id: number;
  imageUrl: string;
  ingredients: string[];
  name: string;
  soldOut: boolean;
  unitPrice: string;
}

export interface IOrder {
  id: number;
  items: IMenuItem[];
  total: number;
  // Add other fields as necessary
}

export interface INewOrder {
  items: IMenuItem[];
  // Add other fields as necessary
}

export interface UpdateOrder {
  status?: string;
  // Add other fields as necessary
}

export const getMenu = createAsyncThunk(
  "menu/getMenu",
  async (userData): Promise<IMenuItem[]> => {
    try {
      const res = await axios.get(`${API_URL}/menu`);
      return res.data.data;
    } catch (err) {
      throw new Error("Failed getting menu");
    }
  },
);

export const getOrder = async (id: number): Promise<IOrder> => {
  try {
    const res = await axios.get(`${API_URL}/order/${id}`);
    const { data }: { data: IOrder } = res;
    return data;
  } catch (err) {
    throw new Error(`Couldn't find order #${id}`);
  }
};

export const createOrder = async (newOrder: INewOrder): Promise<IOrder> => {
  try {
    const res = await axios.post(`${API_URL}/order`, {
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { data }: { data: IOrder } = res;
    return data;
  } catch (err: any) {
    throw new Error(`Failed creating your order: ${err.message}`);
  }
};

export const updateOrder = async (
  id: number,
  updateObj: UpdateOrder,
): Promise<void> => {
  try {
    const res = await axios.patch(`${API_URL}/order/${id}`, {
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err: any) {
    throw new Error(`Failed updating your order: ${err.message}`);
  }
};
