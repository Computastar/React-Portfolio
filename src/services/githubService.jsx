export async function getGitHubData() {

    try{
        const response = await fetch('https://api.github.com/users/computastar/repos')
        return await response.json();
    }catch(error) {
        return [];
    }
}