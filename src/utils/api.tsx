import axios from "axios";
import { EmpData, ErrorHandler } from "./type";

export const fetchData = async (url: string, errorHandler: ErrorHandler) => {
  try {
    const res = await axios.get(url);
    return res.data as EmpData[];
  } catch (err) {
    errorHandler(err);
  }
};
