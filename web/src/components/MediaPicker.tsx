'use client'

import { ChangeEvent, useCallback, useState } from 'react'

export const MediaPicker = () => {
  const [preview, setPreview] = useState<string | null>(null)

  const onFileSelected = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target

    if (!files) {
      return
    }

    const previewUrl = URL.createObjectURL(files[0])

    setPreview(previewUrl)
  }, [])

  return (
    <>
      <input
        onChange={onFileSelected}
        type="file"
        name="coverUrl"
        id="media"
        className="invisible h-0 w-0"
      />
      {preview && (
        // eslint-disable-next-line
        <img
          src={preview}
          alt=""
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}
    </>
  )
}
