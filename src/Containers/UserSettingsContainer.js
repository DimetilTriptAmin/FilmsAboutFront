import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import UserSettings from "../views/UserSettings";
import axios from "axios";

const defaultImageSource = "/img/user_default.png";

const initialFieldValues = {
  userId: 0,
  userName: "default",
  imageName: "",
  imageSource: defaultImageSource,
  imageFile: null,
};

const UserSettingsContainer = () => {
  const [values, setValues] = useState(initialFieldValues);

  const userAPI = (url = "https://localhost:44364/api/User") => {
    return {
      fetchAll: () => axios.get(url),
      fetchById: (id) => axios.get(url + id),
      create: (newRecord) => axios.post(url + "/add", newRecord),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
      delete: (id) => axios.delete(url + id),
    };
  };

  const addOrEdit = (formData, onSuccess) => {
    userAPI()
      .create(formData)
      .then((res) => {
        onSuccess();
      })
      .catch((err) => console.log(err));
  };

  const getImage = () => {
    userAPI().fetchById(10);
  };

  const resetForm = () => {
    setValues(initialFieldValues);
    document.getElementById("image-uploader").value = null;
  };

  const showPreview = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setValues({
          ...values,
          imageFile,
          imageSource: x.target.result,
        });
      };
      reader.readAsDataURL(imageFile);
    } else {
      setValues({
        ...values,
        imageFile: null,
        imageSource: defaultImageSource,
      });
    }
  };

  const handleFormSublit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imageName", values.imageName);
    formData.append("imageFile", values.imageFile);
    addOrEdit(formData, resetForm);
  };

  return (
    <div>
      <UserSettings
        values={values}
        showPreview={showPreview}
        handleFormSubmit={handleFormSublit}
      />
    </div>
  );
};

UserSettingsContainer.propTypes = {};

export default UserSettingsContainer;
