type updateReceptionist = {
    username?: string;
    email?: string;
    passwordHash?: string;
    gender?: string;
    phone?: string;
    name?: string;
};
export declare const updateReceptionist: (id: string, data: updateReceptionist, image?: Express.Multer.File) => Promise<{
    updateReceptionist: {
        name: string | null;
        createdAt: Date;
        email: string | null;
        gender: string | null;
        phone: string | null;
        department: string | null;
        userId: number;
    };
}>;
export {};
