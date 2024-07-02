import {TodoList} from "@/components/todo/TodoList";
import {CreateTodo} from "@/components/todo/CreateTodo";

export default function Home() {
  return (
      <main>
          <CreateTodo />
        <TodoList />
      </main>
  );
}
