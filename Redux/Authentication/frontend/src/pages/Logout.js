import { redirect } from "react-router-dom";


export function action()
{
        console.log(" logout page is called")
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
        console.log("logout page");
        console.log(" Token " + localStorage.getItem('token'));

    console.log("redirecting")
    return redirect('/');
}