import React, { useRef, useState } from "react";
import { TodoInputInterface } from "../types/Todo";
import {
  Animation,
  Panel,
  Form,
  Schema,
  Input,
  DatePicker,
  ButtonToolbar,
  Button,
  Message,
} from "rsuite";
import { todoStore } from "../store";

const Textarea = React.forwardRef((props, ref: any) => (
  <Input {...props} as="textarea" rows={3} ref={ref} />
));

export default function InputForm() {
  const [openMessage, setOpenMessage] = useState(false);
  const [formValue, setFormValue] = useState({
    title: "",
    deadline: new Date(),
    description: "",
  });
  const formRef = useRef(null);

  const model = Schema.Model({
    title: Schema.Types.StringType().isRequired("Please enter the title"),
    deadline: Schema.Types.DateType().min(
      new Date(),
      "You can not select past date"
    ),
  });

  const handleSubmit = (status: boolean): void => {
    if (status) {
      todoStore.addTodo(formValue as TodoInputInterface);
      setOpenMessage(true);
      handleReset();
    }
  };

  const handleReset = (): void => {
    setFormValue({ title: "", deadline: new Date(), description: "" });
  };

  return (
    <>
      <Animation.Collapse in={openMessage}>
        <Message
          showIcon
          closable
          onClose={() => setOpenMessage(false)}
          type="success"
          header="Success"
          className="mb-4"
        >
          Successfully added a new todo.
        </Message>
      </Animation.Collapse>
      <Panel header="Add Todo" bordered>
        <Form
          fluid
          ref={formRef}
          onSubmit={handleSubmit}
          formValue={formValue}
          onChange={(value: any) => setFormValue(value)}
          onReset={handleReset}
          model={model}
        >
          <Form.Group controlId="title">
            <Form.ControlLabel>Title</Form.ControlLabel>
            <Form.Control name="title" />
            <Form.HelpText>Required</Form.HelpText>
          </Form.Group>
          <Form.Group controlId="deadline">
            <Form.ControlLabel>Deadline Date</Form.ControlLabel>
            <Form.Control name="deadline" accepter={DatePicker} oneTap block />
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
    </>
  );
}
