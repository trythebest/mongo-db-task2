// Design database for Zen class programme

// =>users


db.users.insertMany([
    {
      userid: 1,
      name: "Mani",
      email: "Mani@gmail.com",
      mentorid: 1,
    },
    {
      userid: 2,
      name: "charan",
      email: "charan@gmail.com",
      mentorid: 2,
    },
    {
      userid: 3,
      name: "nirmal",
      email: "nirmal@gmail.com",
      mentorid: 3,
    },
    {
      userid: 4,
      name: "arul",
      email: "arul@gmail.com",
      mentorid: 4,
    },
    {
      userid: 5,
      name: "bharani",
      email: "bharani@gmail.com",
      mentorid: 5,
    },
  ]);


// => Codekata 


db.codekata.insertMany([
    {
      userid: 1,
      problems: 13,
    },
    {
      userid: 2,
      problems: 8,
    },
    {
      userid: 3,
      problems: 101,
    },
    {
      userid: 4,
      problems: 24,
    },
    {
      userid: 5,
      problems: 33,
    },
  ]);


// => attendance 



db.attendance.insertMany([
    {
      userid: 1,
      topicid: 1,
      attended: true,
    },
    {
      userid: 2,
      topicid: 2,
      attended: true,
    },
    {
      userid: 3,
      topicid: 3,
      attended: false,
    },
    {
      userid: 4,
      topicid: 4,
      attended: false,
    },
    {
      userid: 5,
      topicid: 5,
      attended: true,
    },
  ]);
  
//=> Topics
  
db.topics.insertMany([
    {
      topicid: 1,
      topic: "html",
      topic_date: new Date("4-oct-2020"),
    },
    {
      topicid: 2,
      topic: "css",
      topic_date: new Date("10-oct-2020"),
    },
    {
      topicid: 3,
      topic: "Javascript",
      topic_date: new Date("15-oct-2020"),
    },
    {
      topicid: 4,
      topic: "React",
      topic_date: new Date("20-oct-2020"),
    },
    {
      topicid: 5,
      topic: "NodeJs",
      topic_date: new Date("25-oct-2020"),
    },
  ]);


  //=> Tasks

  db.tasks.insertMany([
    {
      taskid: 1,
      topicid: 1,
      userid: 1,
      task: "html task",
      due_date: new Date("4-oct-2020"),
      submitted: true,
    },
    {
      taskid: 2,
      topicid: 2,
      userid: 2,
      task: "css task",
      due_date: new Date("10-oct-2020"),
      submitted: true,
    },
    {
      taskid: 3,
      topicid: 3,
      userid: 3,
      task: "Javascript task",
      due_date: new Date("15-oct-2020"),
      submitted: false,
    },
    {
      taskid: 4,
      topicid: 4,
      userid: 4,
      task: "React task",
      due_date: new Date("20-oct-2020"),
      submitted: false,
    },
    {
      taskid: 5,
      topicid: 5,
      userid: 5,
      task: "Node task",
      due_date: new Date("25-oct-2020"),
      submitted: false,
    },
  ]);



  //=> Company Drivers date

  db.comapanydrives.insertMany([
    {
      userid: 1,
      drive_date: new Date("10-oct-2020"),
      company: "Google",
    },
    {
      userid: 1,
      drive_date: new Date("15-oct-2020"),
      company: "Amazon",
    },
    {
      userid: 2,
      drive_date: new Date("20-oct-2020"),
      company: "SAP labs",
    },
    {
      userid: 3,
      drive_date: new Date("25-oct-2020"),
      company: "Mac App studio",
    },
    {
      userid: 4,
      drive_date: new Date("27-oct-2020"),
      company: "Freshworks",
    },
  ]);
 



  //=> Mentors

  db.mentors.insertMany([
    {
      mentorid: 1,
      mentorname: "vijay",
      mentor_email: "vijay@gmail.com",
    },
    {
      mentorid: 2,
      mentorname: "ajith",
      mentor_email: "ajith@gmail.com",
    },
    {
      mentorid: 3,
      mentorname: "saimohan",
      mentor_email: "saimohan@gmail.com",
    },
    {
      mentorid: 4,
      mentorname: "ragavkumar",
      mentor_email: "ragav@gmail.com",
    },
    {
      mentorid: 5,
      mentorname: "prathab",
      mentor_email: "prathab@gmail.com",
    },
  ]);
  