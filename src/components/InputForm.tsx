import React from "react";
import { Panel, Form, Input, DatePicker, ButtonToolbar, Button } from "rsuite";

const Textarea = React.forwardRef((props, ref) => (
  <Input {...props} as="textarea" ref={ref} />
));

export default function InputForm() {
  return (
    <Panel header="Add Todo" bordered>
      <Form fluid>
        <Form.Group controlId="title">
          <Form.ControlLabel>Title</Form.ControlLabel>
          <Form.Control name="title" />
          <Form.HelpText>Required</Form.HelpText>
        </Form.Group>
        <Form.Group controlId="deadline">
          <Form.ControlLabel>Deadline Date</Form.ControlLabel>
          <DatePicker block />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.ControlLabel>Description</Form.ControlLabel>
          <Form.Control name="description" rows={3} accepter={Textarea} />
        </Form.Group>
        <Form.Group>
          <ButtonToolbar>
            <Button appearance="primary">Submit</Button>
            <Button appearance="default">Cancel</Button>
          </ButtonToolbar>
        </Form.Group>
      </Form>
    </Panel>
  );
}
