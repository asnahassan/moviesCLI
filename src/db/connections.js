const { MongoClient } = require("mongodb")// allows a new mongo cline to manipulate 
require ("dotenv").config();// access .env file

const connection = async (crudFunc, dataObj) => { //taking a crudfunc and data object and pass through 
    try {// handle errors
        const client = new MongoClient(process.env.MONGO_URI)// defining a new client 
        await client.connect()// awaiting to connect to cloud hosting, doing soemthing out side the node 
        console.log("Successful")// to know it is successful
        const db = client.db("movies")//create a db inside the client
        const collection = db.collection("movies")// create a collection in the client
        await crudFunc(collection, dataObj)//call function to manipulate collection and data object

        client.close()
        console.log("clients closed")//closes the clients 
    } catch (error) {
        console.log(error)
    }
}
module.exports = connection