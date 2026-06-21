# Task_Management_API_PROJECT

## Overview

This is a simple REST API built with Node.js and Express for managing tasks. The API allows users to create, retrieve, update, delete, and filter tasks based on criteria such as priority.

Tasks are stored in memory as an array of objects and contain the following fields:

Schema of each object:-
* "id" - Unique task identifier
* "title" - Task title
* "description" - Task description
* "completed" - Completion status (`true` or `false`)
* "priority" - Task priority (e.g., high, medium, low)

-----------------------------------------------------------------------------

### Setup Instructions

## Installation

1. Clone the repository

git clone <repository-url>
cd <project-folder>

2. Install dependencies

npm install -> created node_modules folder in the project folder.


3. Start the server

node app.js


or else nodemon:

nodemon app.js
then update in package.json file:-
"start":"nodemon app.js"

4. Open your browser(before this make sure server is running):-

http://localhost:3000


---------------------------------------------------------------

## API Endpoints

### 1. Get All Tasks

GET /tasks

Returns all tasks.

GET http://localhost:3000/tasks

ex:- 
app.get("/tasks", (req,res)=>{

     res.send(task);
});


### 2. Get Task by ID


GET /tasks/:id

Returns a specific task by its ID.

GET http://localhost:3000/tasks/1

ex:-
app.get("/tasks/:id", (req,res)=>{
     console.log(req.params);
     let {id} = req.params;
     res.send(task[id - 1]);
})

### 3. Create a New Task


POST /tasks




Creates a new task.



{
  "id": 16,
  "title": "Learn Express",
  "description": "Build REST APIs",
  "completed": false,
  "priority": "high"
}


POST http://localhost:3000/tasks

ex:-
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
        res.send(" New Data creation successful and SAVED bro😎!!");
        }
        
    }
    catch(err)
    {
      res.status(400).send("Error "+ err.message);
    }
})


---

### 4. Update a Task


PUT /tasks/:id

Updates an existing task.

PUT http://localhost:3000/tasks/1

updated task:- (looks like this)
{
  "title": "Updated Task",
  "description": "Updated Description",
  "completed": true,
  "priority": "medium"
}



---

### 5. Delete a Task - reduce task-array length.


DELETE /tasks/:id

Deletes a task by ID.

DELETE http://localhost:3000/tasks/1


---

### 6. Filter Tasks by Priority


GET /tasks/priority/:level

Returns all tasks matching the specified priority level.

GET http://localhost:3000/tasks/priority/High

Response:-
[
  {
    "id": 1,
    "title": "Set up environment",
    "priority": "High"
  }
]


---

### Testing the API

## Using Postman

1. Open Postman.
2. Select the appropriate HTTP method (GET, POST, PUT, DELETE).
3. Enter the API URL.
4. For POST and PUT requests:

   * Select **Body**
   * Choose **raw**
   * Select **JSON**
   * Enter the request payload.
5. Click **Send**.

### Example POST Request

{
  "id": 20,
  "title": "Create README",
  "description": "Document project APIs",
  "completed": false,
  "priority": "high"
}


------------------------------------

## Technologies Used

* Node.js
* Express.js
* JavaScript
* Postman

--------------------------------------------------

## Author

Ahmed Khan - Backend Developer!
