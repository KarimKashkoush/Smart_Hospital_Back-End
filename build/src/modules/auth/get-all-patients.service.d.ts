export declare const getAllPatients: () => Promise<{
    username: string;
    avatar: string;
    user: {
        image: string;
        username: string;
    };
    name: string;
    createdAt: Date;
    email: string;
    gender: import(".prisma/client").$Enums.Gender;
    phone: string;
    birthDate: string;
    emergencyContactName: string;
    emergencyContactRelationship: string;
    emergencyContactNumber: string;
    medicalHistory: string[];
    additionalNotes: string;
    university: string;
    userId: number;
    updatedAt: Date;
}[]>;
