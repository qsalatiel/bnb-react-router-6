export function Header() {
  return (
    <header className="flex items-center justify-between py-2 px-4 bg-yellow-50">
      <h1 className="text-base text-stone-500 h-6">🏖️ Beach and Beach</h1>
      <button type="button" className="h-10 w-10 p-2 text-stone-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </header>
  );
}
