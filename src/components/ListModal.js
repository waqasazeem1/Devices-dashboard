import React, { useState } from "react";
import { Form, Input, InputNumber, Button } from "antd";
import "../css/ListModal.css";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

function ListModal(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  const submitValue = () => {
    // console.log()
    const formDetails = {
      key: 4,
      name: name,
      age: age,
      email: email,
    };
    props.setSearch([...props.datas, formDetails]);
    console.log([...props.datas, formDetails]);
      
   

  };



  // const onFinish = (values) => {
  //     
  //   };

  // console.log(formData)

  return (
    <>
    

      <Form
        {...layout}
        name="nest-messages"
        // onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <button onClick={props.closePopup}>X</button>

        <Form.Item
          name={["user", ""]}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Item>
        <Form.Item
          name={["user", "name"]}
          label="Email"
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            require={email}
          />
        </Form.Item>
        <Form.Item name={["user", "age"]} label="Age">
          <Input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button disabled={!name || !email || !age } onClick={submitValue} type="primary" htmlType="submit">
            ADD
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default ListModal;
