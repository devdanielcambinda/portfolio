export interface Certificate {
    name: string;
    description: string;
    url: string;
}

export const certificates: Readonly<Certificate>[] = []