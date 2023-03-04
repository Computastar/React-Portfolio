import { useState, useEffect } from 'react';
import { octokit } from '../services/octokit';

export default function useOctokit() {
   const [code, setCode] = useState(null);
   
   useEffect(() => {
     async function onLoad() {
       await octokit.request(
        'GET /repos/{owner}/{repo}/actions/variables', {
            owner: 'computastar',
            repo: 'Day-Planner'
       }).then(res => console.log(res)
       )}
    

onLoad();

},[])


return {
   code
    }
};