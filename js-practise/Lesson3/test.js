

function checkPassword(password) {
    if (password.length < 8) {
        throw new Error("Password is too short")
    }
    return true;
}

try {
    checkPassword("1234567")
} catch (error) {
    console.error(error.message)
    console.log("Please try again with a longer password.")
}