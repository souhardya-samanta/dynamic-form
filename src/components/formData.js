export const formData = {
  formName:"Job Application",
  formDescription: "This form is about basic information for aspirants looking for job.",
  data:[
    {
      id: "name",
      label: "Full name",
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
]};