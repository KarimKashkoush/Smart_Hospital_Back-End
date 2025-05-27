export declare const getAllTimeSlots: () => Promise<{
    id: number;
    createdAt: Date;
    shift: import(".prisma/client").$Enums.Shift;
    doctorId: number;
    dayOfWeek: import(".prisma/client").$Enums.Week;
    startTime: string;
    endTime: string;
}[]>;
export declare const getOneTimeSlot: (id: string) => Promise<{
    doctor: {
        name: string;
        createdAt: Date;
        email: string;
        phone: string;
        birthDate: string;
        userId: number;
        categoryId: number;
        yearsofExperience: string;
        education: string;
        awards: string;
        specializationLong: string;
        specializationShort: string;
        week: import(".prisma/client").$Enums.Week[];
        profileImage: string | null;
    };
} & {
    id: number;
    createdAt: Date;
    shift: import(".prisma/client").$Enums.Shift;
    doctorId: number;
    dayOfWeek: import(".prisma/client").$Enums.Week;
    startTime: string;
    endTime: string;
}>;
