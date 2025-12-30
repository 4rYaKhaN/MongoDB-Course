import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://mongocourse:2cjsz4SPND8vgQzcWUhwdr2w6@udb.qepal.com:8302/?authSource=admin");
const dbNAME = client.db("mongocourse");
const db = dbNAME.collection("students");
console.clear();
(async () =>{
  try{
    await client.connect();
    console.log('Connected to MongoDB Server');
    let allStudents = await db.find({sport : 'regularly' , firstchild : 'yes'}).toArray()
    let StudentsCount = await db.countDocuments({sport : 'regularly' , firstchild : 'yes'})
    let counutSchoolBus = await db.countDocuments({transport : "school_bus"})
    console.log(counutSchoolBus)
    process.exit()
  }catch(e){
    console.log(console.log(e))
  }
})();