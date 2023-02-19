export default interface Role {
  id: string;
  name: string;
  color: string;
  icon: string;
  default: boolean;
  guests: boolean;
  created_at: Date;
  updated_at: Date;
  description: string;
  type: string;
  internal: number;
  permissions: string[];
}
