import { useRef } from "react";

import styles from './styles.module.css'
import {useCreateTodoMutation} from "@/components/todo/CreateTodo/mutations";

export const CreateTodo = () => {
    const titleRef = useRef<HTMLInputElement>(null)
    const desRef = useRef<HTMLTextAreaElement>(null)
    const { mutate: createTodoMutate} = useCreateTodoMutation()

    const handleCreateButtonClick = async () => {
        if (titleRef.current === null || desRef.current === null) {
            return
        }

        if (!titleRef.current.value) {
            alert('Title must be input')
            return
        }

        createTodoMutate({
            title: titleRef.current.value,
            description: desRef.current.value
        }, {
            onSuccess: () => {
                if (titleRef.current === null || desRef.current === null) {
                    return
                }

                titleRef.current.value = ''
                desRef.current.value = ''
            }
        })
    }



    return (
        <div className={styles.root}>
            <input ref={titleRef} placeholder="Title" />
            <textarea ref={desRef} placeholder="Description" />
            <button type="button" onClick={handleCreateButtonClick}>생성</button>
        </div>
    )
}