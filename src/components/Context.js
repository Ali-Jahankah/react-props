import { createContext } from "react";

const MyContext = createContext({
  state: {},
  handleDelete: () => {},
  editFullname: () => {},
  handleNameChange: () => {},
  addPerson: () => {},
});
export default MyContext;
