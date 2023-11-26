import React, { useReducer, useEffect } from "react";
import AppBar from "./AppBar";
import useFetch from "../hooks/useFetch";
import { StateType } from "../utils/type";
import EmpDetailsTable from "./EmpDetailsTable";
import EditDeleteModal from "./EditDeleteModal";

const HomePage = () => {
  const reducer = (state: StateType, newState: Partial<StateType>) => ({
    ...state,
    ...newState,
  });

  const [
    {
      employeeData,
      selectedId,
      isModalOpen,
      modalMode,
      editData,
      buttonAction,
    },
    setState,
  ] = useReducer(reducer, {
    employeeData: [],
    selectedId: -1,
    isModalOpen: false,
    modalMode: "NoMode",
    editData: {
      name: "",
      age: -1,
      city: "",
      pinCode: "",
    },
    buttonAction: "NA",
  });
  const [apiData, setApiData] = useFetch(
    "https://assets.alippo.com/catalog/static/data.json",
    [],
    (e) => console.log(e)
  );

  useEffect(() => {
    setState({ employeeData: apiData });
  }, [apiData]);
  useEffect(() => {
    if (selectedId !== -1) {
      setState({
        editData: employeeData.filter((ele, i) => {
          if (i === selectedId) return ele;
        })[0],
      });
    }
  }, [selectedId]);

  useEffect(() => {
    if (buttonAction === "Edit") {
      setApiData(apiData.map((ele, i) => (i === selectedId ? editData : ele)));
      setState({
        editData: {
          name: "",
          age: -1,
          city: "",
          pinCode: "",
        },
      });
    } else if (buttonAction === "Delete") {
      setApiData(apiData.filter((ele, i) => (i !== selectedId ? ele : null)));
    }
    setState({
      isModalOpen: false,
      selectedId: -1,
      modalMode: "NoMode",
      buttonAction: "NA",
    });
  }, [buttonAction]);

  const HandleState = (newData: Partial<StateType>) => {
    setState({ ...newData });
  };

  return (
    <div className="relative">
      <AppBar />
      <EmpDetailsTable
        dataArray={employeeData}
        HandleState={HandleState}
        // isModalOpen={isModalOpen}
        // modalMode={modalMode}
      />
      <EditDeleteModal
        modalOpen={isModalOpen}
        RowNumber={selectedId}
        editData={editData}
        HandleState={HandleState}
        modalMode={modalMode}
      />
    </div>
  );
};

export default HomePage;
