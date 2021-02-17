import React from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex
} from '@chakra-ui/react';
import ToBeConfirmed from './ToBeConfirmed';
import Unpaid from './Unpaid';
import ToBeShipped from './ToBeShipped';
import ToBeReceived from './ToBeReceived';
import InDispute from './InDispute';
import Completed from './Completed';
import AllOrders from './AllOrders';

function AllOrdersIndex() {
  return (
    <Tabs isLazy borderRadius="10px" border="1px solid lightgray">
      <TabList
        variant="outline"
        px="2em"
        pt="1em"
        pb="0.2em"
        my="1em"
        borderBottom="1px solid lightgray"
        _active={{
          paddingBottom: '0'
        }}
        _focus={{
          paddingBottom: '0'
        }}>
        <Flex wrap="wrap">
          <Tab
            defaultIndex={1}
            borderRadius="5px 5px 0 0"
            borderColor="lightgray"
            mr={(2, 4, 6, 10)}
            _hover={{
              background: '#95c53e'
            }}
            _active={{
              borderBottom: '5px solid #95c53e'
            }}
            _focus={{
              borderBottom: '5px solid #95c53e'
            }}>
            All
          </Tab>
          <Tab
            borderRadius="5px 5px 0 0"
            borderColor="lightgray"
            mr={(2, 4, 6, 10)}
            _hover={{
              background: '#95c53e'
            }}
            _active={{
              borderBottom: '4px solid #95c53e'
            }}
            _focus={{
              borderBottom: '4px solid #95c53e'
            }}>
            To be Confirmed
          </Tab>
          <Tab
            borderRadius="5px 5px 0 0"
            borderColor="lightgray"
            mr={(2, 4, 6, 10)}
            _hover={{
              background: '#95c53e'
            }}
            _active={{
              borderBottom: '4px solid #95c53e'
            }}
            _focus={{
              borderBottom: '4px solid #95c53e'
            }}>
            Unpaid
          </Tab>
          <Tab
            borderRadius="5px 5px 0 0"
            borderColor="lightgray"
            mr={(2, 4, 6, 10)}
            _hover={{
              background: '#95c53e'
            }}
            _active={{
              borderBottom: '4px solid #95c53e'
            }}
            _focus={{
              borderBottom: '4px solid #95c53e'
            }}>
            To be Shipped
          </Tab>
          <Tab
            borderRadius="5px 5px 0 0"
            borderColor="lightgray"
            mr={(2, 4, 6, 10)}
            _hover={{
              background: '#95c53e'
            }}
            _active={{
              borderBottom: '4px solid #95c53e'
            }}
            _focus={{
              borderBottom: '4px solid #95c53e'
            }}>
            To be received
          </Tab>
          <Tab
            borderRadius="5px 5px 0 0"
            borderColor="lightgray"
            mr={(2, 4, 6, 10)}
            _hover={{
              background: '#95c53e'
            }}
            _active={{
              borderBottom: '4px solid #95c53e'
            }}
            _focus={{
              borderBottom: '4px solid #95c53e'
            }}>
            In Dispute
          </Tab>
          <Tab
            borderRadius="5px 5px 0 0"
            borderColor="lightgray"
            mr={(2, 4, 6, 10)}
            _hover={{
              background: '#95c53e'
            }}
            _active={{
              borderBottom: '4px solid #95c53e'
            }}
            _focus={{
              borderBottom: '4px solid #95c53e'
            }}>
            Completed/Closed
          </Tab>
        </Flex>
      </TabList>
      <TabPanels p="30px" display="flex" justifyContent="center" w="100%">
        <TabPanel>
          <AllOrders />
        </TabPanel>
        <TabPanel>
          <ToBeConfirmed />
        </TabPanel>
        <TabPanel>
          <Unpaid />
        </TabPanel>
        <TabPanel>
          <ToBeShipped />
        </TabPanel>
        <TabPanel>
          <ToBeReceived />
        </TabPanel>
        <TabPanel>
          <InDispute />
        </TabPanel>
        <TabPanel>
          <Completed />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
export default AllOrdersIndex;
