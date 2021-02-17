import React, { Fragment } from 'react';
import { VStack } from '@chakra-ui/react';

import { PageTitle } from '..';

import PaginationBasic from '../../example-components/Pagination/PaginationBasic';
import HomeFirstCard from '../Cards/HomeFirstCard';
import OtherHomeCards from '../Cards/OtherHomeCards';

export default function Home() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Olive-agro"
        titleDescription="Get personalized notifications here... "
      />

      <VStack spacing="4em" my="4em">
        <HomeFirstCard />
        <OtherHomeCards />
        <PaginationBasic />
      </VStack>
    </Fragment>
  );
}
