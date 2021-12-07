//  // Get OAuth token
//  export const getOAuth = async function () {
//     const resp = await fetch('https://api.petfinder.com/v2/oauth2/token', {
//          method: 'POST',
//          body: 'grant_type=client_credentials&client_id=' + process.env.PET_FINDER_KEY + '&client_secret=' + process.env.PET_FINDER_SECRET,
//          headers: {
//              'Content-Type': 'application/x-www-form-urlencoded'
//          }
//      });
//      const data = await resp.json();
//      // Store token data
//      localStorage.setItem('petfindertoken', data.access_token);
//      localStorage.setItem('petfindertokentype', data.token_type);
//      localStorage.setItem('expires', (new Date().getTime() + (data.expires_in * 1000)).toString());
// };

// // Make call if token expired
// export const makeCall = () => {
//     // If current token is invalid, get a new one
//     if (!localStorage.getItem('expires') || Number(localStorage.getItem('expires')) - new Date().getTime() < 1) {
//         getOAuth()
//     }
// };