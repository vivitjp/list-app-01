import React, { useRef, forwardRef, useState, ChangeEvent } from "react"

interface HiddenInputProps {
  onFileInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const HiddenInput = forwardRef<HTMLInputElement, HiddenInputProps>(
  ({ onFileInputChange }, inputRef) => {
    return (
      <input
        hidden
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={onFileInputChange}
      />
    )
  }
)

type ButtonProps = {
  title?: string
  style?: object
}

export const useImageUploader = (): {
  imageSrc: string
  ImageButton: ({}: ButtonProps) => JSX.Element
} => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [imageSrc, setImageSrc] = useState<string>("")

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return
    const imageURL = URL.createObjectURL(event.target.files[0])
    setImageSrc(imageURL)
  }

  const fileUpload = () => {
    if (!inputRef.current) return
    inputRef.current.click()
  }

  const ImageButton = ({ style = {}, title = "アップロード" }: ButtonProps) => (
    <div>
      <HiddenInput onFileInputChange={handleFileInputChange} ref={inputRef} />
      <button onClick={fileUpload} style={{ ...style, width: "150px" }}>
        {title}
      </button>
    </div>
  )

  return { imageSrc, ImageButton }
}
