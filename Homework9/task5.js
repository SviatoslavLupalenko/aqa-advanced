



const users = [
    { name: 'Alice', age: 30, email: 'alice@example.com' },
    { name: 'Bob', age: 25, email: 'bob@example.com' }
];

for (const { name, age, email } of users) {
    console.log(`Name: ${name}, Age: ${age}, Email: ${email}`);
}       