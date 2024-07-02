import { useRouter } from 'next/router'
import {TodoDetail} from "@/components/todo/TodoDetail";

export default function TodoDetailPage() {
    const router = useRouter()

    return (
        <main>
            <nav>
                <button type="button" onClick={() => {
                    router.back()
                }}>Back</button>
            </nav>
            {!!router.query.id && <TodoDetail id={router.query.id as string} />}
        </main>
    );
}
