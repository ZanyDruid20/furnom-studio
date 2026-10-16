export default function ProjectSkeleton() {
  return (
    <div className="border border-line rounded-lg p-6 animate-pulse">
      <div className="h-6 bg-hover rounded w-3/4 mb-3"></div>
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-hover rounded"></div>
        <div className="h-4 bg-hover rounded w-5/6"></div>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        <div className="h-6 bg-hover rounded w-16"></div>
        <div className="h-6 bg-hover rounded w-20"></div>
        <div className="h-6 bg-hover rounded w-14"></div>
      </div>
      <div className="h-10 bg-hover rounded"></div>
    </div>
  );
}
