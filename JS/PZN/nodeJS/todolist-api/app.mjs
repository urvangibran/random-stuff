import { response } from "express"
import http from "http"

const server = http.createServer((req, res) => {
    res.write("Todolist Jalan");
    res.end()
})

server.listen(3000)