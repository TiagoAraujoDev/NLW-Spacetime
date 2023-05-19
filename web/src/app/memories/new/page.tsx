import { Camera, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewMemoriesPage() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Link href="/" className="flex items-center gap-2">
        <ChevronLeft className="h-4 w-4" />
        <span className="gap-1 text-sm text-gray-200 hover:text-gray-100">
          Voltar à timeline
        </span>
      </Link>

      <form className="flex w-full flex-1 flex-col gap-2">
        <div className="flex items-center gap-4">
          <label
            htmlFor="media"
            className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
          >
            <Camera className="h-4 w-4" />
            <span>Anexar mídia</span>
          </label>
          <input
            type="file"
            name="media"
            id="media"
            className="invisible h-0 w-0"
          />
          <label
            htmlFor="isPublic"
            className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
          >
            <input
              type="checkbox"
              name="isPublic"
              id="isPublic"
              className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500"
            />
            <span>Tornar memória pública</span>
          </label>
        </div>

        <textarea
          name="content"
          spellCheck={false}
          placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
          className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
        ></textarea>
      </form>
    </div>
  )
}
