import fetch from 'node-fetch';

async function main(date:string) {
    const myHeaders = new Headers();
    myHeaders.append("Cookie", "nyt-gdpr=0");

    let words: { content?: string, image_url?: string, image_alt_text?: string, position: number }[] = [];

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow" as RequestRedirect
    };

    const response = await fetch(`https://www.nytimes.com/svc/connections/v2/${date}.json`, requestOptions);
    const text = await response.text();
    const parsedText = JSON.parse(text);
    
    parsedText.categories.forEach((category:{"title": string, "cards": {"content"?: string, "image_url"?: string, "image_alt_text"?:string, "position": number}[]}) => {
        return words.push(...category.cards);
    });


    words.sort((a, b) => {
        if (a.position < b.position) return -1;
        if (a.position > b.position) return 1;
        return 0;
    });

    words.forEach(word => {
        words.push(word);
    });

    return words;
}

export default main;