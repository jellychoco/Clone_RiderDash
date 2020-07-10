import React from "react";
import emailjs from "emailjs-com";
import styledComponentsCjs from "styled-components";

const Form = styledComponentsCjs.form`

text-align : right;
 display :flex;
 flex-direction:column;
`;

const InputStyle = styledComponentsCjs.input`
width:70%;
`;

const TextArea = styledComponentsCjs.input`
width:70%;
height:200px;
`;

const NameWrapper = styledComponentsCjs.div`

margin-bottom : 1em;
font-size:1.1em;
display:flex;
`;
const NameInsideWrapper = styledComponentsCjs.div`

 flex-grow : 1
`;

const EmailWrapper = styledComponentsCjs.div`

margin-bottom : 1em;
flex-grow:1;
`;

const AddPadding = styledComponentsCjs.div`
`;

export default function Email() {
  let sendEmail = async (e) => {
    e.preventDefault();

    console.log(e.target);
    const user_ID = "user_50ePfGzRvG3RNfBzzsTmO";
    const service_ID = "gmail";
    const template_ID = "template_8fI7rX7H";
    await emailjs.sendForm(service_ID, template_ID, e.target, user_ID).then(
      (result) => {
        console.log(result.text);
        alert("success");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <Form className="contact-form" onSubmit={sendEmail}>
      <NameWrapper>
        <NameInsideWrapper>
          <label>Name</label>
          <InputStyle required type="text" name="user_name" />
        </NameInsideWrapper>
      </NameWrapper>

      <EmailWrapper>
        <label>Email Address</label>
        <InputStyle required type="email" name="user_email" />
      </EmailWrapper>
      <AddPadding>
        <label>Message</label>
        <TextArea required name="message" />
      </AddPadding>
      <AddPadding>
        <input type="submit" value="Send" />
      </AddPadding>
    </Form>
  );
}
