'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useSocket } from './providers/socket-provider'

export default function LeaveButton() {
  const router = useRouter()
  const { socket } = useSocket()
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Button
      variant='destructive'
      className='absolute bottom-0 w-full'
      onClick={() => {
        setIsLoading(true)
        socket.emit('leave-room')
        setTimeout(() => {
          router.replace('/')
        }, 600)
      }}
    >
      {isLoading ? <Loader2 className='h-4 w-4 animate-spin' /> : 'Leave Room'}
    </Button>
  )
}
