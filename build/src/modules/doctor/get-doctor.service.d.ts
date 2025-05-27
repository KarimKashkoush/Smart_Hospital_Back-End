export declare const getDoctors: () => Promise<{
    timeSlots: {
        id: number;
        dayOfWeek: import(".prisma/client").$Enums.Week;
        shift: import(".prisma/client").$Enums.Shift;
        startTime: string;
        endTime: string;
        booked: {
            date: Date;
            dayOfWeek: import(".prisma/client").$Enums.Week;
        }[];
    }[];
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
}[]>;
export declare const getDoctorDetails: (id: string) => Promise<{
    timeSlots: {
        id: number;
        dayOfWeek: import(".prisma/client").$Enums.Week;
        shift: import(".prisma/client").$Enums.Shift;
        startTime: string;
        endTime: string;
        booked: {
            date: Date;
            dayOfWeek: import(".prisma/client").$Enums.Week;
        }[];
    }[];
    medicalExcuse: {
        id: number;
        image: string | null;
        createdAt: Date;
        email: string;
        status: string | null;
        categoryId: number;
        updatedAt: Date;
        patientId: number;
        doctorId: number;
        fullName: string;
        reason: string;
        startDate: Date;
        endDate: Date;
        rejectionReason: string | null;
    }[];
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
}>;
