export declare const getReceptionistById: (id: string) => Promise<{
    name: string | null;
    createdAt: Date;
    email: string | null;
    gender: string | null;
    phone: string | null;
    department: string | null;
    userId: number;
}>;
