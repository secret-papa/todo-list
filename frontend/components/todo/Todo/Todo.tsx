import styles from './styles.module.css'
import type { TodoProps } from "./types";
import {MouseEventHandler} from "react";
import {useDeleteTodoMutate, useUpdateTodoMutation} from "@/components/todo/Todo/mutations";

export const Todo = ({ id, title, description, createdAt, updatedAt}: TodoProps) => {
    const { mutate: updateTodoMutate} = useUpdateTodoMutation()
    const { mutate: deleteTodoMutate } = useDeleteTodoMutate()

    const handleUpdateButtonClick: MouseEventHandler<HTMLButtonElement> = async (event) => {
        event.preventDefault()

        updateTodoMutate({id, title, description})
    }

    const handleDeleteButtonClick: MouseEventHandler<HTMLButtonElement> = async (event) => {
        event.preventDefault()

        deleteTodoMutate(id)
    }

    return (
        <div className={styles.root}>
            <div>
                <div>
                    <h3>{title}</h3>
                </div>
                <div>
                    {!!description && <p>{description}</p>}
                    <div>
                        <span>
                            {updatedAt > createdAt ?
                            `${updatedAt.getFullYear()}년 ${updatedAt.getMonth()}월 ${updatedAt.getDate()}일 ${updatedAt.getHours()}시 ${updatedAt.getMonth()}분 ${updatedAt.getSeconds()}초에 수정 됨` :
                            `${createdAt.getFullYear()}년 ${createdAt.getMonth()}월 ${createdAt.getDate()}일 ${createdAt.getHours()}시 ${createdAt.getMonth()}분 ${createdAt.getSeconds()}초에 생성 됨`}
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <button type="button" onClick={handleUpdateButtonClick}>Update</button>
                <button type="button" onClick={handleDeleteButtonClick}>Delete</button>
            </div>
        </div>
    )
}