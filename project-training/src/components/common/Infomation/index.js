import React from "react";

export function Information({
  user,
  handleInputname,
  handleInputemail,
  renderAlertMessage,
  handleInputBirthday,
  submiteditinfo,
  handleshowinfo,
  handlePreviewAvatar,
  avatar
}) {
  return (
    <React.Fragment>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-[80%] md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div
              className="relative transform overflow-hidden rounded-lg bg-white text-left 
                shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 sm:ml-4 sm:mt-0 sm:text-left w-full">
                    <h3
                      className="text-center w-full font-semibold leading-6 text-gray-900"
                      id="modal-title"
                    >
                      Thông tin cá nhân
                    </h3>
                    <form>



                      <label className=" block mb-2">Full Name:</label>
                      <input
                        type="text"
                        className="border border-[#ccc] px-3 py-2  w-full"
                        defaultValue={user.fullName}
                        onChange={handleInputname}
                      />
                      {renderAlertMessage("username")}


                      <label className="block mb-2">Email:</label>
                      <input
                        type="email"
                        className="border border-[#ccc] px-3 py-2  w-full"
                        defaultValue={user.email}
                        onChange={handleInputemail}
                      />
                      {renderAlertMessage("email")}
                      {/* <label className="block mb-2">Avatar:</label>
                      <input
                        type="file"
                        className="border border-[#ccc] px-3 py-2  w-full"
                        onChange={handlePreviewAvatar}
                      />
                      {avatar && (
                        <img alt="" src={avatar.preview} className="w-[80%] rounded-[50%] h-[80%]" />
                      )} */}
                      <label className="block mb-2">birthday:</label>
                      <input
                        type="date"
                        className="border border-[#ccc] px-3 py-2  w-full"
                        defaultValue={user.birthDay}
                        onChange={handleInputBirthday}
                      />
                    </form>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  onClick={submiteditinfo}
                  type="button"
                  className=" mt-3 inline-flex w-full justify-center rounded-md ml-0 sm:ml-2 bg-[#6366f1] px-3 py-2 text-sm font-semibold
                     text-[#fff] shadow-sm ring-1 ring-inset ring-gray-300 hover:text-[#ccc] sm:mt-0 sm:w-auto"
                >
                  Lưu thay đổi
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-[#cd1818] px-3 py-2 text-sm font-semibold text-[#fff] 
                    shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#6366f1] hover:text-[#fff] sm:mt-0 sm:w-auto"
                  onClick={handleshowinfo}
                >
                  Huỷ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}