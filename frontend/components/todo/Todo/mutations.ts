import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteTodo, updateTodo} from "@/apis";

export const useUpdateTodoMutation = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({id, title, description}: { id: string; title: string; description?: string}) => updateTodo(id, title, description),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['todos']})
        }
    })
}

export const useDeleteTodoMutate = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (id: string) => deleteTodo(id),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['todos']})
        }
    })
}
