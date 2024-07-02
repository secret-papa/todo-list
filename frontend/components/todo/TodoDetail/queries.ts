import {useQuery} from "@tanstack/react-query";
import {fetchTodo} from "@/apis";

export const useFetchTodoQuery = (id: string) => {
    return useQuery({
        queryKey: ['todos', id],
        queryFn: () => fetchTodo(id),
        enabled: !!id,
    })
}