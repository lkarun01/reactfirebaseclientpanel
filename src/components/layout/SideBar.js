import React from 'react';
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <div>
      <Link to="/client/add" className="btn btn-success btn-block">
        <i className="fa fa-plus" /> New
      </Link>
    </div>
  )
}
