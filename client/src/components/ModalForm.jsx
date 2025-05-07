export default function ModalForm({ isOpen, onClose, mode, onSubmit }) {
  return (
    <>
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
          <h3 className="font-bold text-lg py-4">
            {mode === "edit" ? "Edit Client" : "Client Details"}
          </h3>

          <div className="flex flex-col gap-y-2">
            <div className="flex flex-row gap-x-2">
              {" "}
              <form method="dialog">
                <div className="flex flex-col gap-y-2">
                  <label className="input">
                    Name
                    <input
                      type="text"
                      className="grow"
                      placeholder="Type Here"
                    />
                  </label>
                  <label className="input">
                    Email
                    <input
                      type="text"
                      className="grow"
                      placeholder="Type Here"
                    />
                  </label>
                  <label className="input">
                    Company
                    <input
                      type="text"
                      className="grow"
                      placeholder="Type Here"
                    />
                  </label>
                  <label className="input">
                    Job
                    <input
                      type="text"
                      className="grow"
                      placeholder="Type Here"
                    />
                  </label>
                  <button
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 "
                    onClick={onClose}
                  >
                    ✕
                  </button>
                </div>
              </form>
              <div className="">
                <textarea className="textarea" placeholder="Notes"></textarea>
              </div>
            </div>
            <button className="btn btn-success">Save Changes</button>
          </div>
        </div>
      </dialog>
    </>
  );
}
