let choice = prompt('What would you like to do?')

const todos = ['Coding Ninjas Work', 'Design Work']



while (choice !== "quit" && choice !== "q'") {
    choice = prompt('What would you like to do?')

    if (choice === "list") {
        console.log('*********');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log('*********');
    }
    else if (choice === "new") {
        let newTask = prompt('Okay, type the new task');
        todos.push(newTask);
        console.log(`${newTask} : Added to the list `)
    }
    else if (choice === "delete") {
        let index = parseInt(prompt('Okay, what index is to be deleted?'))
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1)
            console.log(`Ok, deleted ${deleted[0]}`);
        }
        else {
            console.log("Unknown Index")
        }
    }
}

console.log('You quit the app!');
