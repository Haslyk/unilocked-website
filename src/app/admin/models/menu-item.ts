export default interface MenuItem {
    label: string;
    icon: string;
    route: string;
    roles: string[];
    expands: boolean;
}