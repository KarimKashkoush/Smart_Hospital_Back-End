export declare function rescheduleBooking(bookingId: number, newTimeSlotId: number, date: string): Promise<{
    doctorBookings: {
        id: number;
        date: Date;
        patientId: number;
        patientName: string;
        status: string;
    }[];
    booking: {
        timeSlot: {
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
        };
        id: number;
        createdAt: Date;
        status: string;
        date: Date;
        patientId: number | null;
        timeSlotId: number;
        patientName: string;
    };
}>;
