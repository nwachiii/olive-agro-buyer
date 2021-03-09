import React, { Fragment } from "react";

import PageTitle from "../PageTitle";

import InboxBasic from "./InboxBasic";
export default function Inbox() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Messages"
        titleDescription="All your received messages are contained here..."
      />
      <InboxBasic />
    </Fragment>
  );
}
