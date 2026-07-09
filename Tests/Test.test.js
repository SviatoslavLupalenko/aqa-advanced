const axios = require('axios');
let globalToken 

test ("Login", async () => {
const response = await axios.post('https://bookstore.toolsqa.com/account/v1/authorized', {
   "userName": "Sviat",
   "password": "309609Rev#"
})
expect(response.status).toBe(200)
expect(response.data).toBe(true)
})



test ("Generate Token", async () => {
const response = await axios.post('https://bookstore.toolsqa.com/account/v1/generateToken',{
   "userName": "Sviat",
   "password": "309609Rev#"
})
expect(response.status).toBe(200)
expect(response.data.token.length).toBeGreaterThan(15)
globalToken = response.data.token
}
)

test ("See all books", async () => {
const response = await axios.get('https://bookstore.toolsqa.com/BookStore/v1/Books')
expect(response.status).toBe(200)
expect(response.data.books.length).toBeGreaterThan(6)
}
)     

test("Add book to user", async () => {
    const tokenResponse = await axios.post('https://bookstore.toolsqa.com/account/v1/generateToken', {
        "userName": "Sviat",
        "password": "309609Rev#"
    });
    const response = await axios.post('https://bookstore.toolsqa.com/BookStore/v1/Books', {
        "userId": "bc4111f3-bd30-49f3-bfd2-37dbbad9d78b",
        "collectionOfIsbns": [{
            "isbn": "9781449325862"
        }]
    }, {
        headers: {
            'Authorization': `Bearer ${tokenResponse.data.token}`,
            'Content-Type': 'application/json'
        }
    });
});

test ("Check books", async () => {
    const response = await axios.get('https://bookstore.toolsqa.com/BookStore/v1/Book?ISBN=9781449365035')
    expect(response.status).toBe(200)   
    expect(response.data.title).toBe("Speaking JavaScript")
})



