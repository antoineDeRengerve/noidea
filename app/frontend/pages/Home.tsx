import { Head } from '@inertiajs/react'
import { useState } from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

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
          {/* Desktop tooltip */}
          <span className="hidden md:inline">
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="cursor-help ml-1">ⓘ</span>
              </TooltipTrigger>
              <TooltipContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Version:</span>
                    <span>{version.tag}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Commit Hash:</span>
                    <span className="font-mono">{version.short_hash}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Commit Date:</span>
                    <span>{version.commit_date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Branch:</span>
                    <span>{version.branch}</span>
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
          </span>
          {/* Mobile dialog trigger */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="md:hidden cursor-pointer ml-1 text-blue-500 hover:text-blue-700">
                ⓘ
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Version Details</DialogTitle>
                <DialogDescription>
                  Detailed information about the current version
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Version:</span>
                  <span>{version.tag}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Commit Hash:</span>
                  <span className="font-mono">{version.short_hash}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Commit Date:</span>
                  <span>{version.commit_date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Branch:</span>
                  <span>{version.branch}</span>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </p>
      </div>
    </>
  )
}