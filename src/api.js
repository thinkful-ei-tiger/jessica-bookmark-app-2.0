const url = "https://thinkful-list-api.herokuapp.com/jessica-baskerville/bookmarks";

  const ApiFetch = function (...args) {
    // setup promise chain outside of scope
    let error;
    return fetch(...args)
      .then((res) => {
        if (!res.ok) {
          error = { code: res.status };
          if (!res.headers.get("content-type").includes("json")) {
            error.message = res.statusText;
            return Promise.reject(error);
          }
        }
        return res.json();
      })
      .then((data) => {
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }

        // otherwise, return the json as normal resolved Promise
        return data;
      });
  };

function addNewBookmark(title, uurl) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: title, url: uurl, rating: 5 }),
  }).then((response) => response.json());
}

function getAllBookmarks() {
  return fetch(url).then((response) => response.json());
}

function editBookmark(id, bookmark) {
  return fetch(url + "/" + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookmark),
  }).then((response) => response.json());
}

function deleteBookmark(id) {
  return fetch(url + "/" + id, {
    method: "DELETE",
  });
}

export default {
  addNewBookmark,
  getAllBookmarks,
  editBookmark,
  deleteBookmark,
};
