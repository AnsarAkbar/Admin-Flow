export const SingnUpDetail = [
  {
    label: "name",
    inputFor: "name",
    type: "text",
    placeholder: "Enter Your Full Name",
    reg: /^[ a-zA-Z ]+$/,
  },
  {
    label: "email",
    inputFor: "email",
    type: "email",
    placeholder: "Enter Your Email Address",
    reg: /^[a-zA-Z0-9._%+-]+@(gmail\.com|envato\.com|edu\.pk)$/,
  },
  {
    label: "password",
    inputFor: "password",
    type: "password",
    placeholder: "At least 8 characters",
    reg: /^[a-zA-Z0-9._%+-]+$/,///^\d{4}$/
  },
  {
    label: "I agree with terms and privacy",
    inputFor: "checkbox",
    type: "checkbox",
    placeholder: "",
    value:false
    // reg: /^[a-zA-Z0-9._%+-]+$/,
  },
];

export const LoginDetail = [
  {
    label: "email",
    inputFor: "email",
    type: "email",
    placeholder: "Enter Your Email Address",
    reg: /^[a-zA-Z0-9._%+-]+@(gmail\.com|envato\.com|edu\.pk)$/,
  },
  {
    label: "password",
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
