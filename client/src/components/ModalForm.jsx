import { useState } from "react";

export default function ModalForm({ isOpen, onClose, mode, onSubmit }) {
  // handle events
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    const newClient = { name, contact, company, position, date };
    onSubmit(newClient); // pass data to parent
    onClose(); // close modal
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="w-4xl h-3xl max-w-none p-4 bg-purple outline-1 rounded-2xl overflow-y-auto">
          {/* Close Modal*/}
          <div className="flex justify-end h-10">
            <button
              className="btn btn-sm btn-circle btn-outline"
              onClick={onClose}
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col gap-y-4 mx-10 mb-10 mt-0 justify-center">
            <h3 className="font-bold text-lg text-center">
              {mode === "edit" ? "Edit Client" : "Client Details"}
            </h3>

            {/* Edit Data */}
            <form method="dialog" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-y-4">
                <div className="flex flex-row gap-x-4 justify-between w-full">
                  <label className="input outline-1 w-1/2">
                    Name
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      className="w-full"
                      placeholder="Enter Name"
                    />
                  </label>
                  <label className="input outline-1 w-1/2">
                    Contact
                    <input
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      type="text"
                      className="w-full"
                      placeholder="Enter Contact"
                    />
                  </label>
                </div>
                <div className="flex flex-row gap-x-4">
                  <label className="input outline-1">
                    Company
                    <input
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      type="text"
                      className="grow"
                      placeholder="Enter Company"
                    />
                  </label>
                  <label className="input outline-1">
                    Position
                    <input
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      type="text"
                      className="grow "
                      placeholder="Enter Position"
                    />
                  </label>
                  <label className="input outline-1">
                    Date
                    <input
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      type="date"
                      className="input"
                    />
                  </label>
                </div>

                {/* Edit Notes */}
                <textarea
                  className="textarea w-full h-72 outline-1"
                  placeholder="Notes"
                ></textarea>
                <button className="btn btn-outline p-4" onSubmit={handleSubmit}>
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
