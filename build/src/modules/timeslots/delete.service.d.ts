export declare const deleteTimeSlot: (id: string) => Promise<{
    message: string;
    deletedTime: {
        id: number;
        createdAt: Date;
        shift: import(".prisma/client").$Enums.Shift;
        doctorId: number;
        dayOfWeek: import(".prisma/client").$Enums.Week;
        startTime: string;
        endTime: string;
    };
}>;
