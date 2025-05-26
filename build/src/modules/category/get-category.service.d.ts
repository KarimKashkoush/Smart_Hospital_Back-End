export declare const getCategories: () => Promise<({
    doctor: {
        name: string;
        email: string;
        phone: string;
        userId: number;
        yearsofExperience: string;
        awards: string;
        specializationLong: string;
        specializationShort: string;
    }[];
} & {
    id: number;
    name: string;
    image: string | null;
    description: string | null;
    link: string | null;
    createdAt: Date;
})[]>;
