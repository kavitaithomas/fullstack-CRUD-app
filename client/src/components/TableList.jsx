export default function TableList({ handleOpen }) {
  const clients = [
    {
      id: 1,
      name: "Phinneas",
      contact: "phinneas@gmail.com",
      job: "Software Engineer",
      company: "Backyard Bros",
    },
    {
      id: 2,
      name: "Ferb",
      contact: "ferb@gmail.com",
      job: "Technical Consultant",
      company: "Backyard Bros",
    },
    {
      id: 3,
      name: "Dr Doofensmirtz",
      contact: "evil@gmail.com",
      job: "Villain",
      company: "Doofensmirtz Evil Inc",
    },
    {
      id: 4,
      name: "Perry the Platypus",
      contact: "agentp@gmail.com",
      company: "The OWCA",
      job: "Agent",
    },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Company</th>
          <th>Job</th>
        </thead>
        <tbody className="">
          {clients.map((client) => (
            <tr>
              <th>{client.id}</th>
              <th>{client.name}</th>
              <th>{client.contact}</th>
              <th>{client.company}</th>
              <th>{client.job}</th>
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
