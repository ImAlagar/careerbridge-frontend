// src/constants.js
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
} from "lucide-react";

export const CONTACT_INFO = [
  {
    type: 'email',
    label: "Mail Here",
    value: "info@careerbridgecouncil.com",
  },
  {
    type: 'phone',
    label: "Call Here",
    value: "+91-8072395200",
  },
  {
    type: 'address',
    label: "Headquarters",
    value: "Old No 25, New No 59, Srinivasa Perumal Sannadhi 1st St, Ganapathy Colony, Royapettah, Chennai, Tamil Nadu 600014",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/career_bridge_council/",
    color: "hover:text-pink-400",
    bgcolor: "hover:bg-pink-800",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/careerbridgecouncil",
    color: "hover:text-blue-400",
    bgcolor: "hover:bg-blue-800",
  },
];