// icons.js
import {
    FaUserFriends, FaFileInvoice, FaCashRegister, FaWarehouse, FaReceipt, FaSignature, FaUsersCog,
    FaBookOpen,FaFileAlt, FaCalendarAlt,FaTheaterMasks, FaShareAlt, FaClipboardList, FaMoneyCheckAlt, FaHandshake, FaProjectDiagram, FaRocket, FaChartLine, FaBullhorn, FaTools, FaEnvelope, FaUserTie, FaBalanceScale
  } from "react-icons/fa";
  import {
    MdOutlineMeetingRoom, MdOutlineInventory, MdOutlineNoteAlt
  } from "react-icons/md";
  import { AiOutlineProject, AiOutlineSchedule, AiOutlineMail } from "react-icons/ai";
  import { HiOutlinePresentationChartBar, HiOutlineDocumentText, HiOutlineClipboardCheck, HiOutlineUserGroup } from "react-icons/hi";
  
  export const iconMap = {
    LandingPage: FaFileAlt,
    Backstage: FaTheaterMasks,
    CRM: FaUserFriends,
    Bigin: FaUsersCog,
    Bookings: FaCalendarAlt,
    Booking: FaCalendarAlt,
    Sign: FaSignature,
    Payroll: FaHandshake,
    Invoice: FaFileInvoice,
    "Invoice ": FaFileInvoice,
    Billing: FaReceipt,
    Books: FaBookOpen,
    Checkout: FaCashRegister,
    Inventory: MdOutlineInventory,
    Projects: FaProjectDiagram,
    Sprints: HiOutlineClipboardCheck,
    "Bug Tracker ": MdOutlineNoteAlt,
    Desk: HiOutlineUserGroup,
    FSM: FaUsersCog,
    Meeting: MdOutlineMeetingRoom,
    NoteBook: MdOutlineNoteAlt,
    Expense: FaMoneyCheckAlt,
    Shift: AiOutlineSchedule,
    Contracts: HiOutlineDocumentText,
    Webinar: HiOutlinePresentationChartBar,
    Survey: HiOutlineClipboardCheck,
    "Marketing Automation": FaClipboardList,
    CommunitySpaces: AiOutlineMail,
    Social: FaShareAlt,

    "Recent Launches": FaRocket,
    Sales: FaChartLine,
    Marketing: FaBullhorn,
    Service: FaTools,
    Finance: FaMoneyCheckAlt,
    "Email and Collaboration": FaEnvelope,
    "Human Resources": FaUserTie,
    Legal: FaBalanceScale,
    "Project Management": FaProjectDiagram,
  };
  