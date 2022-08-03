import { Container, Content, Grid, Row, Col } from "rsuite";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <Container>
        <Content className="mt-20">
          <Grid>
            <Row>
              <Col xs={24} md={16} mdOffset={4} className="mb-8">
                <InputForm />
              </Col>
              <Col xs={24} md={16} mdOffset={4}>
                <TodoList />
              </Col>
            </Row>
          </Grid>
        </Content>
      </Container>
    </>
  );
}

export default App;
