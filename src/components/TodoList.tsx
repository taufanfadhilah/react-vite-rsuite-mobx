import { Panel, List, FlexboxGrid, Col, ButtonGroup, Button } from "rsuite";
import TrashIcon from "@rsuite/icons/Trash";
import CheckOutlineIcon from "@rsuite/icons/CheckOutline";

const Item = () => (
  <List.Item>
    <FlexboxGrid justify="space-between">
      <FlexboxGrid.Item colspan={16}>
        <h4>Item 1</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          deserunt molestiae commodi quae debitis cum possimus, omnis nobis
          soluta porro molestias odio dignissimos ipsam quia. Consequuntur
          asperiores natus eaque nihil?
        </p>
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

export default function TodoList() {
  return (
    <Panel header="Todo List" bordered>
      <List>
        {[1, 2, 3].map((val) => (
          <Item key={val} />
        ))}
      </List>
    </Panel>
  );
}
