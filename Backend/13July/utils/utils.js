const errMessage = {
    LOGIN : "Login Failed",
    SIGNUP : "Signup Failed",
    UPDATE : "Update Failed",
    DELETE : "Delete Failed"
}

const deleteMessage = (id) => {
    return errMessage.DELETE + id;
}

const statusCodes = {
    LOGIN : 401,
    SIGNUP : 401,
    UPDATE : 401,
    DELETE : 401,
    DEFAULT : 500,
    WRONGPAGE : 404,
    SUCCESS : 200
}

module.exports = {
    errMessage,
    deleteMessage,
    statusCodes
}