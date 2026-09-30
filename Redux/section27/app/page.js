// import DataFetchingDemo from "@/components/DataFetchingDemo";
// import ServerActionsDemo from "@/components/ServerActionDemo";
import UsePromiseDemo from "@/components/UserPromisesDemo";
import { Suspense, use } from "react";

import fs from 'node:fs/promises';
import ErrorBoundary from "../components/ErrorBoundary"

// import ClientDemo from "@/components/ClientDemo";
// import RSCDemo from "@/components/RSCDemo";

export default async function Home() {

 

  const fetchUsersPromise =  new Promise((resolve, reject) => setTimeout( async() => {
    const data = await fs.readFile('dummy-db.json', 'utf-8');

    console.log('DATA:', data);
    const users = JSON.parse(data);
    // resolve(users);
    reject(new Error('Error!'));
  },2000));
  

  
  return (
    <main>
        <ErrorBoundary fallback={<p>Something wnt wrong!</p>}>
          <Suspense fallback={<p>Loading users....</p>}>
            <UsePromiseDemo  usersPromise={fetchUsersPromise} />
          </Suspense>

        </ErrorBoundary>
        
      

        {/* <ServerActionsDemo /> */}

      {/* <DataFetchingDemo/> */}
      
      {/* <ClientDemo>
        <RSCDemo /> 
      </ClientDemo> */}
    </main>
  );
}
