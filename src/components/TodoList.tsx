import { Panel, List, FlexboxGrid, Col, ButtonGroup, Button } from "rsuite";
import { observer } from "mobx-react-lite";
import { todoStore } from "../store";
import { TodoInterface } from "../types/Todo";
import TrashIcon from "@rsuite/icons/Trash";
import CheckOutlineIcon from "@rsuite/icons/CheckOutline";

const Item = ({ todo }: { todo: TodoInterface }) => (
  <List.Item>
    <FlexboxGrid justify="space-between">
      <FlexboxGrid.Item
        colspan={14}
        className={`${todo.isDone && "line-through"}`}
      >
        <h4>{todo.title}</h4>
        <small className="text-gray-400">{todo.deadline.toString()}</small>
        <p>{todo.description}</p>
        <p>{todo.isDone}</p>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item as={Col} colspan={10} className="pt-8">
        <div className="flex flex-row">
          <Button
            color="green"
            appearance="primary"
            onClick={() => todoStore.markAsDone(todo.id)}
            className="mr-2"
          >
            <CheckOutlineIcon className="mr-2" />
            Mark as Done
          </Button>
          <Button
            color="red"
            appearance="primary"
            onClick={() => todoStore.removeTodo(todo.id)}
          >
            <TrashIcon className="mr-2" />
            Remove
          </Button>
        </div>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  </List.Item>
);

const ItemObserver = observer(Item);

const TodoList = () => {
  return (
    <Panel header="Todo List" bordered>
      <List>
        {todoStore.todos.map((todo: TodoInterface) => (
          <ItemObserver key={todo.id} todo={todo} />
        ))}
      </List>
    </Panel>
  );
};

export default observer(TodoList);
