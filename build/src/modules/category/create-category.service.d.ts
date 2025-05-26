export declare const createCategory: ({ name, image, description, link, }: {
    name: string;
    image: Express.Multer.File;
    description: string;
    link: string;
}) => Promise<{
    id: number;
    name: string;
    image: string | null;
    description: string | null;
    link: string | null;
    createdAt: Date;
}>;
