const users = []

//addUser 
const addUser = ({ id, username, room}) => {
    //reformat the data or clean data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //Validate the data
    if(!username || !room) {
        return {
            error: 'Username and Room should be provided'
        }
    }

    //Check for existing user 
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    }) 

    //validate username
    if(existingUser) {
        return {
            error: 'Username already in use'
        }
    }

    //store user
    const user = { id, username, room }
    users.push(user)
    return { user }
}


const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if(index !== -1) {
        return users.splice(index, 1)[0]
    }
    
}


//getUser
const getUser = (id) => {
    return users.find((user) => user.id === id)
}


//getUsersInRoom: to get users in a room
const getUsersInRoom = (room) => {
    return findRoom = users.filter((user) => user.room === room)   
}


module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}