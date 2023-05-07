import { faDashboard, faDraftingCompass, faSignsPost, faUsers } from "@fortawesome/free-solid-svg-icons";

export const SidebarData = [
    {
        title: "Dashboard",
        href: "addashboard",
        icon: faDashboard,
    },
    {
        title: "Manage Users",
        href: "musers",
        icon: faUsers,
    },
    {
        title: "Manage Publish Post",
        href: "approveposts",
        icon: faSignsPost,
    }, 
    {
        title: "Manage UnPublish Post",
        href: "unapproveposts",
        icon: faDraftingCompass,
    },
];
