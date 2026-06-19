const promise1 = async function findDo (todo) {
   const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todo}`)
   const result = await response.json()
   return result
}

const promise2 = async function findUser (user) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
    const result = await response.json()
    return result
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