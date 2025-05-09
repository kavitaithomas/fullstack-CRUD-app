export default function NavBar({ onOpen }) {
  return (
    <div className="sticky top-0 z-50  my-10">
      <div className="flex flex-row justify-between">
        {/* Title */}
        <div className="">
          <a className="btn btn-ghost text-xl">Clients!</a>
        </div>
        {/* Search Bar */}
        <div className="flex gap-x-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />{" "}
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-96 outline-1"
          />
        </div>
        {/* Add Client */}
        <div className="px-4">
          <a className="btn btn-primary" onClick={onOpen}>
            Add Client
          </a>
        </div>
      </div>
    </div>
  );
}
