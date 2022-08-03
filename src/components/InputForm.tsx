import React, { useRef, useState } from "react";
import { Panel, Form, Input, DatePicker, ButtonToolbar, Button } from "rsuite";

const Textarea = React.forwardRef((props, ref: any) => (
  <Input {...props} as="textarea" rows={3} ref={ref} />
));

export default function InputForm() {
  const [formValue, setFormValue] = useState({
    title: "",
    deadline: "",
    description: "",
  });
  const formRef = useRef<any>(null);

  const handleSubmit = (status: boolean) => {
    console.log({ formValue, status });
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
              setFormValue({ ...formValue, deadline: date.toLocaleString() })
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
