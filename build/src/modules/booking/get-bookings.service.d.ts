export declare const getBookings: () => Promise<({
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
    bookings: ({
        patient: {
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
        };
    } & {
        id: number;
        createdAt: Date;
        status: string;
        date: Date;
        patientId: number | null;
        timeSlotId: number;
        patientName: string;
    })[];
} & {
    id: number;
    createdAt: Date;
    shift: import(".prisma/client").$Enums.Shift;
    doctorId: number;
    dayOfWeek: import(".prisma/client").$Enums.Week;
    startTime: string;
    endTime: string;
})[]>;
