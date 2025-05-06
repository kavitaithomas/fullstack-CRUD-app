export default function TableList({ handleOpen }) {
  const clients = [
    {
      id: 1,
      name: "Phinneas",
      email: "phinneas@gmail.com",
      job: "Software Engineer",
      isactive: true,
    },
    {
      id: 2,
      name: "Ferb",
      email: "ferb@gmail.com",
      job: "Technical Consultant",
      isactive: true,
    },
    {
      id: 3,
      name: "Dr Doofensmirtz",
      email: "evil@gmail.com",
      job: "Villain",
      isactive: false,
    },
    {
      id: 4,
      name: "Perry the Platypus",
      email: "agentp@gmail.com",
      job: "Agent",
      isactive: true,
    },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table">
        {/* head */}
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Job</th>
          <th>Status</th>
        </thead>
        <tbody className="">
          {clients.map((client) => (
            <tr>
              <th>{client.id}</th>
              <th>{client.name}</th>
              <th>{client.email}</th>
              <th>{client.job}</th>
              <td>
                <button
                  className={`btn rounded-full w-20 ${
                    client.isactive ? `btn-primary` : `btn-outline btn-primary`
                  }`}
                >
                  {client.isactive ? `Active` : `Inactive`}
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleOpen("edit")}
                  className="btn btn-secondary"
                >
                  Update
                </button>
              </td>
              <td>
                <button className="btn btn-warning">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
