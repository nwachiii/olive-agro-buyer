import React, { useState } from 'react';

import { Card, Grid } from '@material-ui/core';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';

import data from '../data.json';

export default function OtherHomeCards() {
  const [dataInfo] = useState(data.props);
  const [count] = useState(0);
  return (
    <>
      {dataInfo.map(data => (
        <Grid container>
          <Grid item xs={12} sm={12} lg={12} spacing={4}>
            <Card className=" mb-6 p-4 text-center">
              <Flex
                w="100%"
                justify="space-between"
                borderBottom="1px solid lightgray"
                wrap="wrap">
                <Box>
                  <Heading as="h5">{data.headerText}</Heading>
                </Box>
                <Box
                  direction="row"
                  justifyContent="space-between"
                  color="#0e9146"
                  textAlign="center">
                  <a href="/#" className="mr-3">
                    {count} {data.firstLink}
                  </a>

                  <a href="/#">{data.secondLink}</a>
                </Box>
              </Flex>
              <Flex
                direction="column"
                justify="center"
                align="center"
                maxW="100%"
                my="50">
                <p>
                  <strong>{data.responseText}</strong>
                </p>
                <p className="text-black-80">{data.responseDescription}</p>
                <a href="/#">
                  <Button
                    size="md"
                    height="38px"
                    width="200px"
                    border="2px"
                    borderColor="green.50">
                    {data.buttonText}
                  </Button>
                </a>
              </Flex>
            </Card>
          </Grid>
        </Grid>
      ))}
    </>
  );
}
