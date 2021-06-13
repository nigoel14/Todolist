var input = prompt("Welcome to my app")
var myarray = []
while (input != "quit") {

    var action = prompt("Pls tell action  you want ! add,delete,list or quit")

    while (true) {
        if (action == "add") {

            console.log("Hi let's add something!")
            var add = prompt("add items")
            myarray.push(add)
            console.log(`${add}`)

            break




        }
        if (action == "delete") {
            console.log("Ok i agree You wana delete ! Let's delete den")
            const index = prompt("Pls tell index you wana delete")
            myarray.splice(index, 1)
            break
        }
        if (action == 'list') {
            console.log(`${myarray}`)
            break
        }
        if (action == "quit") {
            console.log("Ok I quit")
            break

        }
    }


    if (action == "quit") {
        console.log("Ok I quit")
        break

    }
    else {
        input = prompt("enter correct command")
    }






}


console.log("ok I quit")