import { Head } from '@inertiajs/react'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

interface VersionInfo {
  commit_hash: string
  short_hash: string
  commit_date: string
  branch: string
  tag?: string
  error?: string
}

export default function Home({ version }: { version: VersionInfo }) {
  return (
    <>
      <Head title="Home" />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-center">Welcome to OneDream</h1>
        <p className="text-sm text-gray-500 mt-4">
          Version: {version.tag}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="cursor-help ml-1">ⓘ</span>
            </TooltipTrigger>
            <TooltipContent>
              <p>{version.short_hash} - {version.commit_date}</p>
            </TooltipContent>
          </Tooltip>
        </p>
      </div>
    </>
  )
}