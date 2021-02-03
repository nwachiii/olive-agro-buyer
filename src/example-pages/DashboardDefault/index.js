import React, { Fragment } from 'react';

import { VStack } from '@chakra-ui/react';
import Cards8Examples55 from '../../example-components/Cards8/Cards8Examples55';
import Cards9Examples56 from '../../example-components/Cards9/Cards9Examples56';

export default function DashboardDefault() {
  return (
    <Fragment>
      <VStack spacing="4em" my="4em">
        <Cards8Examples55 />
        <Cards9Examples56 />
      </VStack>
    </Fragment>
  );
}
