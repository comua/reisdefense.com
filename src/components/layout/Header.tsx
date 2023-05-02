import { FC } from 'react'

export const Header: FC = () => {
  return (
    <header className="fixed z-50 flex h-header w-full items-center justify-center px-page text-16 backdrop-blur">
      <div className="flex h-full w-full items-center justify-between border-b border-white/10 font-medium transition-colors">
        <nav className="flex h-full gap-16">
          <div className="flex h-full items-center font-semibold tracking-tight">
            The University of Chicago
          </div>
          <div className="hidden h-full items-center text-slate-400 tablet:flex">
            Biomedical Sciences Cluster
          </div>
        </nav>
        <div>
          {/* <ul className="flex items-center">
            <a href="/login" className="mr-24">
              Contact
            </a>
          </ul> */}
        </div>
      </div>
    </header>
  )
}
