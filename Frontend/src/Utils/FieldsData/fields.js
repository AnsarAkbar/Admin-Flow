export const SingnUpDetail = [
  {
    label: "Full Name",
    inputFor: "name",
    type: "text",
    placeholder: "Enter Your Full Name",
    reg: /^[ a-zA-Z ]+$/,
    errorMsg:"Please use  a-zA-Z;"
  },
  {
    label: "Email",
    inputFor: "email",
    type: "email",
    placeholder: "Enter Your Email Address",
    reg: /^[a-zA-Z0-9._%+-]+@(gmail\.com|envato\.com|edu\.pk)$/,
    errorMsg:"Please use gmail\.com|envato\.com|edu\.pk"
  },
  {
    label: "Password",
    inputFor: "password",
    type: "password",
    placeholder: "Enter 6 digit password",
    reg:/^.{6,}$/,
    errorMsg:"Atleast 6 characters"
  },
  {
    label: "I agree with terms and privacy",
    inputFor: "checkbox",
    type: "checkbox",
    value:false
  },
];

export const LoginDetail = [
  {
    label: "Email",
    inputFor: "email",
    type: "email",
    placeholder: "Enter Your Email Address",
    reg: /^[a-zA-Z0-9._%+-]+@(gmail\.com|envato\.com|edu\.pk)$/,
  },
  {
    label: "Password",
    inputFor: "password",
    type: "password",
    placeholder: "At least 8 characters",
    reg: /^[a-zA-Z0-9._%+-]+$/,
  },
  {
    label: "Remember Me",
    inputFor: "checkbox",
    type: "checkbox",
    placeholder: "",
    // reg: /^[a-zA-Z0-9._%+-]+$/,
  },
];

export const EmailForgot = [
  {
    label: "Your Email",
    inputFor: "email",
    type: "email",
    placeholder: "Enter Your Email Address",
    reg: /^[a-zA-Z0-9._%+-]+@(gmail\.com|envato\.com|edu\.pk)$/,
  },
];

export const otpFields = [
  {
    // label:"Your Email",
    inputFor: "otp",
    type: "text",
    // placeholder: "Enter Your Email Address",
    // reg: /^[a-zA-Z0-9._%+-]+@(gmail\.com|envato\.com|edu\.pk)$/,
  },
];

export const newPass = [
  {
    label: "Password",
    inputFor: "password",
    type: "text",
    placeholder: "Enter New Password",
    // reg: /^[a-zA-Z0-9._%+-]+@(gmail\.com|envato\.com|edu\.pk)$/,
  },
  {
    label: "Confirm Password",
    inputFor: "password",
    type: "text",
    placeholder: "Confirm Your Password",
    // reg: /^[a-zA-Z0-9._%+-]+@(gmail\.com|envato\.com|edu\.pk)$/,
  },
];
