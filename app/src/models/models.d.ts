declare module models {
    interface IPost {
        domain: string;
        banned_by: boolean;
        media_embed?: string;
        subreddit: string;
        selftext_html: string;
        selftext: string;
        likes: number;
        suggested_sort: string;
        user_reports: any;
        secure_media: string;
        link_flair_text: string;
        id: string;
        from_kind: string;
        gilded: number;
        archived: boolean;
        clicked: boolean;
        report_reasons: string;
        author: string;
        media: string;
        score: number;
        approved_by: string;
        over_18: boolean;
        hidden: boolean;
        num_comments: number;
        thumbnail: string;
        subreddit_id: string;
        hide_score: boolean;
        edited: boolean;
        link_flair_css_class: string;
        author_flair_css_class: string;
        downs: number;
        secure_media_embed: any;
        saved: boolean;
        removal_reason: string;
        stickied: boolean;
        from: string;
        is_self: boolean;
        from_id: string;
        permalink: string;
        locked: boolean;
        name: string;
        created: number;
        url: string;
        author_flair_text: string;
        quarantine: boolean;
        title: string;
        created_utc: string;
        distinguished: string;
        mod_reports: any;
        visited: boolean;
        num_reports: number;
        ups: number;
    }
    
    interface IReddit {
        id: string;
        author: string;
        url: string;
        title: string;
    }
}