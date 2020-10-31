let bookmarks = [];
let adding = false;
let error = null;
let filter = false;
let filteredBookmarks = [];

const addBookmark = function (bookmark) {
  for (let i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i]) {
      bookmarks[i].expand = false;
    }
  }
  bookmarks.push(bookmark);
  // toggles
  this.adding = false;
};

const expandBookmark = function (id) {
  let expandedBookmark = bookmarks.find((bookmark) => bookmark.id === id);
  //toggle
  if (expandedBookmark.expand) {
    expandedBookmark.expand = false;
  } else {
    expandedBookmark.expand = true;
  }
};

const deleteBookmark = function (id) {
  this.bookmarks = this.bookmarks.filter((bookmark) => bookmark.id !== id);
};
//toggle
const setAdding = function (param) {
  this.adding = param;
};

//filter
const filterBookmarks = function (filterNumber) {
  this.filter = true;
  this.bookmarks.forEach((bookmark) => {
    if (bookmark.rating >= filterNumber) {
      this.filteredBookmarks.push(bookmark);
    }
  });
};

//toggle
const setFiltering = function (param) {
  this.filter = param;
};

// error
const setError = function (errorMessage) {
  this.error = errorMessage;
};

export default {
  bookmarks,
  adding,
  error,
  filter,
  addBookmark,
  expandBookmark,
  deleteBookmark,
  setAdding,
  setFiltering,
  setError,
  filterBookmarks,
  filteredBookmarks,
};
