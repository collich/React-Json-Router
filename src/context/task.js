import { createContext } from "react";

const TaskContext = createContext()

const Provider = ({ children }) => {

    const valueToShare = {

    }

    return (
        <TaskContext.Provider value={valueToShare}>
            {children}
        </TaskContext.Provider>
    )
}

export { Provider }
export default TaskContext
