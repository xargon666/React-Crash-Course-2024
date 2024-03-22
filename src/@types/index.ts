import React from "react";

export interface CardProps {
    children: React.ReactNode;
    bg?: string;
}

export interface JobProps {
    id?: string | undefined;
    type?: string | undefined;
    title?: string | undefined;
    description?: string | undefined;
    location?: string | undefined;
    salary?: string | undefined;
    company?: {
        name?: string | undefined
        description?: string | undefined;
        contactEmail: string | undefined
        contactPhone: string | undefined
    }
}

export interface HeroProps {
    title?: string;
    subtitle?: string;
}

export interface ParamsProps {
    params: {
        id?: string | undefined;
        AxiosError?: object;
    };
}
