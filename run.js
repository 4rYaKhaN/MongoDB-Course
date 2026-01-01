import { MongoClient } from "mongodb";

const client = new MongoClient("");
const dbNAME = client.db("mongocourse");
const db = dbNAME.collection("students");
console.clear();
(async () =>{
  try{
    // Read
    await client.connect();
    console.log('Connected to MongoDB Server');
    // let allStudents = await db.find({sport : 'regularly' , firstchild : 'yes'}).toArray()
    // let StudentsCount = await db.countDocuments({sport : 'regularly' , firstchild : 'yes'})
    // let counutSchoolBus = await db.countDocuments({transport : "school_bus"})
    // let Maries = await db.find({name : new RegExp("Mary",'i')}).toArray()
    // let CountMary = await db.countDocuments({name : new RegExp('Mary','i')})
    // let Maries = await db.find({name : /mary/i}).toArray()
    // let Maries = await db.find({name : /^mary/}).toArray()
    // let count = Maries.length
    // console.log(Maries, '\n' , count)

    // let MarWithBus = await db.find({name : /Mar/ , transport : 'school_bus'}).toArray()
    // console.log(MarWithBus)

    // let HigherThen160 = await db.find({ height: { $gt : 160 } }).toArray()
    // let LowerThan170 = await db.find({ height : {$lt : 170} }).toArray()
    // let NormalHeight = await db.find({height : {$gt : 165 , $lt : 180}}).toArray()
    // let HigherOrEqual = await db.find({id : { $gte : 100 , $lte : 200 }}).toArray()
    // let id200to800 = await db.find({ sport : 'sometimes' , id : { $gte : 200 , $lte : 800 } , height : {$gte : 160} }).toArray()
    // console.log(id200to800)

    // $gt : Greather Than => {height : {$gt : 170}}
    // $lt : Less Than => {height : {$lt : 185}}
    // $lte : Less Than Equal => {id : {$lte : 500}}
    // $gte : Greather Than Equal => {id : {$gte : 800}} 
    // Use Multi Oprattor => {height : {$lte : 185 , $gte : 160}}

    // let justOne = await db.findOne({parentedu : 'some college'})
    // console.log(justName , '\n' , typeof justName)

    // let Marrieds = await db.find({pmartialstatus : 'married'}).project({_id : 0 , name : 1 , pmartialstatus : 1}).toArray()
    // console.log(Marrieds)

    // let HighThen165JustName = await db.find({name : new RegExp('mar' , 'i')})
    // let HighThen165JustName = await db.find({name : /mar/i , height : {$gt : 165}}).project({_id : 0 , id: 1 , name : 1 , height : 1}).toArray()
    // console.log(HighThen165JustName)

    // let privateAndTall = await db.find({transport : 'private' , height : {$gt : 180} , id : {$lte : 900}}).project({_id : 0 , id : 1 , name : 1 , transport : 1}).toArray()

    let privateAndTall = await db.find({transport : 'private' , height : {$gt : 180} , id :{$lte : 900}}).project({_id : 0 , name : 1 , height : 1 , transport :1}).toArray()

    console.log(privateAndTall)

    process.exit()
  }catch(e){
    console.log(console.log(e))
  }
})();
