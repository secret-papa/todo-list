package com.example.todoService.todo.services

import com.study.todo.todo.domains.Todo
import org.springframework.context.annotation.Bean
import org.springframework.stereotype.Component
import java.util.function.Consumer

@Component
class TodoHandler {
    @Bean
    fun handleTodo() = Consumer<Todo> {
        println(it.toString())
    }
}