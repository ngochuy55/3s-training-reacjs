import React from "react";

export function ChangePassword(
  {
    handleShowChangePass,
    changePassword,
    renderAlertMessage,
    handleInputPasswordNew,
    handleInputConfirmPasswordNew,
    handleInputPasswordOld
  }
) {
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
              className="relative w-full transform overflow-hidden rounded-lg bg-white text-left 
                shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 sm:ml-4 sm:mt-0 sm:text-left w-full">
                    <h3
                      className="text-center w-full font-semibold leading-6 text-gray-900"
                      id="modal-title"
                    >
                      Đổi mật khẩu
                    </h3>
                    <form>
                      <div className="w-full">
                        <label className="block mb-2">Mật khẩu cũ</label>
                        <input
                          name="password_old"
                          type="password"
                          className="border  border-[#ccc] w-full px-3 py-2"
                          onChange={handleInputPasswordOld}
                        />
                        {renderAlertMessage("password_old")}
                      </div>
                      <label className="block mb-2">Mật khẩu mới:</label>
                      <input
                        name="password_new"
                        type="password"
                        className="border border-[#ccc] w-full px-3 py-2"
                        onChange={handleInputPasswordNew}
                      />
                      {renderAlertMessage("password_new")}
                      <label className="block mb-2">Nhập lại mật khẩu mới:</label>
                      <input
                        name="comfirmpassword_new"
                        type="password"
                        className="border border-[#ccc] w-full px-3 py-2"
                        onChange={handleInputConfirmPasswordNew}
                      />
                      {renderAlertMessage("comfirmpassword_new")}
                    </form>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  onClick={changePassword}
                  type="button"
                  className="bg-[#6366f1] text-[#fff] mt-3 inline-flex w-full justify-center rounded-md ml-0 sm:ml-2 px-3 py-2 text-sm font-semibold
                      shadow-sm ring-1 ring-inset  hover:text-[#ccc] sm:mt-0 sm:w-auto"
                >
                  Lưu thay đổi
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-[#cd1818] px-3 py-2 text-sm font-semibold text-white 
                    shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#6366f1] hover:text-[#ccc] sm:mt-0 sm:w-auto"
                  onClick={handleShowChangePass}
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