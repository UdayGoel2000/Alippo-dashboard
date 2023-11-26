export type EmpData = {
  name: string;
  age: number;
  city: string;
  pinCode: string;
};

export type ErrorHandler = (e: unknown | string) => void;

export type ModalMode = "NoMode" | "EditMode" | "DeleteMode";

export type StateType = {
  employeeData: EmpData[];
  selectedId: number;
  isModalOpen: boolean;
  modalMode: ModalMode;
  editData: EmpData;
  buttonAction: "NA" | "Delete" | "Edit";
};
