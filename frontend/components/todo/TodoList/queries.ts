import {useQuery} from "@tanstack/react-query";
import {fetchTodos} from "@/apis";

export const useFetchTodosQuery = () => {
    return useQuery({
       queryKey: ['todos'],
        queryFn: fetchTodos,
        select: (todos) => todos.map((todo) => ({
            ...todo,
            createdAt: new Date(todo.createdAt),
            updatedAt: new Date(todo.updatedAt),
        }))
    })
}