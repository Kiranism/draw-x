'use client'

import { useEffect, useRef } from 'react'
import CreateRoomForm from '@/components/CreateRoomForm'
import { Button } from '@/components/ui/Button'

export default function AddCollob() {
  const handleCollab = () => {}
  return (
    <>
      <Button variant='outline' size='sm' onClick={handleCollab}>
        Save
      </Button>
    </>
  )
}
