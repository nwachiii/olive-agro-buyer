import BarChartIcon from '@material-ui/icons/BarChart';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import CodeIcon from '@material-ui/icons/Code';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import DashboardTwoToneIcon from '@material-ui/icons/DashboardTwoTone';
import GradeTwoTone from '@material-ui/icons/GradeTwoTone';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import MailIcon from '@material-ui/icons/MailOutlined';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

var iconsMap = {
  BarChartIcon: BarChartIcon,
  CalendarTodayIcon: CalendarTodayIcon,
  ChatIcon: ChatIcon,
  CodeIcon: CodeIcon,
  DashboardIcon: DashboardIcon,
  ErrorIcon: ErrorIcon,
  FolderIcon: FolderIcon,
  DashboardTwoToneIcon: DashboardTwoToneIcon,
  GradeTwoTone: GradeTwoTone,
  ListAltIcon: ListAltIcon,
  LockOpenIcon: LockOpenIcon,
  MailIcon: MailIcon,
  PresentToAllIcon: PresentToAllIcon,
  PeopleIcon: PeopleIcon,
  PersonIcon: PersonIcon,
  ReceiptIcon: ReceiptIcon,
  SettingsIcon: SettingsIcon,
  ViewModuleIcon: ViewModuleIcon
};

export default [
  {
    label: 'Navigation menu',
    content: JSON.parse(
      `[
  {
    "label": "Home",
    "icon": "DashboardTwoToneIcon",
    "content": [
      {
        "label": "Home",
        "description": "This is a dashboard page example built using this template.",
        "to": "/DashboardDefault"
      }
    ]
  },
  {
    "label": "Messages",
    "icon": "SettingsIcon",
    "content": [
      {
        "label": "Inbox",
        "description": "Wide selection of buttons that feature different styles for backgrounds, borders and hover options!",
        "to": "/Buttons"
      },
      {
        "label": "Outbox",
        "description": "A drop-down list is a graphical control element, similar to a list box, that allows the user to choose one value from a list.",
        "to": "/Dropdowns"
      },
      {
        "label": "Draft",
        "description": "Navigation menus are one of the basic building blocks for any web or mobile app.",
        "to": "/NavigationMenus"
      },
    ]
  },
  {
    "label": "Orders",
    "icon": "ViewModuleIcon",
    "content": [
      {
        "label": "All Orders",
        "description": "Wide selection of cards with multiple styles, borders, actions and hover effects.",
        "to": "/Cards3"
      }
    ]
  },
  {
    "label": "Refund Requests",
    "icon": "ErrorIcon",
    "content": [
      {
        "label": "Reviews",
        "description": "",
        "to": "/LandingPage"
      }
    ]
  },
    ]
  },
  {
    "label": "Transactions",
    "icon": "CodeIcon",
    "content": [
      {
        "label": "Overview",
        "description": "Tables are the backbone of almost all web applications.",
        "to": "/RegularTables1"
      },
      {
        "label": "Tables examples 4",
        "description": "Tables are the backbone of almost all web applications.",
        "to": "/RegularTables4"
      }
    ]
  },
  {
    "label": "Manage Accounts",
    "icon": "BarChartIcon",
    "content": [
      {
        "label": "Controls",
        "description": "Wide selection of forms controls, using a standardised code base, specifically for React.",
        "to": "/FormsControls"
      }
    ]
  },
  {
    "label": "Transaction Report",
    "icon": "ChatIcon",
    "content": [
      {
        "label": "Apex Charts",
        "description": "Wonderful animated charts built with ApexCharts components.",
        "to": "/ApexCharts"
      },
      {
        "label": "Wire Transfer",
        "description": "These can be used with other components and elements to create stunning and unique new elements for your UIs.",
        "to": "/ListGroups"
      }
    ]
  }
]`,
      (key, value) => {
        if (key === 'icon') {
          return iconsMap[value];
        } else {
          return value;
        }
      }
    )
  }
];
