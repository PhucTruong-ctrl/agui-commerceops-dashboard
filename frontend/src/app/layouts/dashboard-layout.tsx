import { Outlet } from 'react-router-dom'

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-lg font-semibold tracking-tight">AGUI CommerceOps Dashboard</h1>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
            Academic MVP
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        <Outlet />
      </main>
    </div>
  )
}
