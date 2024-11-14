export enum Role {
    Student = "student",
    Admin = "admin"
}

export interface UserAttributes {
    id: string;
    name: string;
    last_name: string;
    identification: string;
    email: string;
    password: string;
    image: string;
    city: string;
    status: boolean;
    role: Role;
}