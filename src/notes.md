            {current_user.id !== userProfile.id && (
              <>
                <Button
                  size="small"
                  color="secondary"
                  variant="contained"
                  style={{ marginLeft: "45%" }}
                  onClick={handleModal}>
                  Message
                </Button>
                <Modal
                  isOpen={modalIsOpen}
                  style={customStyles}
                  ariaHideApp={false}>
                  <NewMessage
                    recipient={userProfile}
                    handleModal={handleModal}
                  />
                </Modal>
              </>
            )}


              // <div className="profile-container">

// <div className="info-box-left">
// <UserInfoEditForm
// user={userProfile}
// userInstrumental={userInstrumental}
// userVocal={userVocal}
// current_user={current_user}
// handleUpdateUser={handleUpdateUser}
// />
// </div>
// <div className="info-box-right">
// <UserLocationInfoForm
// location={userLocation}
// user={userProfile}
// current_user={current_user}
// handleUpdateUser={handleUpdateUser}
// />
// </div>
// <div className="info-box-btm">
// <UserFileStore current_user={current_user} />
// </div>
// </div>
