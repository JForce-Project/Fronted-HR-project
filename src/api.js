import axios from "axios"

export const EnvanterlerList = async () => {
   return  axios.get('http://localhost:8080/getListInventory', {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlc2VuIiwiZXhwIjoxNjY2MDU3MTUyLCJpYXQiOjE2NjYwMzkxNTJ9.MawIR6LIL6QUBct0s65WIHx3q0FShvmVYsGHpWXJF8I' 
        }
    })

}