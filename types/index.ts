import type { User } from '@/stores/userStore'
import type { DrawProps } from '@/hooks/useDraw'
import { Server as NetServer, Socket } from 'net'
import { NextApiResponse } from 'next'
import { Server as SocketIOServer } from 'socket.io'

export type NextApiResponseServerIo = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: SocketIOServer
    }
  }
}

export interface JoinRoomData {
  roomId: string
  username: string
}

export interface RoomJoinedData {
  user: User
  roomId: string
  members: User[]
}

export interface Notification {
  title: string
  message: string
}

export interface DrawOptions extends DrawProps {
  strokeColor: string
  strokeWidth: number[]
  dashGap: number[]
}
