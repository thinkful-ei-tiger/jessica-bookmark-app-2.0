import $ from "jquery";

import book from "./bookmark";
import store from "./store";
import api from "./api";

import "./index.css";
import "./lynkfarm.png"

$(() => {
  api.getAllBookmarks().then((list) => {
    store.addListOfBookmarks(list);
    book.render();
  })
  book.setupEventHandlers();
});

