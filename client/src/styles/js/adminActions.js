const manageFoodItemBtn = document.querySelector('.manage-food-items'),
  successMessage = document.querySelector('.cd-success-message'),
  errorBannerMessage = document.querySelector('.cd-error-banner-message'),
  foodItemName = document.querySelector('#item-name'),
  nameErrorMessage = document.querySelector('.add-edit-menu-name-error'),
  foodItemPrice = document.querySelector('#item-price'),
  priceErrorMessage = document.querySelector('.add-edit-menu-price-error'),
  fileUpload = document.querySelector('#file-upload'),
  imageErrorMessage = document.querySelector('.add-edit-menu-img-error'),
  adminSpinner = document.querySelector('.spinner'),
  addToMenuBtn = document.querySelector('.add-food-item-btn'),
  editFoodItemBtn = document.querySelector('.edit-food-item-btn');

// Cloudinary reference Image Upload in 15 Minutes with Cloudinary and Javascript
//  Tutorial  by DevCoffee

const statusMessage = (otherMessage, message, innerMessage) => {
  otherMessage.innerHTML = '';
  otherMessage.classList.remove('is-visible');
  message.innerHTML = innerMessage;
  message.classList.add('is-visible');
};

const addToMenuErrors = {};
const adminToken = localStorage.getItem('token');
const myAdminHeaders = new Headers({
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  token: adminToken
});
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/chinemelu/upload';
const CLOUDINARY_UPLOAD_PRESET = 'd07ctl00';

const getAllFoodItemsHeader = {
  method: 'GET',
  mode: 'cors',
  headers: myAdminHeaders
};

const uploadToCloudinary = (callback) => {
  if (fileUpload.files.length === 0) {
    return callback({});
  }
  const imgFile = fileUpload.files[0];
  const formData = new FormData();
  formData.append('file', imgFile);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  const uploadImageUrl = CLOUDINARY_URL;

  const uploadImageParameters = {
    method: 'POST',
    body: formData,
  };

  return fetch(uploadImageUrl, uploadImageParameters)
    .then(res => res.json())
    .then((imgUploadResponse) => {
      return callback(imgUploadResponse);
    });
};

const editItem = (editItemUrl) => {
  uploadToCloudinary((cloudinaryResponse) => {
    const menuDetails = {
      name: foodItemName.value,
      price: foodItemPrice.value,
      imgUrl: cloudinaryResponse.secure_url
    };
    const editItemParameters = {
      method: 'PUT',
      mode: 'cors',
      body: JSON.stringify(menuDetails),
      headers: myAdminHeaders
    };
    adminSpinner.classList.remove('hide');
    fetch(editItemUrl, editItemParameters)
      .then((res) => {
        adminSpinner.classList.add('hide');
        removeClassFromClassList(addItemModal, 'is-visible');
        addToMenuBtn.disabled = false;

        if (res.status === 200) {
          manageFoodItemsSectionSelected();
          statusMessage(errorBannerMessage, successMessage, 'You have successfully edited the food item');
        }
        if (res.status === 401 || res.status === 403) {
          window.location.href = 'customerpage.html?admin=false';
        }
        if (res.status === 404) {
          window.location.href = 'customerpage.html?admin=false';
        }
        if (res.status === 409) {
          manageFoodItemsSectionSelected();
          statusMessage(successMessage, errorBannerMessage, 'Item already exists');
        }
        if (res.status === 500) {
          manageFoodItemsSectionSelected();
          statusMessage(successMessage, errorBannerMessage, 'Error editing food item');
        }
      });
  });
};

const deleteItem = (deleteFromMenuUrl) => {
  adminSpinner.classList.remove('hide');

  const deleteFromMenuParameters = {
    method: 'DELETE',
    mode: 'cors',
    headers: myAdminHeaders
  };

  fetch(deleteFromMenuUrl, deleteFromMenuParameters)
    .then((res) => {
      adminSpinner.classList.add('hide');
      removeClassFromClassList(deleteConfirmationModal, 'is-visible');

      if (res.status === 200) {
        manageFoodItemsSectionSelected();
        statusMessage(errorBannerMessage, successMessage, 'You have successfully deleted the food item');
      }
      if (res.status === 401 || res.status === 403) {
        window.location.href = 'customerpage.html?admin=false';
      }
      if (res.status === 404) {
        statusMessage(successMessage, errorBannerMessage, 'Item does not exist');
      }
      if (res.status === 500) {
        manageFoodItemsSectionSelected();
        statusMessage(successMessage, errorBannerMessage, 'Error deleting the food item');
      }
    }).catch((err) => {
      throw err;
    });
};

const openConfirmationModal = (url, name) => {
  let deleteConfirmationModalView = `<div class="delete-food-item-modal-header">
  <h3>Delete confirmation</h3><span class="cancel-delete-food-item-modal">x</span>
  </div>`;

  deleteConfirmationModalView += `<div class="delete-food-item-modal-body">
  <p>Are you sure you want to delete ${name}?</p>
  </div>`;

  deleteConfirmationModalView += `<div class="delete-food-item-modal-footer">
  <button class="delete-item-btn" onclick ="deleteItem('${url}')">Delete</button>
  <button class="close-modal-btn">Close</button>	
</div>`;

  document.querySelector('.delete-food-item-modal-content').innerHTML = deleteConfirmationModalView;
  addClassToClassList(deleteConfirmationModal, 'is-visible');


  document.addEventListener('click', (e) => {
    if (e.target.className === 'close-modal-btn' || e.target.className === 'cancel-delete-food-item-modal') {
      removeClassFromClassList(deleteConfirmationModal, 'is-visible');
    }
  });
};

let foodItemsView = '';

const getAllFoodItemsUrl = 'https://fast-food-fast-chinemelu.herokuapp.com/api/v1/menu';

const getAllFoodItems = () => {
  adminSpinner.classList.remove('hide');
  fetch(getAllFoodItemsUrl, getAllFoodItemsHeader)
    .then(res => res.json())
    .then((foodItems) => {
      foodItemsView = `<table>
<tr><th class="serial-th">S/N</th><th class="name-th">Name</th><th class="price-th">Price (naira)</th>
<th class="image-th">Image</th><th class="action-th">Action</th></tr>`;
      adminSpinner.classList.add('hide');
      let total = 0;
      foodItems.data.map((foodItem) => {
        foodItemsView += `<tr>
          <td>${total += 1}</td>
          <td>${foodItem.name}</td>
         <td>${foodItem.price}</td>
        <td><div class="image">
        <img src=${foodItem.img_url}>
        </div>
         </td>
           <td class="admin-action">
           <div class="edit-entry">
            <a href="#" onclick="addEditFoodItem(true, 'https://fast-food-fast-chinemelu.herokuapp.com/api/v1/menu/${foodItem.id}', '${foodItem.name}', '${foodItem.price}')"><i class="fa fa-edit edit-item"></i></a>
            </div> 
              <div class="delete-entry">
            <a href="#" onclick="openConfirmationModal('https://fast-food-fast-chinemelu.herokuapp.com/api/v1/menu/${foodItem.id}', '${foodItem.name}')"><i class="fa fa-times delete-item"></i></a>
            </div>
           </td>
         </tr>
         `;
        return foodItemsView;
      });
      document.getElementById('manage-food-items-entry').innerHTML = foodItemsView;
    })
    .catch(error => error);
};

const addToMenuUrl = 'https://fast-food-fast-chinemelu.herokuapp.com/api/v1/menu';


const nameValidator = () => {
  if (!foodItemName.value.trim()) {
    addToMenuErrors.name = 'Name is required';
    nameErrorMessage.classList.add('is-visible');
    nameErrorMessage.innerHTML = addToMenuErrors.name;
    addToMenuBtn.disabled = true;
  } else if (foodItemName.value.trim() && !(/^[a-zA-Z ]+$/.test(foodItemName.value.trim()))) {
    addToMenuErrors.name = 'Name should consist of only alphabets';
    nameErrorMessage.classList.add('is-visible');
    nameErrorMessage.innerHTML = addToMenuErrors.name;
    addToMenuBtn.disabled = true;
  } else {
    delete (addToMenuErrors.name);
    nameErrorMessage.classList.remove('is-visible');
    addToMenuBtn.disabled = false;
  }
};

const priceValidator = () => {
  if (!foodItemPrice.value.trim()) {
    addToMenuErrors.price = 'Price is required';
    priceErrorMessage.classList.add('is-visible');
    priceErrorMessage.innerHTML = addToMenuErrors.price;
    addToMenuBtn.disabled = true;
  } else if (foodItemPrice.value.trim() && !(/^-?\d+\.?\d*$/).test(foodItemPrice.value.trim())) {
    addToMenuErrors.price = 'Please enter a valid price';
    priceErrorMessage.classList.add('is-visible');
    priceErrorMessage.innerHTML = addToMenuErrors.price;
    addToMenuBtn.disabled = true;
  } else {
    delete (addToMenuErrors.price);
    priceErrorMessage.classList.remove('is-visible');
    addToMenuBtn.disabled = false;
  }
};


const imageValidator = () => {
  if (!fileUpload.files.length) {
    addToMenuErrors.fileUpload = 'Image is required';
    imageErrorMessage.classList.add('is-visible');
    imageErrorMessage.innerHTML = addToMenuErrors.fileUpload;
    addToMenuBtn.disabled = true;
  } else if (fileUpload.files.length && !(/\.(jpeg|jpg|gif|png)($|\?)/).test(fileUpload.files[0].name)) {
    addToMenuErrors.fileUpload = 'Please enter a valid image file';
    imageErrorMessage.classList.add('is-visible');
    imageErrorMessage.innerHTML = addToMenuErrors.fileUpload;
    addToMenuBtn.disabled = true;
  } else {
    delete (addToMenuErrors.fileUpload);
    imageErrorMessage.classList.remove('is-visible');
    addToMenuBtn.disabled = false;
  }
};

const disableEditBtn = () => {
  editFoodItemBtn.disabled = true;
};

const enableEditBtn = () => {
  editFoodItemBtn.disabled = false;
};

const onEditNameValidator = () => {
  if (foodItemName.value.trim() && !(/^[a-zA-Z ]+$/.test(foodItemName.value.trim()))) {
    addToMenuErrors.name = 'Name should consist of only alphabets';
    nameErrorMessage.classList.add('is-visible');
    nameErrorMessage.innerHTML = addToMenuErrors.name;
    // disableEditBtn();
  } else {
    delete (addToMenuErrors.name);
    nameErrorMessage.classList.remove('is-visible');
    enableEditBtn();
  }
};

const onEditPriceValidator = () => {
  if (foodItemPrice.value.trim() && !(/^-?\d+\.?\d*$/).test(foodItemPrice.value.trim())) {
    addToMenuErrors.price = 'Please enter a valid price';
    priceErrorMessage.classList.add('is-visible');
    priceErrorMessage.innerHTML = addToMenuErrors.price;
    // disableEditBtn();
  } else {
    delete (addToMenuErrors.price);
    priceErrorMessage.classList.remove('is-visible');
    enableEditBtn();
  }
};

const onEditImageValidator = () => {
  if (fileUpload.files.length && !(/\.(jpeg|jpg|gif|png)($|\?)/).test(fileUpload.files[0].name)) {
    addToMenuErrors.fileUpload = 'Please enter a valid image file';
    imageErrorMessage.classList.add('is-visible');
    imageErrorMessage.innerHTML = addToMenuErrors.fileUpload;
    // disableEditBtn();
  } else {
    delete (addToMenuErrors.fileUpload);
    imageErrorMessage.classList.remove('is-visible');
    enableEditBtn();
  }
};

const onKeyDown = (parameter, errorMessage) => {
  parameter.addEventListener('keydown', () => {
    errorMessage.classList.remove('is-visible');
    addToMenuBtn.disabled = false;
  });
};

const onAddMenuEvent = (element, event) => {
  addToMenuBtn.disabled = false;
  nameErrorMessage.classList.remove('is-visible');
  priceErrorMessage.classList.remove('is-visible');
  imageErrorMessage.classList.remove('is-visible');
  element.addEventListener(event, () => {
    if (event === 'blur' && element === foodItemPrice) {
      priceValidator();
    }
    if (event === 'blur' && element === foodItemName) {
      nameValidator();
    }
    if (event === 'blur' && element === fileUpload) {
      imageValidator();
    }
    if (event === 'input' && element === foodItemPrice) {
      priceValidator();
    }
    if (event === 'input' && element === foodItemName) {
      nameValidator();
    }
    if (event === 'change' && element === fileUpload) {
      imageValidator();
    }
    if (event === 'mouseenter' && element === addToMenuBtn) {
      nameValidator();
      priceValidator();
      imageValidator();
    }
    if (Object.keys(addToMenuErrors).length === 0) {
      addToMenuBtn.disabled = false;
    } else {
      addToMenuBtn.disabled = true;
    }
  });
};

const onEditMenuEvent = (element, event) => {
  enableEditBtn();
  nameErrorMessage.classList.remove('is-visible');
  priceErrorMessage.classList.remove('is-visible');
  imageErrorMessage.classList.remove('is-visible');
  element.addEventListener(event, () => {
    if (event === 'blur' && element === foodItemPrice) {
      onEditPriceValidator();
    }
    if (event === 'blur' && element === foodItemName) {
      onEditNameValidator();
    }
    if (event === 'blur' && element === fileUpload) {
      onEditImageValidator();
    }
    if (event === 'input' && element === foodItemPrice) {
      onEditPriceValidator();
    }
    if (event === 'input' && element === foodItemName) {
      onEditNameValidator();
    }
    if (event === 'change' && element === fileUpload) {
      onEditImageValidator();
    }
    if (Object.keys(addToMenuErrors).length === 0) {
      enableEditBtn();
    } else {
      disableEditBtn();
    }
  });
};

editFoodItemBtn.addEventListener('mouseenter', () => {
  onEditNameValidator();
  onEditPriceValidator();
  onEditImageValidator();
});

const addEditFoodItem = (isEditing, url, name, price) => {
  editFoodItemBtn.onclick = () => {
    disableEditBtn();
    editItem(url);
  };

  if (isEditing === false) {
    addClassToClassList(editFoodItemBtn, 'hide');
    removeClassFromClassList(addToMenuBtn, 'hide');
    onAddMenuEvent(fileUpload, 'blur');
    onAddMenuEvent(fileUpload, 'change');
    onAddMenuEvent(foodItemName, 'blur');
    onAddMenuEvent(foodItemPrice, 'blur');
    onAddMenuEvent(foodItemName, 'input');
    onAddMenuEvent(foodItemPrice, 'input');
    onAddMenuEvent(addToMenuBtn, 'mouseenter');
    onKeyDown(foodItemName, nameErrorMessage);
    onKeyDown(foodItemPrice, priceErrorMessage);
    onKeyDown(fileUpload, imageErrorMessage);

    foodItemName.value = '';
    foodItemPrice.value = '';
    fileUpload.value = '';
    addToMenuBtn.value = 'Add';
  } else {
    removeClassFromClassList(editFoodItemBtn, 'hide');
    addClassToClassList(addToMenuBtn, 'hide');
    onEditMenuEvent(fileUpload, 'blur');
    onEditMenuEvent(fileUpload, 'change');
    onEditMenuEvent(foodItemName, 'blur');
    onEditMenuEvent(foodItemPrice, 'blur');
    onEditMenuEvent(foodItemName, 'input');
    onEditMenuEvent(foodItemPrice, 'input');
    onEditMenuEvent(addToMenuBtn, 'mouseenter');
    onKeyDown(foodItemName, nameErrorMessage);
    onKeyDown(foodItemPrice, priceErrorMessage);
    onKeyDown(fileUpload, imageErrorMessage);

    foodItemName.value = name;
    foodItemPrice.value = price;
    addClassToClassList(addItemModal, 'is-visible');
  }
};


addToMenuBtn.addEventListener('click', (e) => {
  addToMenuBtn.disabled = true;
  e.preventDefault();
  uploadToCloudinary((cloudinaryResponse) => {
    const menuDetails = {
      name: foodItemName.value,
      price: foodItemPrice.value,
      imgUrl: cloudinaryResponse.secure_url
    };
    const addToMenuParameters = {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(menuDetails),
      headers: myAdminHeaders
    };
    adminSpinner.classList.remove('hide');
    fetch(addToMenuUrl, addToMenuParameters)
      .then((res) => {
        adminSpinner.classList.add('hide');
        addToMenuBtn.disabled = false;
        removeClassFromClassList(addItemModal, 'is-visible');
        if (res.status === 201) {
          manageFoodItemsSectionSelected();
          statusMessage(errorBannerMessage, successMessage, 'You have successfully added the food item');
        }
        if (res.status === 401 || res.status === 403) {
          window.location.href = 'customerpage.html?admin=false';
        }
        if (res.status === 404) {
          window.location.href = 'customerpage.html?admin=false';
        }
        if (res.status === 409) {
          manageFoodItemsSectionSelected();
          statusMessage(successMessage, errorBannerMessage, 'Item already exists');
        }
        if (res.status === 500) {
          manageFoodItemsSectionSelected();
          statusMessage(successMessage, errorBannerMessage, 'Error adding food item');
        }
      }).catch((err) => {
        throw err;
      });
  });
});
