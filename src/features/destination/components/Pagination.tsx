"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isLoading?: boolean;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  isLoading,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, idx) => idx + 1);

  return (
    <div className="mt-10 flex items-center justify-center gap-2 flex-wrap">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1 || isLoading}
        className="rounded-full px-4 py-2 text-sm font-semibold bg-surface-container-low text-on-surface disabled:opacity-50"
      >
        Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          disabled={isLoading}
          className={`rounded-full w-9 h-9 text-sm font-semibold ${
            page === currentPage
              ? "bg-primary text-on-primary"
              : "bg-surface-container-low text-on-surface"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || isLoading}
        className="rounded-full px-4 py-2 text-sm font-semibold bg-surface-container-low text-on-surface disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
