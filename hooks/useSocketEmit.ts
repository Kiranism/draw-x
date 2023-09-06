import { useEffect } from 'react'
import { useSocket } from '@/components/providers/socket-provider'

export const useSocketEvents = () => {
  const { socket } = useSocket()

  // Function to add an event listener
  // @ts-ignore
  const onEvent = (eventName, callback) => {
    useEffect(() => {
      if (!socket) {
        return
      }
      socket.on(eventName, callback)

      // Cleanup: remove the event listener when the component unmounts
      return () => {
        socket.off(eventName, callback)
      }
    }, [socket, eventName, callback])
  }

  // Function to emit an event
  // @ts-ignore
  const emitEvent = (eventName, eventData) => {
    if (socket) {
      socket.emit(eventName, eventData)
    }
  }

  return { onEvent, emitEvent }
}
