import { Panel, List, FlexboxGrid, Col, ButtonGroup, Button } from "rsuite";
import { observer } from "mobx-react-lite";
import { todoStore } from "../store";
import { TodoInterface } from "../types/Todo";
import TrashIcon from "@rsuite/icons/Trash";
import CheckOutlineIcon from "@rsuite/icons/CheckOutline";

const Item = (props: { todo: TodoInterface }) => (
  <List.Item>
    <FlexboxGrid justify="space-between">
      <FlexboxGrid.Item colspan={16}>
        <h4>{props.todo.title}</h4>
        <small style={{ color: "#8e8e93" }}>
          {props.todo.deadline.toString()}
        </small>
        <p>{props.todo.description}</p>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item
        as={Col}
        colspan={8}
        style={{ textAlign: "right", padding: 24 }}
      >
        <ButtonGroup vertical size="sm">
          <Button color="green" appearance="primary">
            <CheckOutlineIcon className="mr-2" />
            Mark as Done
          </Button>
          <Button color="red" appearance="primary">
            <TrashIcon className="mr-2" />
            Remove
          </Button>
        </ButtonGroup>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  </List.Item>
);

const TodoList = () => {
  return (
    <Panel header="Todo List" bordered>
      <List>
        {todoStore.todos.map((todo: TodoInterface) => (
          <Item key={todo.id} todo={todo} />
        ))}
      </List>
    </Panel>
  );
};

export default observer(TodoList);
