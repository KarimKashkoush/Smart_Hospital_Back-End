type updateTimeSlotsData = {
    doctorId?: number;
    shift?: "Morning" | "Evening";
    dayOfWeek?: "Saturday" | "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";
    startTime?: string;
    endTime?: string;
};
export declare const updateTimeSlot: (id: string, data: updateTimeSlotsData) => Promise<{
    message: string;
    updatedTime: {
        id: number;
        createdAt: Date;
        shift: import(".prisma/client").$Enums.Shift;
        doctorId: number;
        dayOfWeek: import(".prisma/client").$Enums.Week;
        startTime: string;
        endTime: string;
    };
}>;
export {};
