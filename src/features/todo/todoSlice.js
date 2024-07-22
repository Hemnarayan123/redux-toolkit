import { createSlice, nanoid } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const initialState = {
    todos: [{
        id: nanoid(),
        text: "Write a blog post",
    }]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // state.todos.push({
            //     id: nanoid(),
            //     title: action.payload,
            // })

          const todo = {
            id: nanoid(),
            text: action.payload,
          }  
          state.todos.push(todo)
        },


        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },

        editTodo : (state, action) => {
            const { id, text } = action.payload
            state.todos = state.todos.map(todo => todo.id === id? {...todo, text } : todo)
        },

        Product : (state, action) => {
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
        }

        
    }
    
})

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer;
