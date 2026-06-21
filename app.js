const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


 const task = [
    {
      "id": 1,
      "title": "Set up environment",
      "description": "Install Node.js, npm, and git",
      "completed": true
    },
    {
      "id": 2,
      "title": "Create a new project",
      "description": "Create a new project using the Express application generator",
      "completed": true
    },
    {
      "id": 3,
      "title": "Install nodemon",
      "description": "Install nodemon as a development dependency",
      "completed": true
    },
    {
      "id": 4,
      "title": "Install Express",
      "description": "Install Express",
      "completed": false
    },
    {
      "id": 5,
      "title": "Install Mongoose",
      "description": "Install Mongoose",
      "completed": false
    },
    {
      "id": 6,
      "title": "Install Morgan",
      "description": "Install Morgan",
      "completed": false
    },
    {
      "id": 7,
      "title": "Install body-parser",
      "description": "Install body-parser",
      "completed": false
    },
    {
      "id": 8,
      "title": "Install cors",
      "description": "Install cors",
      "completed": false
    },
    {
      "id": 9,
      "title": "Install passport",
      "description": "Install passport",
      "completed": false
    },
    {
      "id": 10,
      "title": "Install passport-local",
      "description": "Install passport-local",
      "completed": false
    },
    {
      "id": 11,
      "title": "Install passport-local-mongoose",
      "description": "Install passport-local-mongoose",
      "completed": false
    },
    {
      "id": 12,
      "title": "Install express-session",
      "description": "Install express-session",
      "completed": false
    },
    {
      "id": 13,
      "title": "Install connect-mongo",
      "description": "Install connect-mongo",
      "completed": false
    },
    {
      "id": 14,
      "title": "Install dotenv",
      "description": "Install dotenv",
      "completed": false
    },
    {
      "id": 15,
      "title": "Install jsonwebtoken",
      "description": "Install jsonwebtoken",
      "completed": false
    }
  ]

// Task1:- Implement GET /tasks: Retrieve all tasks.
app.get("/tasks", (req,res)=>{

     res.send(task);
})


//Task2:- Implement GET /tasks/:id: Retrieve a specific task by its ID.
app.get("/tasks/:id", (req,res)=>{
  try
  {
     console.log(req.params);
     let {id} = req.params;
     if( id > task.length)
     {
      console.log("first create this id before get the same id Okay!!!!!!")
      throw new Error("No such ID exist!")
     }
     res.send(task[id - 1]);
  }
  catch(err)
  {
    res.status(404).send("Error: "+err.msg)
  }
     
})

//Task3:- Implement POST /tasks: Create a new task with the required fields (title, description, completed).
app.post("/tasks", (req,res)=>{
    try{
        console.log(req.body);
        let newTask = req.body;
        if( newTask.title.length === 0 || newTask.description.length === 0 || typeof newTask.completed !== "boolean")
        {
          console.log("Invalid Input");
          throw new Error("Invalid Entries");
        }
        else
        {
          let obj = {
            'id':newTask.id,
            'title':newTask.title,
            'description':newTask.description,
            'completed':newTask.completed,
            'priority':newTask.priority
          }
        console.log(task.length+" before pushing new task");
        console.log(obj);
        task.push(obj);
        console.log(task.length+" after pushing new task");
        console.log(obj);
        res.status(201).send("New Data creation successful");
        }
        
    }
    catch(err)
    {
      res.status(400).send("Error "+ err.message);
    }
})


// Replacing the whole-object with incoming new object.
//Task4:- Implement PUT /tasks/:id: Update an existing task by its ID.
app.put("/tasks/:id", (req,res)=>{
  try
  {
    let {id} = req.params;
    let updatedData = req.body;
    const idExist = task.some(function(item) 
    {
      return item.id === Number(id);
    });
    if( !idExist )
    {
        console.log("Requested-ID Doesn't Exist")
        throw new Error("Requested-ID Doesn't Exist")
    }
    
    if( updatedData.title.length === 0 || updatedData.description.length === 0 || typeof updatedData.completed !== "boolean")
    {
          console.log("Invalid Input");
          throw new Error("Invalid Input");
    }
    else
    {
      console.log("Updating the existing starts now................✌️")
      let updatedObjData = 
      {
          'id':Number(id),
          'title':updatedData.title,
          'description':updatedData.description,
          'completed':updatedData.completed,
          'priority':updatedData.priority
      }
      let ourId;
      for(let i=0; i<task.length; i++)
      {
        if( task[i].id === Number(id))
        {
          ourId = i;
        }
      }
      task[ourId] = updatedObjData;

       console.log(task[id-1]);
       res.send("updation successfully "+task[ourId]);
       console.log("Updation successful bro😎!!")
    }

  }catch(err){
    if(err.message === "Requested-ID Doesn't Exist")
    {
      res.status(404).send("Error: "+err.message)
    }
    else
    {
      res.status(400).send("Error: "+err.message);
    }
  }
    
})

// Task5:-Implement DELETE /tasks/:id: Delete a task by its ID.
// DELETE using SPLICE()-method.
app.delete("/tasks/:id", (req,res)=>
{
  try
  {
      console.log(req.params);
     let {id} = req.params;
     if( id > task.length)
     {
      console.log("first create this id before get the same id Okay!!!!!!")
      throw new Error("No such ID exist!")
     }
     console.log(task.length);
     res.send(task.splice(id-1,1));
     console.log(task.length);
     console.log("Deletion successful bro😎!!")
  }
  catch(err)
  {
     res.status(404).send("Error: "+err.msg);
  }
     
})

// Task6:-Implement GET /tasks/priority/:level: Retrieve tasks by priority level.
app.get("/tasks/priority/:level", (req,res)=>{
  const {level} = req.params;
const highPriorityTasks = task.filter(function(item) {
  return item.priority === level;
});
console.log(task.length);
console.log(highPriorityTasks);
res.send(highPriorityTasks);
})

app.listen(port, (err) => {
    if (err) 
    {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});

module.exports = app;

