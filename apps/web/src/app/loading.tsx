export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto flex min-h-screen max-w-7xl animate-pulse items-center justify-center px-4">
        <div className="grid w-full gap-6">
          <div className="h-14 w-48 rounded-full bg-slate-100" />
          <div className="h-96 rounded-[2rem] bg-slate-100" />
          <div className="grid gap-6 md:grid-cols-3">
            <div className="h-36 rounded-[2rem] bg-slate-100" />
            <div className="h-36 rounded-[2rem] bg-slate-100" />
            <div className="h-36 rounded-[2rem] bg-slate-100" />
          </div>
        </div>
      </div>
    </div>
  );
}
