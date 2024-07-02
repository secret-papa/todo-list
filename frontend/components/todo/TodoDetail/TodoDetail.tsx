import {TodoDetailProps} from "@/components/todo/TodoDetail/types";
import {useFetchTodoQuery} from "@/components/todo/TodoDetail/queries";

export const TodoDetail = ({ id }: TodoDetailProps) => {
    const { data: todo} = useFetchTodoQuery(id)

    if (!todo) return

    return (
        <div>
            <div>
                <h3>{todo.title}</h3>
            </div>
        </div>
    )
}