import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { userSelector } from "../redux/selectors";
import { useDispatch } from "react-redux";

import { updateUserRequest, changePasswordRequest } from "../redux/actions";
import UserSettings from "../views/UserSettings";
import { DecodeBase64, RemoveBase64 } from "../helper";

const UserSettingsContainer = () => {
  const dispatch = useDispatch();
  const userData = useSelector(userSelector);

  const initialImageData = {
    imageName: "initial",
    imageSource: DecodeBase64(userData.avatar),
    imageFile: null,
  };

  const [imageData, setImageData] = useState(initialImageData);

  useEffect(() => {
    setImageData({
      imageSource: DecodeBase64(userData.avatar),
    });
  }, [userData.isLoading, userData.avatar]);

  const showPreview = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setImageData({
          ...imageData,
          imageFile,
          imageSource: x.target.result,
        });
      };
      reader.readAsDataURL(imageFile);
    } else {
      setImageData(initialImageData);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateUserRequest({
        avatar: RemoveBase64(imageData.imageSource, imageData.imageFile.type),
      }),
    );
  };

  const handleChangePasswordSubmit = (values) => {
    dispatch(
      changePasswordRequest({
        oldPassword: values.Password,
        newPassword: values.NewPassword,
      }),
    );
  };

  return (
    <div>
      <UserSettings
        imageData={imageData}
        showPreview={showPreview}
        userData={userData}
        handleSubmit={handleSubmit}
        handleChangePasswordSubmit={handleChangePasswordSubmit}
      />
    </div>
  );
};

UserSettingsContainer.propTypes = {};

export default UserSettingsContainer;
