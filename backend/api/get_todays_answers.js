import fetch from 'node-fetch';


async function main(date) {
    const myHeaders = new Headers();
    myHeaders.append("Cookie", "nyt-gdpr=0");

    let categoriesArray = [];
    let words = [];

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    const response = await fetch(`https://www.nytimes.com/svc/connections/v2/${date}.json`, requestOptions);
    const text = await response.text();
    const parsedText = JSON.parse(text);
    
    parsedText.categories.forEach(category => {
        categoriesArray.push(...category.cards);
    });


    categoriesArray.sort((a, b) => {
        if (a.position < b.position) return -1;
        if (a.position > b.position) return 1;
        return 0;
    });

    categoriesArray.forEach(word => {
        words.push(word);
    });

    return words;
}

export default main;