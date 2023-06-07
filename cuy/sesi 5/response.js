const response = (statusCode, data, message, res) => {
    res.json(statusCode, [{
        data,
        message,
        metadata: {
            prev: "",
            current: "",
            next: "",
        },
    }, 
    ])
}

module.exports = response