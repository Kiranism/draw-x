import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'
import { Separator } from '@/components/ui/Separator'
import ThemeMenuButton from '@/components/ThemeMenuButton'
import { nanoid } from 'nanoid'
import JoinRoomButtoon from '@/components/JoinRoomButton'
import { SocketIndicator } from '@/components/SocketIndicator'
import CreateRoomForm from './CreateRoomForm'
import { TITLE } from '@/lib/data/constants'
const CollobModal = () => {
  const roomId = nanoid()
  return (
    <Card className='translate-[-50%,-50%] absolute left-[50%] top-[50%]  w-[90vw] max-w-[400px]'>
      <CardHeader>
        <CardTitle>{TITLE}</CardTitle>
        <SocketIndicator />
        <CardDescription>
          Draw on the same canvas with your friends in real-time.
        </CardDescription>
      </CardHeader>

      <CardContent className='flex flex-col space-y-4'>
        <CreateRoomForm roomId={roomId} />

        <div className='flex items-center space-x-2 '>
          <Separator />
          <span className='text-xs text-muted-foreground'>OR</span>
          <Separator />
        </div>

        <JoinRoomButtoon />
      </CardContent>
    </Card>
  )
}

export default CollobModal
