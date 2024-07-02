package com.study.todo.todo

import com.study.todo.todo.domains.Todo
import com.study.todo.todo.repositories.TodoRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.time.Instant

@RestController
@RequestMapping("/api/todos")
class TodoController(
    val todoRepository: TodoRepository
) {
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

        return ResponseEntity(HttpStatus.CREATED)
    }

    @DeleteMapping("/{id}")
    fun deleteTodo(@PathVariable id: String): ResponseEntity<Any> {
        todoRepository.deleteById(id)

        return ResponseEntity(HttpStatus.OK)
    }

    @PutMapping("/{id}")
    fun updateTodo(@PathVariable id: String, @RequestBody body: Todo): ResponseEntity<Any> {
        val todo = todoRepository.findByIdOrNull(id) ?: return ResponseEntity(HttpStatus.NOT_FOUND)

        todo.title = body.title
        todo.description = body.description
        todo.updatedAt = Instant.now()

        todoRepository.save(todo)

        return ResponseEntity(HttpStatus.OK)
    }
}