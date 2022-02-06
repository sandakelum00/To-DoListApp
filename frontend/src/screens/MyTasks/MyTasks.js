import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from 'axios';

const MyTasks = () => {

    const [tasks, setTasks] = useState([])

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  const fetchTasks = async() => {
      const data = await axios.get('/api/tasks')

      setTasks(data);
  }

  useEffect(() => {

  }, [])

  return (
    <MainScreen title="Welcome Randunu">
      <Link to="createtask">
        <button type="button" className="btn btn-outline-primary">
          Create New Task
        </button>
      </Link>
      {tasks.map((task) => (
  
      <Accordion key={note._id}>
          <Accordion.Item eventKey="0">
      <Card style={{ margin: 10 }}>
       
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
             <Accordion.Header
                      
                      variant="link"
                      eventkey="0"
                    >
                      {note.title}
                    </Accordion.Header>
              </span>
            
              <div>
                <Button href="{'/note/${note._id}'}">Update</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Body>
              <Card.Body>
                <Card.Title>
                  <h4>
                    <Badge variant="success">Category - {note.category}</Badge>
                  </h4>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {note.Subtitle}
                </Card.Subtitle>
                <Card.Text>
                  {note.content}
                </Card.Text>
              </Card.Body>
              </Accordion.Body>
         
          </Card>
          </Accordion.Item>
    </Accordion>              
      ))}
    </MainScreen>
  );
};

export default MyTasks;
