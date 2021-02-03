import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import DashboardDefaultSection4 from '../../example-components/DashboardDefault/DashboardDefaultSection4';
import PaginationBasic from '../../example-components/Pagination/PaginationBasic';
import { VStack } from '@chakra-ui/react';

export default function DashboardDefault() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Olive-agro"
        titleDescription="Get personalized notifications here... "
      />

      <VStack spacing="4em" my="4em">
        <DashboardDefaultSection4 />
        <PaginationBasic />
      </VStack>
    </Fragment>
  );
}
