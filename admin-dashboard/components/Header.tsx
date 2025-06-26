"use client"

const socket = new WebSocket("ws://localhost:8080/ws")

socket.onopen = () => {
  console.log("WebSocket connection established")
}

