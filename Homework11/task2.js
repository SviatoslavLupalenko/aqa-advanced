const promise1 = function findDo (todo) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${todo}`)
.then (result => result.json())
.then (json => json)
}

const promise2 = function findUser (user) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
    .then (userID => userID.json())
    .then (json => json)
}

const allPromises = [promise1(2), promise2(2)]


Promise.all(allPromises)
.then ((results) => {
    const todo = results[0]
    const user = results[1]
    console.log(todo)
    console.log(user)
    console.log("______________")
})


Promise.race(allPromises)
.then((winner) => {
    const firstWinner = winner
    console.log(firstWinner)
})