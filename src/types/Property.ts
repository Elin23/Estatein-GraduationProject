export type PropertyType = {
    id: string
    image: string
    title: string
    desc: string
    details: { label: string; icon: string }[]
    Price: string

    descriptionLong?: string
    gallery?: string[]
    location?: string
    [key: string]: any
    tags?: string;
}