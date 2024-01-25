import Image from "next/image";
import React from "react";
import Link from 'next/link';

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <form action="log" method="post" style={{paddingTop: ''}}>

        <h1 className="items-center justify-between p-24" style={{ fontSize: '50px' }}>Sing in</h1>
     
        <label htmlFor="Name">Enter Your Full Name : </label>
        <input style={{ color: 'black',marginLeft:'2px', margin: '10px',paddingLeft:'2' }} type="text" id="userName" className="border-2 border-gray-400 rounded-md p-2"/>
          
             <br/>
        <label htmlFor="userName">Enter Your UserName : </label>
        <input style={{ color: 'black', margin: '10px' }} type="text" id="userName" className="border-2 border-gray-400 rounded-md p-2"/>
        
          <br/>
          <label htmlFor="password">Enter Your Password : </label>
        <input style={{ color: 'black',margin: '10px' }} type="Password" id="Password" className="border-2 border-gray-400 rounded-md p-2 margin"/>

        <br/>
        <label htmlFor="repassword">Enter Your Password : </label>
        <input style={{ color: 'black',margin: '10px' }} type="Password" id="Password" className="border-2 border-gray-400 rounded-md p-2 margin"/>

        <br/>


        <button style={{ color: 'white',margin: '10px',width:'250px' }} type="submit" className="border-2 border-gray-400 rounded-md p-2 margin">Sign In</button>
        <Link href="/">
        Login
      </Link>
        </form>
         

      </div>
    </main>
  );  
}
