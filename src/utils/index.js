const addMovie = async (collection, dataObj) => {
    try {
        await collection.insertOne(dataObj);
        console.log("successful")
    } catch (error) {
        console.log(error)
    }
}

const deleteMovie = async (collection, deleteObj) => {
    try {
        await collection.deleteOne({ name: deleteObj.name });
        console.log("successfully deleted")
    } catch (error) {
        console.log(error)
    }
}


const updateMovie = async (collection, updateObj) => {
    try {
        await collection.updateOne( { $set: { title: updateObj.title }},
        { $set: { actor: updateObj.actor } })
        console.log("successfully updated")
    } catch (error) {
        console.log(error)
    }
}


const listMovie = async (collection) => {
    try {
        const movieList = await collection.find({}).toArray();
        console.log(movieList);
    } catch (error) {
        console.log(error)
    }
}



module.exports = { addMovie , deleteMovie, updateMovie, listMovie }
