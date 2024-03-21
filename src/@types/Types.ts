import ReactElement from 'react'

export interface CardProps {
    children: ReactElement;
    bg?: string;
}

export interface JobProps {
    id: string;
    type: string;
    title: string;
    description: string;
    salary: string;
    location: string;
}

export interface HeroProps {
    title?: string;
    subtitle?: string;
}
