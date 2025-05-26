async function getWords(date) {
    const myHeaders = new Headers();
    myHeaders.append("Cookie", "nyt-gdpr=0");

    let categoriesArray = [];

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    // Fetch from backend proxy instead of NYT API directly
    const response = await fetch(`http://localhost:3000/history/${date}`);
    return await response.json();
}