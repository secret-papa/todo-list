import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createTodo} from "@/apis";

export const useCreateTodoMutation = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({ title, description }: { title: string, description?: string }) => createTodo(title, description),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['todos']})
        }
    })
}