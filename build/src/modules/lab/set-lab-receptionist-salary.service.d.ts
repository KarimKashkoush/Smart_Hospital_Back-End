export declare function setLabReceptionistSalary({ id, salary, bonus, }: {
    id: string;
    salary: number;
    bonus: number;
}): Promise<{
    name: string;
    createdAt: Date;
    email: string;
    gender: import(".prisma/client").$Enums.Gender;
    phone: string;
    birthDate: string;
    userId: number;
    onBoarding: Date;
    salary: number | null;
    bonus: number | null;
    supervisorId: number;
}>;
