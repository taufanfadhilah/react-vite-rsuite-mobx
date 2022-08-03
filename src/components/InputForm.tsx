import React, { useRef, useState } from "react";
import { TodoInputInterface } from "../types/Todo";
import { Panel, Form, Input, DatePicker, ButtonToolbar, Button } from "rsuite";
import { todoStore } from "../store";

const Textarea = React.forwardRef((props, ref: any) => (
  <Input {...props} as="textarea" rows={3} ref={ref} />
));

export default function InputForm() {
  const [formValue, setFormValue] = useState({
    title: "",
    deadline: new Date(),
    description: "",
  });
  const formRef = useRef<any>(null);

  const handleSubmit = () => {
    todoStore.addTodo(formValue as TodoInputInterface);
  };

  return (
    <Panel header="Add Todo" bordered>
      <Form
        fluid
        ref={formRef}
        onSubmit={handleSubmit}
        formValue={formValue}
        onChange={(value: any) => setFormValue(value)}
      >
        <Form.Group controlId="title">
          <Form.ControlLabel>Title</Form.ControlLabel>
          <Form.Control name="title" />
          <Form.HelpText>Required</Form.HelpText>
        </Form.Group>
        <Form.Group controlId="deadline">
          <Form.ControlLabel>Deadline Date</Form.ControlLabel>
          <DatePicker
            oneTap
            block
            name="deadline"
            onSelect={(date: Date) =>
              setFormValue({ ...formValue, deadline: date })
            }
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.ControlLabel>Description</Form.ControlLabel>
          <Form.Control name="description" accepter={Textarea} />
        </Form.Group>
        <Form.Group>
          <ButtonToolbar>
            <Button appearance="primary" type="submit">
              Submit
            </Button>
            <Button appearance="default" type="reset">
              Cancel
            </Button>
          </ButtonToolbar>
        </Form.Group>
      </Form>
    </Panel>
  );
}
