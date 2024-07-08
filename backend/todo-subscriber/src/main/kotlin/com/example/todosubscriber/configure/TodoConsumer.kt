package com.example.todosubscriber.configure

import org.springframework.messaging.Message
import org.springframework.stereotype.Service

@Service
class TodoConsumer {
    @StreamListener('publishTodo')
    fun consume(message: Message<Todo>) {

    }
}