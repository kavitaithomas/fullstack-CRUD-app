export default function TableList({ handleOpen }) {
  const clients = [
    {
      id: 1,
      name: "Phinneas",
      contact: "phinneas@gmail.com",
      position: "Software Engineer",
      company: "Backyard Bros",
    },
    {
      id: 2,
      name: "Ferb",
      contact: "ferb@gmail.com",
      position: "Technical Consultant",
      company: "Backyard Bros",
    },
    {
      id: 3,
      name: "Dr Doofensmirtz",
      contact: "evil@gmail.com",
      position: "Villain",
      company: "Doofensmirtz Evil Inc",
    },
    {
      id: 4,
      name: "Perry the Platypus",
      contact: "agentp@gmail.com",
      company: "The OWCA",
      position: "Agent",
    },
    {
      id: 1,
      name: "Phinneas",
      contact: "phinneas@gmail.com",
      position: "Software Engineer",
      company: "Backyard Bros",
    },
    {
      id: 2,
      name: "Ferb",
      contact: "ferb@gmail.com",
      position: "Technical Consultant",
      company: "Backyard Bros",
    },
    {
      id: 3,
      name: "Dr Doofensmirtz",
      contact: "evil@gmail.com",
      position: "Villain",
      company: "Doofensmirtz Evil Inc",
    },
    {
      id: 4,
      name: "Perry the Platypus",
      contact: "agentp@gmail.com",
      company: "The OWCA",
      position: "Agent",
    },
    {
      id: 1,
      name: "Phinneas",
      contact: "phinneas@gmail.com",
      position: "Software Engineer",
      company: "Backyard Bros",
    },
    {
      id: 2,
      name: "Ferb",
      contact: "ferb@gmail.com",
      position: "Technical Consultant",
      company: "Backyard Bros",
    },
    {
      id: 3,
      name: "Dr Doofensmirtz",
      contact: "evil@gmail.com",
      position: "Villain",
      company: "Doofensmirtz Evil Inc",
    },
    {
      id: 4,
      name: "Perry the Platypus",
      contact: "agentp@gmail.com",
      company: "The OWCA",
      position: "Agent",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Company</th>
          <th>Position</th>
        </thead>
        <tbody className="">
          {clients.map((client) => (
            <tr>
              <th>{client.id}</th>
              <th>{client.name}</th>
              <th>{client.contact}</th>
              <th>{client.company}</th>
              <th>{client.position}</th>
              <div className="flex flex-row justify-end">
                <td className="flex justify-end">
                  <button
                    onClick={() => handleOpen("edit")}
                    className="btn btn-secondary "
                  >
                    Update
                  </button>
                </td>
                <td className="flex justify-end">
                  <button className="btn btn-warning">Delete</button>
                </td>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
