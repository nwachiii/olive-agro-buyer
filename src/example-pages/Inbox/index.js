import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSeamless } from '../../layout-components';

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
