import React, { Fragment } from 'react';

import { PageTitle } from '..';

import { ExampleWrapperSeamless } from '..';

import InboxBasic from '../../example-components/Inbox/InboxBasic';
export default function Inbox() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Messages"
        titleDescription="All your received messages are contained here..."
      />

      <ExampleWrapperSeamless sectionHeading="Inbox">
        <InboxBasic />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
