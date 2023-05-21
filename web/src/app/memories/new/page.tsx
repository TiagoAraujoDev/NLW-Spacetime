import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

import { NewMemoryForm } from '@/components/NewMemoryForm'

export default function NewMemoriesPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-16">
      <Link href="/" className="flex items-center gap-2">
        <ChevronLeft className="h-4 w-4" />
        <span className="gap-1 text-sm text-gray-200 hover:text-gray-100">
          Voltar à timeline
        </span>
      </Link>
      <NewMemoryForm />
    </div>
  )
}
