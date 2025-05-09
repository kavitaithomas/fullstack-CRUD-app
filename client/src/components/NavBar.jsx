export default function NavBar({ onOpen }) {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Clients!</a>
      </div>
      <div className="navbar-center">
        <div className="flex gap-2" />
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-96 border-purple-"
        />
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary" onClick={onOpen}>
          Add Client
        </a>
      </div>
    </div>
  );
}
