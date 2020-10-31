const BASE_URL = "https://thinkful-list-api.herokuapp.com/jessica";

function listApiFetch(...args) {
  let error;
  return fetch(...args)
    .then((res) => {
      if (!res.ok) {
       
        error = {
          code: res.status,
        };
      }

      
      return res.json();
    })
    .then((data) => {
      
      if (error) {
        error.message = data.message;
        return Promise.reject(error);
      }

      // Otherwise give back the data as resolved Promise
      return data;
    });
}

const getBookmarks = function () {
  return fetch(`${BASE_URL}/bookmarks`);
};

const createBookmark = function (obj) {
  const newBookmark = obj;
  console.log("newbookmark:", newBookmark);
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: newBookmark,
  };

  return listApiFetch(BASE_URL + "/bookmarks", options);
};

const deleteBookmark = function (objId) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  };
  return listApiFetch(BASE_URL + "/bookmarks/" + objId, options);
};

export default {
  getBookmarks,
  createBookmark,
  deleteBookmark,
};
