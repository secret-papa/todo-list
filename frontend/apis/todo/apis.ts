import type {Todo} from "@/apis/todo/types";

const BASE_URL = 'http://localhost:8080/api'

export const fetchTodo = async (id: string) => {
    const response = await fetch(`${BASE_URL}/todos/${id}`, {
        method: 'GET'
    })

    return await response.json()
}

export const fetchTodos = async (): Promise<Todo[]> => {
    const response = await fetch(`${BASE_URL}/todos`, {
        method: 'GET'
    })

    return await response.json()
}

export const createTodo = async (title: string, description?: string) => {
    await fetch(`${BASE_URL}/todos/create`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            title,
            description,
        })
    })
}

export const updateTodo = async (id: string, title: string, description?: string) => {
    await fetch(`${BASE_URL}/todos/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify({
            title: title + '*',
            description: description + '#'
        })
    })

}

export const deleteTodo = async (id: string) => {
    await fetch(`${BASE_URL}/todos/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'DELETE'
    })
}