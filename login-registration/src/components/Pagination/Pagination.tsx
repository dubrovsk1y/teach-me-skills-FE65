import React, { FC } from "react";
import "./Pagination.css";
import classNames from "classnames";

type PaginationProps = {
  pageNum: number;
  pagesCount: number;
  onPrevClick: () => void;
  onNextClick: () => void;
  onLastClick?: () => void;
  onFirstClick?: () => void;
};

const Pagination: FC<PaginationProps> = ({
  pageNum,
  pagesCount,
  onPrevClick,
  onNextClick,
  onLastClick,
  onFirstClick,
}) => {
  return (
    <div className="pagination">
      <div className="pagination__btns">
        <button className={classNames("pagination__btn", { ["_inactive"]: pageNum === 1 })} onClick={onFirstClick}>
          &lt;&lt;
        </button>
        <button className={classNames("pagination__btn", { ["_inactive"]: pageNum === 1 })} onClick={onPrevClick}>
          &lt;
        </button>
        <div className="pagination__pageNum">{pageNum}</div>
        <button
          className={classNames("pagination__btn", { ["_inactive"]: pageNum === pagesCount })}
          onClick={onNextClick}
        >
          &gt;
        </button>
        <button
          className={classNames("pagination__btn", { ["_inactive"]: pageNum === pagesCount })}
          onClick={onLastClick}
        >
          &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
