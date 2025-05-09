export default function TableList({ handleOpen }) {
  const clients = [
    {
      id: 1,
      name: "Phinneas",
      contact: "phinneas@gmail.com",
      position: "Software Engineer",
      company: "Backyard Bros",
      date: "yyyy-mm-dd",
    },
    {
      id: 2,
      name: "Ferb",
      contact: "ferb@gmail.com",
      position: "Technical Consultant",
      company: "Backyard Bros",
      date: "yyyy-mm-dd",
    },
    {
      id: 3,
      name: "Dr Doofensmirtz",
      contact: "evil@gmail.com",
      position: "Villain",
      company: "Doofensmirtz Evil Inc",
      date: "yyyy-mm-dd",
    },
    {
      id: 4,
      name: "Perry the Platypus",
      contact: "agentp@gmail.com",
      company: "The OWCA",
      position: "Agent",
      date: "yyyy-mm-dd",
    },
    {
      id: 1,
      name: "Phinneas",
      contact: "phinneas@gmail.com",
      position: "Software Engineer",
      company: "Backyard Bros",
      date: "yyyy-mm-dd",
    },
    {
      id: 2,
      name: "Ferb",
      contact: "ferb@gmail.com",
      position: "Technical Consultant",
      company: "Backyard Bros",
      date: "yyyy-mm-dd",
    },
    {
      id: 3,
      name: "Dr Doofensmirtz",
      contact: "evil@gmail.com",
      position: "Villain",
      company: "Doofensmirtz Evil Inc",
      date: "yyyy-mm-dd",
    },
    {
      id: 4,
      name: "Perry the Platypus",
      contact: "agentp@gmail.com",
      company: "The OWCA",
      position: "Agent",
      date: "yyyy-mm-dd",
    },
    {
      id: 1,
      name: "Phinneas",
      contact: "phinneas@gmail.com",
      position: "Software Engineer",
      company: "Backyard Bros",
      date: "yyyy-mm-dd",
    },
    {
      id: 2,
      name: "Ferb",
      contact: "ferb@gmail.com",
      position: "Technical Consultant",
      company: "Backyard Bros",
      date: "yyyy-mm-dd",
    },
    {
      id: 3,
      name: "Dr Doofensmirtz",
      contact: "evil@gmail.com",
      position: "Villain",
      company: "Doofensmirtz Evil Inc",
      date: "yyyy-mm-dd",
    },
    {
      id: 4,
      name: "Perry the Platypus",
      contact: "agentp@gmail.com",
      company: "The OWCA",
      position: "Agent",
      date: "yyyy-mm-dd",
    },
  ];

  return (
    <div className="flex-grow overflow-auto">
      <table className="table table-zebra w-full">
        <thead className="sticky top-0 z-40 bg-base-100 text-lg">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Company</th>
            <th>Position</th>
            <th>Date</th>
            <th colSpan={2}></th>
          </tr>
        </thead>
        <tbody className="flex-grow overflow-auto">
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.contact}</td>
              <td>{client.company}</td>
              <td>{client.position}</td>
              <td>{client.date}</td>
              <div className="flex flex-row justify-end">
                <td className="flex justify-end">
                  <button
                    onClick={() => handleOpen("edit")}
                    className="btn btn-secondary"
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
