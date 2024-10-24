import { Octokit } from "octokit";

const octokit = new Octokit({
    auth: 'YOUR-TOKEN'
})

export const getPullRequest = async () => {
    await octokit.request('GET /repos/thriveglobal/thrive-calls-graphapi/pulls/934', {
        owner: 'thriveglobal',
        repo: 'thrive-calls-graphapi',
        pull_number: '934',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })
}
