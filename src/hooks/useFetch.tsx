import { useEffect, useState } from "react";
import { fetchData } from "../utils/api";
import { EmpData, ErrorHandler } from "../utils/type";

const useFetch = (
  url: string,
  initialState: EmpData[],
  errorHandler: ErrorHandler
): [EmpData[], React.Dispatch<React.SetStateAction<EmpData[]>>] => {
  const [employeeData, setEmployeeData] = useState<EmpData[]>(initialState);

  useEffect(() => {
    fetchData(url, errorHandler).then((data) =>
      data !== undefined ? setEmployeeData(data) : null
    );
  }, []);

  return [employeeData, setEmployeeData];
};

export default useFetch;
