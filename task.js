//task-1



db.topics.aggregate([
    {
      $lookup: {
        from: "tasks",
        localField: "topicid",
        foreignField: "topicid",
        as: "taskinfo",
      },
    },
    {
      $match: {
        $and: [
          {
            $or: [
              { topic_date: { $gt: new Date("30-sep-2020") } },
              { topic_date: { $lt: new Date("1-nov-2020") } },
            ],
          },
  
          {
            $or: [
              { "taskinfo.due_date": { $gt: new Date("30-sep-2020") } },
              { "taskinfo.due_date": { $lt: new Date("1-nov-2020") } },
            ],
          },
        ],
      },
    },
  ]);
  
  
  //task-2
  
  db.comapanydrives.find({
    $or: [
      { drive_date: { $gte: new Date("15-oct-2020") } },
      { drive_date: { $lte: new Date("31-0ct-2020") } },
    ],
  });


  
  //task-3
  
  db.comapanydrives.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "userid",
        foreignField: "userid",
        as: "userinfo",
      },
    },
    {
      $project: {
        _id: 0,
        "userinfo.name": 1,
        company: 1,
        drive_date: 1,
        "userinfo.email": 1,
        "userinfo.userid": 1,
      },
    },
  ]);

  //task-4
  
  db.codekata.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "userid",
        foreignField: "userid",
        as: "userinfo",
      },
    },
    {
      $project: {
        _id: 0,
        userid: 1,
        problems: 1,
        "userinfo.name": 1,
      },
    },
  ]);
  
  
  //task-5
  
  db.users.aggregate([
    {
      $lookup: {
        from: "mentors",
        localField: "mentorid",
        foreignField: "mentorid",
        as: "mentorInfo",
      },
    },
    {
      $group: {
        _id: {
          mentorid: "$mentorInfo.mentorid",
          mentorname: "$mentorInfo.mentorname",
        },
        mentee_count: { $sum: 1 },
      },
    },
    { $match: { mentee_count: { $gt: 15 } } },
    
  ]);
  //task-6
  
  db.attendance.aggregate([
    {
      $lookup: {
        from: "topics",
        localField: "topicid",
        foreignField: "topicid",
        as: "topics",
      },
    },
    {
      $lookup: {
        from: "tasks",
        localField: "topicid",
        foreignField: "topicid",
        as: "tasks",
      },
    },
    { $match: { $and: [{ attended: false }, { "tasks.submitted": false }] } },
    {
      $match: {
        $and: [
          {
            $or: [
              { "topics.topic_date": { $gte: new Date("15-oct-2020") } },
              { "topics.topic_date": { $lte: new Date("31-oct-2020") } },
            ],
          },
          {
            $or: [
              { "tasks.due_date": { $gte: new Date("15-oct-2020") } },
              { "tasks.due_date": { $lte: new Date("31-oct-2020") } },
            ],
          },
        ],
      },
    },
    {
      $count: "No_of_students_absent",
    },
  ]);