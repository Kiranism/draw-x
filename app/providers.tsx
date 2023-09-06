'use client'

import { SocketProvider } from '@/components/providers/socket-provider'
import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute='class'>
      <SocketProvider>{children}</SocketProvider>
    </ThemeProvider>
  )
}
