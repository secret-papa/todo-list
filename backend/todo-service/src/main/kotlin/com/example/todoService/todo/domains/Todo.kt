package com.study.todo.todo.domains

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.time.Instant
import java.util.UUID

@Document(collection = "Todo")
data class Todo (
    @Id
    val id: String? = UUID.randomUUID().toString(),
    var title: String,
    var description: String?,
    var createdAt: Instant? = Instant.now(),
    var updatedAt: Instant? = Instant.now()
)