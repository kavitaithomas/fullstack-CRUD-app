export default function ModalForm({ isOpen, onClose, mode, onSubmit }) {
  return (
    <>
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="w-4xl h-3xl max-w-none p-4 bg-purple outline-1 rounded-2xl overflow-y-auto">
          {/* Close Button - inside modal box */}
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
            <form method="dialog">
              <div className="flex flex-row gap-x-4">
                <label className="input outline-1">
                  Name
                  <input
                    type="text"
                    className="grow"
                    placeholder="Enter Name"
                  />
                </label>
                <label className="input outline-1">
                  Contact
                  <input
                    type="text"
                    className="grow"
                    placeholder="Enter Contact"
                  />
                </label>
                <label className="input outline-1">
                  Company
                  <input
                    type="text"
                    className="grow"
                    placeholder="Enter Company"
                  />
                </label>
                <label className="input outline-1">
                  Position
                  <input
                    type="text"
                    className="grow "
                    placeholder="Enter Position"
                  />
                </label>
              </div>
            </form>
            <div className="">
              <textarea
                className="textarea w-full h-72 outline-1"
                placeholder="Notes"
              ></textarea>
            </div>
            <button className="btn btn-outline p-4">Save Changes</button>
          </div>
        </div>
      </dialog>
    </>
  );
}
