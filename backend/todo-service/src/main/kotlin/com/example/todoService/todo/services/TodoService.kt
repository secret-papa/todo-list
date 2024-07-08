package com.example.todoService.todo.services

import com.example.todoService.todo.repositories.TodoRepository
import com.study.todo.todo.domains.Todo
import org.springframework.stereotype.Service

@Service
class TodoService(
    val todoRepository: TodoRepository
) {

    fun getTodo(): List<Todo> {
        return todoRepository.findAll()
    }
}