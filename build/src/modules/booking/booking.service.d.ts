type CreateBookingData = {
    timeSlotId: number;
    patientId?: number;
    dateTime: string | Date;
    patientName: string;
};
export declare const createBooking: (data: CreateBookingData) => Promise<{
    id: number;
    createdAt: Date;
    status: string;
    date: Date;
    patientId: number | null;
    timeSlotId: number;
    patientName: string;
}>;
export {};
