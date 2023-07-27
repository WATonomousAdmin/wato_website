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
