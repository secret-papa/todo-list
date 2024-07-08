package com.example.todoService.todo

import com.example.todoService.todo.repositories.TodoRepository
import com.study.todo.todo.domains.Todo
import org.springframework.cloud.stream.function.StreamBridge
import org.springframework.data.repository.findByIdOrNull
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.time.Instant

@RestController
@RequestMapping("/api/todos")
class TodoController(private val todoRepository: TodoRepository, private val streamBridge: StreamBridge) {
    @GetMapping
    fun findAll(): List<Todo> {
        return todoRepository.findAll()
    }

    @GetMapping("/{id}")
    fun findById(@PathVariable("id") id: String): ResponseEntity<Todo> {
        val todo = todoRepository.findByIdOrNull(id)

        return if (todo == null) {
            ResponseEntity(null, HttpStatus.NOT_FOUND)
        } else {
            ResponseEntity(todo, HttpStatus.OK)
        }
    }

    @PostMapping("/create")
    fun createTodo(@RequestBody body: Todo): ResponseEntity<Todo> {
        val todo =  Todo(title = body.title, description =  body.description)

        todoRepository.save(todo)

        streamBridge.send("handleTodo-out-0", todo)

        return ResponseEntity(HttpStatus.CREATED)
    }

    @DeleteMapping("/{id}")
    fun deleteTodo(@PathVariable id: String): ResponseEntity<Any> {
        todoRepository.deleteById(id)

        return ResponseEntity(HttpStatus.OK)
    }

    @PutMapping("/{id}")
    fun updateTodo(@PathVariable id: String, @RequestBody body: TodoDTO): ResponseEntity<Any> {
        val todo = todoRepository.findByIdOrNull(id) ?: return ResponseEntity(HttpStatus.NOT_FOUND)

        todo.title = body.title
        todo.description = body.description
        todo.updatedAt = Instant.now()

        todoRepository.save(todo)

        return ResponseEntity(HttpStatus.OK)
    }
}

data class TodoDTO(
    var title: String,
    var description: String?
)