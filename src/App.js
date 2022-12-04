import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button,
  Card,
  Container,
  Row,
  InputGroup,
  Form
} from 'react-bootstrap';

function App() {

  const [cards, setCards] = useState([]);
  const [values, setValues] = useState([]);

  const appendCard = (card) => {
    setCards(prevState => [
      ...prevState,
      card
    ]);
  }

  const addToRefs = (el) => {
    setValues(prev => [
      ...prev,
      el
    ]);
  }

  const sendToServer = () => {
    console.log(values);
  }

  const element = <Card style={
      {width: '18rem'}
    }
    className='me-2 mt-2'>
    <Card.Body>
      <Card.Title>Title</Card.Title>
      <Card.Text>
        <InputGroup className="mb-3">
          <Form.Control ref={addToRefs}
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"/>
          <Form.Text></Form.Text>
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control ref={addToRefs}
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"/>
          <Form.Text></Form.Text>
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control ref={addToRefs}
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"/>
          <Form.Text></Form.Text>
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control ref={addToRefs}
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"/>
          <Form.Text></Form.Text>
        </InputGroup>
      </Card.Text>
    </Card.Body>
  </Card>

  return (
    <div className="App">
      <Container>
        <Row> {
          cards.map(item => {
            return item
          })
        } </Row>
        <Button onClick={
          () => appendCard(element)
        }>Добавить</Button>
        <Button onClick={sendToServer}
          className="me-2">Отправить</Button>
      </Container>
    </div>
  );
}

export default App;
