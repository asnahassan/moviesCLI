const connection = require("./db/connections")
const yargs = require("yargs");
const { addMovie, listMovie, deleteMovie, updateMovie } = require("./utils")

const app = () => {
    try {
        switch (process.argv[2]) {
            case "add":
                connection(addMovie, {title: yargs.argv.title, actor: yargs.argv.actor})
                break;
            case "list":
                connection(listMovie);
                break;
            case "update":
                connection(updateMovie, {title: yargs.argv.title, actor: yargs.argv.actor});
                break;  
            case "delete":
                connection(deleteMovie, { title: yargs.argv.title, actor: yargs.argv.actor });   
                break;  
            default:
                console.log("incorrect command")
                break;
        }
    } catch (error) {
        console.log(error)
    }
}
app();