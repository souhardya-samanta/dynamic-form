const formData = {
    formName:"Aspirant Form",
    formDescription: "This form is about basic information for aspirants.",
    data:[
      {
        id: "name",
        label: "Name",
        placeholder: "Enter full name",
        type: "text",
        validationType: "string",
        value: "",
        validations: [
          {
            type: "required",
            params: ["Name is required"],
          },
        ],
      },
      {
        id: "email",
        label: "Email",
        placeholder: "Enter email",
        type: "text",
        validationType: "string",
        value: "",
        validations: [
          {
            type: "required",
            params: ["E-mail is required"],
          },
        ],
      },
      {
        id: "fatherName",
        label: "Father's Name",
        placeholder: "Enter name",
        type: "text",
        validationType: "string",
        value: "",
      },
      {
        id: "motherName",
        label: "Mother's Name",
        placeholder: "Enter name",
        type: "text",
        validationType: "string",
        value: "",
      },
      {
        id: "gender",
        label: "Gender",
        placeholder: "Select Gender",
        type: "radio",
        options:["Male","Female","Others"],
        value: "",
      },
      {
        id: "highQual",
        label: "Your highest qualification",
        placeholder: "Select Qualification",
        type: "select",
        validationType: "string",
        options:["10","12","Under Graduate","Post Graduate",],
        value: "",
      },
      {
        id: "hobbies",
        label: "Select your hobbies",
        placeholder: "Select hobbies",
        type: "multiselect",
        value: "",
        options:["Football","Coding","Gaming","Drawing","Cricket","Singing","Eating","Dancing","Sleeping"]
      },
      {
        id: "aboutMe",
        label: "About Me",
        placeholder: "Write here",
        type: "textarea",
        validationType: "string",
        value: "",
      },
      {
        id: "agree",
        label: "Declaration",
        type: "checkbox",
        value: "",
        options:["I agree that I have entered all details correctly."]
      },
  ]};

  module.exports=formData;