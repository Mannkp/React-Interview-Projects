const dummyFormData = [
    {
        type: "text",
        label: "Name",
        name: "name",
        id: "empName",
        placeholder: "Enter your name",
        validations: { required: true, min: 2, max: 100 }
    },
    {
        type: "select",
        label: "Role",
        name: "role",
        id: "empRole",
        placeholder: "Enter your role",
        options: [
            { value: "Associate DX Engineer" },
            { value: "DX Engineer" },
            { value: "Senior DX Engineer" }
        ],
        validations: { required: true }
    },
    {
        type: "number",
        label: "Employee number",
        name: "Employee_number",
        id: "EmpNo",
        placeholder: "Enter your Employee id",
        validations: { required: true, min: 0, max: 1000 }
    },
    {
        type: "radio",
        label: "Male",
        name: "Gender",
        id: "MaleRadio",
        placeholder: "Select your Gender",
        validations: { required: true },
        value: "Male"
    },
    {
        type: "radio",
        label: "Female",
        name: "Gender",
        id: "femaleRadio",
        placeholder: "Select your Gender",
        validations: { required: true },
        value: "Female"
    },
    {
        type: "checkbox",
        label: "Front-End",
        name: "skill",
        placeholder: "Select your skill",
        id: "FrontEndCheckbox",
        validations: { atleastOneChecked: true },
        value: "front-end"
    },
    {
        type: "checkbox",
        label: "Back-End",
        name: "skill",
        placeholder: "Select your skill",
        id: "BackendCheckbox",
        validations: { atleastOneChecked: true },
        value: "back-end"
    }
]

export default dummyFormData;