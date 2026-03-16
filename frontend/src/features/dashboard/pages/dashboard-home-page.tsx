export function DashboardHomePage() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Dashboard Home</h2>
        <p className="mt-2 text-sm text-slate-600">
          Base frontend shell đã sẵn sàng cho KPI widgets, AI insights và workflow điều hành bán hàng.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <h3 className="text-sm font-medium text-slate-500">Orders Today</h3>
          <p className="mt-3 text-2xl font-semibold text-slate-900">—</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <h3 className="text-sm font-medium text-slate-500">Revenue</h3>
          <p className="mt-3 text-2xl font-semibold text-slate-900">—</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <h3 className="text-sm font-medium text-slate-500">AI Actions</h3>
          <p className="mt-3 text-2xl font-semibold text-slate-900">—</p>
        </article>
      </div>
    </section>
  )
}
