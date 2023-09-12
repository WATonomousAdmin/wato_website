import { StaticImageData } from "next/image";

export enum MarqueeDirection {
    Next,
    Previous,
}

export enum FormStatusCode {
    Error,
    Idle,
    Submitting,
    Success
}

export interface JobPostingFrontmatter {
    id: string;
    title: string;
    team: string;
    subteam: string;
    location: string;
    type: string;
}

export interface JobPostingFrontmatterList {
    [team: string]: JobPostingFrontmatter[];
}

export interface JobPostingData {
    id: string;
    title: string;
    subtitle: string;
    contentHtml: string;
}

export interface BlogPostData {
    id: string;
    title: string;
    date: Date | string | number | any;
    authors: string[];
    description: string;
    tags: string[];
    image: string;
    contentHtml: string | any;
}

export interface StaticProps {
    params: {
        id: string;
    };
}

export interface CarouselData {
    title: string,
    blurb: string,
    body: string,
    cta: string,
    image: StaticImageData,
}

