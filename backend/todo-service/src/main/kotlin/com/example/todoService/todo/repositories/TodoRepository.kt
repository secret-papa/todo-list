package com.example.todoService.todo.repositories

import com.study.todo.todo.domains.Todo
import org.springframework.data.mongodb.repository.MongoRepository

interface TodoRepository: MongoRepository<Todo, String> {
}