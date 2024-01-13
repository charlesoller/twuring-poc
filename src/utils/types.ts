export interface PostInterface {
    user_id: string;
    type: string;
    text?: string;
    prompt?: string;
    image_url?: string;
}

export interface TwurInterface {
    _id: string;
    name: string;
    user_name: string;
    description: string;
    appearance: string;
    profile_pic?: string;
}
