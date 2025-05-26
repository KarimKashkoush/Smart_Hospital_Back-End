type CreateTimeslotsData = {
    doctorId: number;
    shift: "Morning" | "Evening";
    dayOfWeek: string;
    startTime: string;
    endTime: string;
};
export declare const createTimeslots: (data: CreateTimeslotsData) => Promise<{
    id: number;
    createdAt: Date;
    shift: import(".prisma/client").$Enums.Shift;
    doctorId: number;
    dayOfWeek: import(".prisma/client").$Enums.Week;
    startTime: string;
    endTime: string;
}>;
export {};
