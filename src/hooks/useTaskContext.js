import { useContext } from "react";
import TaskContext from "../context/task";

const UseTaskContext = () => {
    return useContext(TaskContext)
}

export default UseTaskContext