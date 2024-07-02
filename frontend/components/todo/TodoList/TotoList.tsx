import Link from "next/link";

import styles from './styles.module.css'
import { Todo as TodoComp } from '../Todo'
import {useFetchTodosQuery} from "@/components/todo/TodoList/queries";


export const TodoList = () => {
    const { data: todos } = useFetchTodosQuery()

    if (!todos) {
        return
    }

    return (
        <ul className={styles.root}>
            {todos.map(({ id, title, description, createdAt, updatedAt }) => (
                <li key={id}>
                    <Link href={`/todos/${id}`}>
                        <TodoComp
                            id={id}
                            title={title}
                            description={description}
                            createdAt={createdAt}
                            updatedAt={updatedAt}
                        />
                    </Link>
                </li>))}
        </ul>
    )
}