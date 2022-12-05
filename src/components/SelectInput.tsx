export function SelectInput() {
  return (
    <div className="w-full space-y-0.5">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2.5">
          <svg
            className="h-5 w-5 fill-transparent stroke-gray-400"
            viewBox="0 0 256 256"
          >
            <circle
              cx="128"
              cy="128"
              r="40"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></circle>
            <path
              d="M181.1,208A96,96,0,1,1,224,128c0,22.1-8,40-28,40s-28-17.9-28-40V88"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></path>
          </svg>
        </div>
        <input
          id="icon-prefix"
          type="email"
          placeholder="Enter your email"
          className="block w-full rounded-md h-10 border border-stone-200 pl-9 text-sm ring-offset-2 focus:ring-yellow-500 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
        />
      </div>
    </div>
  );
}
