export interface IUser {
  email: string;
  password: string;
  role: IRoles;
}

export interface IRoles {
  roleType: number;
  roleName: string;
}
