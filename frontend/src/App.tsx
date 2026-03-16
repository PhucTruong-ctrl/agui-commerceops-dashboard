import { Route, Routes } from 'react-router-dom'

function DashboardHome() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          AGUI CommerceOps Dashboard
        </h1>
      </div>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardHome />} />
    </Routes>
  )
}

export default App
