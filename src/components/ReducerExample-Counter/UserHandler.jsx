import "./style.css";
import { useCallback, useReducer, useRef, useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import UpdateUserForm from "./UpdateUserForm";
import AddNewUserForm from "./AddNewUserForm";

const reducer = (state, action) => {
    switch (action.type) {
        case "addUser":
            return [...state, { id: state.length || "000", name: action?.name || 'default name', role: action?.role || 'default role' }]
        case "update":
            return state?.map((item) => {
                if (item?.id === action?.id) {
                    return { ...item, name: (action?.name === "" ? item?.name : action?.name), role: (action?.role === "" ? item?.role : action?.role) }
                }
                return item
            })
        case "delete":
            return state?.filter((item) => (item.id !== action.id));
        default:
            return state
    }
}

function UserHandler() {

    const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(null);
    const [isAddUserFormOpen, setIsAddUserFormOpen] = useState(false);
    const updateUserFormRef = useRef(null);
    const newUserFormRef = useRef(null);

    const user = [{
        id: 0,
        name: 'Mann',
        role: 'Associate DX Engineer'
    }]

    const [state, dispatch] = useReducer(reducer, user);

    const handleUpdate = (id, name, role) => {
        dispatch({ type: "update", id, name, role })
    }

    const handleDelete = (id) => {
        dispatch({ type: "delete", id })
    }

    const handleAddUser = (name, role) => {
        dispatch({ type: "addUser", name, role })
    }

    const openUpdateForm = useCallback((id) => {
        setIsUpdateFormOpen(id);
    }, [])

    const openAddUserForm = useCallback(() => {
        setIsAddUserFormOpen(!isAddUserFormOpen);
    }, [isAddUserFormOpen])

    useEffect(() => {
        const handleMouseDown = (e) => {
            updateUserFormRef?.current && !updateUserFormRef?.current?.contains(e.target) && setIsUpdateFormOpen(null);

            newUserFormRef?.current && !newUserFormRef?.current?.contains(e.target) && setIsAddUserFormOpen(false);
        }
        document.addEventListener("mousedown", handleMouseDown)

        return () => document.removeEventListener("mousedown", handleMouseDown);
    })

    return (
        <div className="UserManagementExample">
            <h2>User Management using useReducer</h2>
            <div className="users">
                <h3>All Users: </h3>
                {state && <button onClick={openAddUserForm} className="bordered-button">Add User</button>}
                {isAddUserFormOpen && <div className="user" ref={newUserFormRef}>
                    <AddNewUserForm handleAddUser={handleAddUser} />
                </div>}
                {state && state?.map((item, index) => (
                    <div className="user" key={index}>
                        <p>{item?.id}, {item?.name}, {item?.role}</p>
                        <button onClick={() => openUpdateForm(item?.id)} className="bordered-button">Update User</button>
                        <button onClick={() => handleDelete(item?.id)} aria-label="Delete user"><RiDeleteBin6Line size={18} /></button>
                        {isUpdateFormOpen === item?.id && <div className="updateUser" ref={updateUserFormRef}>
                            <UpdateUserForm handleUpdate={handleUpdate} id={item?.id} />
                        </div>}
                    </div>
                )
                )}
                {state && state?.length === 0 && <h4>No Users Found!</h4>}
            </div>
        </div >
    )
}

export default UserHandler