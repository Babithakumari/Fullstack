import './App.css';
import Course from './Components/Course.js'

function App() {
  const courses = [{
    id:1,
    name: "Half Stack Application Development",
    parts:[
      {
        id:1,
        name:"Fundamentals of React",
        exercises: 10

      },
      {
        id:2,
        name:"Using props to pass data",
        exercises: 7

      },
      {
        id:3,
        name:"State of a component",
        exercises: 14

      },
      {
        id:4,
        name:"Redux",
        exercises: 11

      }

    ]

  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]
  return (
    <>
    <h2>Web Development Curriculum</h2>
    {
        courses.map(course=><Course course={course}></Course>)
    }
    </>
    
   
  );
}

export default App;
