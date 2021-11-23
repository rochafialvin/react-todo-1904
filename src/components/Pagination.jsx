import React, { Component } from "react";

export class Pagination extends Component {
  render() {
    const { page, maxPage, onNextPage, onPrevPage } = this.props;

    return (
      <div className="d-flex w-75 mx-auto mt-3 justify-content-between ">
        <button
          onClick={onPrevPage}
          className={`btn btn-outline-dark w-25 ${
            page === 1 ? "disabled" : ""
          } `}
        >
          Prev
        </button>
        <p className="m-0 lead">
          Page {page} of {maxPage}
        </p>
        <button
          onClick={onNextPage}
          className={`btn btn-outline-dark w-25 ${
            page === maxPage && "disabled"
          } `}
        >
          Next
        </button>
      </div>
    );
  }
}

export default Pagination;
