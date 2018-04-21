import React from "react";
import "./Search.css";

const Search = () => (
  <div className="search-form">
    <div className="form-group">
      <label for="topic-input">Topic</label>
      <input type="text" class="form-control" id="topic-input" />
      <br />

      <label for="start-input">Start Year</label>
      <input type="text" class="form-control" id="start-input" />
      <br />

      <label for="end-input">End Year</label>
      <input type="text" class="form-control" id="end-input" /> <br />
      <button class="btn btn-primary" type="submit">Submit</button>
    </div>

  </div>
);

export default Search;
