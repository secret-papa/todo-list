package com.study.todo.todo.repositories

import com.study.todo.todo.domains.Todo
import org.springframework.data.jpa.repository.JpaRepository

interface TodoRepository: JpaRepository<Todo, String> {
}