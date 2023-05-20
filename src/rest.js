const expectDataServer = {
    login: "user_872",
    pass: "qwerty"
}

async function getAuthAvtorized(getDataUserForm) {
 const {login, pass} = getDataUserForm
    console.log("getDataUserForm222", getDataUserForm)

    try {
        const url = `https://test.raujet.com/Auth?login=${login}&pass=${pass}`

        const response = await fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        });

        const authTokenData = await response.json();
        localStorage.setItem("answerFromServer", JSON.stringify(authTokenData));

        return authTokenData;
    } catch (error) {
        throw new Error("Unable to fetch data from server");
    }
}

export const rest = {
    getAuthAvtorized
}