import React, { Fragment, useState } from 'react';
import {
  Center,
  Grid,
  GridItem,
  Icon,
  Link,
  Text,
  VStack
} from '@chakra-ui/react';
import { HiInboxIn } from 'react-icons/hi';
import { FaMobileAlt } from 'react-icons/fa';
import { Divider } from '@material-ui/core';

export default function LivePreviewExample() {
  const [messages] = useState('No messages yet');
  return (
    <Fragment>
      <Grid templateColumns="repeat(5, 1fr)" gap={4} maxW="700px" mx="auto">
        <VStack>
          <Icon as={HiInboxIn} w="200px" h="170px" color="#95c53e" />
          <Text>{messages}</Text>
        </VStack>
        <Center height="100vh">
          <Divider orientation="vertical" />
        </Center>
        <GridItem colStart={4} colEnd={6} gridRowGap={4}>
          <Icon
            as={FaMobileAlt}
            w="70px"
            h="70px"
            color="#95c53e"
            justifySelf="center"
          />
          <Text color="darkgray">
            Easily chat and collaborate on the go with Alibaba.com App.
          </Text>
          <Link href="#" color="teal.300" isExternal>
            Download the mobile app
          </Link>
        </GridItem>
      </Grid>
    </Fragment>
  );
}
