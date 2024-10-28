import { FacebookIcon, InstagramIcon, TwitterXIcon } from "@/components/icons";
import { BookIcon } from "@/components/icons/book-icon";
import { ClockIcon } from "@/components/icons/clock-icon";
import { IngredientIcon } from "@/components/icons/ingredient-icon";

export const NAVBAR_MENU_ITEMS = [
    {
        name: "НҮҮР",
        href: "/"
    },
    {
        name: "ХООЛНЫ ЦЭС",
        href: "/category"
    },
    {
        name: "ХҮРГЭЛТИЙН БҮС",
        href: "/delivery-zone"
    },
]

export const FEATURE_ITEMS = [
    {
        icon: <BookIcon />,
        label: "Хүргэлтийн төлөв хянах",
        content: "Захиалга бэлтгэлийн явцыг хянах"
    },
    {
        icon: <ClockIcon />,
        label: "Шуурхай хүргэлт",
        content: "Захиалга бэлтгэлийн явцыг хянах"
    },
    {
        icon: <IngredientIcon />,
        label: "Эрүүл, баталгаат орц",
        content: "Захиалга бэлтгэлийн явцыг хянах"
    },
    {
        icon: <BookIcon />,
        label: "Хоолны өргөн сонголт",
        content: "Захиалга бэлтгэлийн явцыг хянах"
    }
];

export const FOOTER_NAV_MENU_ITEMS = [
    {
        name: "Нүүр",
        href: "/"
    },
    {
        name: "Холбоо барих",
        href: "/contact"
    },
    {
        name: "Хоолны цэс",
        href: "/category"
    },
    {
        name: "Үйлчилгээний нөхцөл",
        href: "/terms-of-service"
    },
    {
        name: "Хүргэлтийн бүс",
        href: "/delivery-zone"
    },
    {
        name: "Нууцлалын бодлого",
        href: "/privacy-policy"
    },
];

export const SOCIAL_PLATFORMS = [
    {
        name: "Facebook",
        icon: <FacebookIcon />,
        href: "https://www.facebook.com/"
    },
    {
        name: "Instagram",
        icon: <InstagramIcon />,
        href: "https://www.instagram.com/"
    },
    {
        name: "X",
        icon: <TwitterXIcon />,
        href: "https://x.com/home"
    },
]
