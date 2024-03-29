/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from "react";

import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";

interface NoteLinkProps {
  to: string;
  children: string;
  onDelete: () => void;
}

export const NoteLink: React.FC<NoteLinkProps> = ({
  children,
  onDelete,
  ...props
}) => {
  return (
    <Link
      className="flex content-between items-center rounded-sm py-1 px-2 text-sm hover:bg-base-content hover:bg-opacity-10 [&>.dropdown]:hover:visible"
      {...props}
    >
      <span className="w-full">{children}</span>

      <div
        className="dropdown-right dropdown invisible"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <label tabIndex={0}>
          <HiDotsHorizontal className="h-5 w-5 cursor-pointer rounded-sm p-[1px] hover:bg-base-content hover:bg-opacity-[0.15]" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content w-52 rounded bg-base-200 p-2 shadow"
        >
          <li className="rounded px-4 py-2 hover:bg-base-content hover:bg-opacity-10">
            <button type="button" onClick={onDelete}>
              Delete
            </button>
          </li>
        </ul>
      </div>
    </Link>
  );
};
