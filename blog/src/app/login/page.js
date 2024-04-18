// 'use client';
// import { signIn, signOut, useSession } from 'next-auth/react'
// import React from 'react'
// import  { useState } from 'react'
// import sanityClient from '@sanity/client'



//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     setFormValid(form.checkValidity());
//     if (formValid) {
//       // handle form submission
//     }
//   }


// const Login = () => {
//   const { data: session, status } = useSession();
//   const [formValid, setFormValid] = useState(true);


//   const client = sanityClient({
//     projectId: '03d3ui0u', // replace with your Sanity project ID
//     dataset: 'production', // replace with your Sanity dataset name
//     useCdn: true, // `false` if you want to ensure fresh data
//     token: 'sk9gn4o3bFru3OZGol7yW4mcYb7BOnaBoAex86EvSMFC5gJMeaBzdSPXYHb2AtmJM4Iaq4TeZEkeLErjlQlavhGYUNBhYCE594G5Dn7klWH4mJdP5UUfOfBdqR4CWzM6ptdL5onjabJ0bY9Gf87OAk3zVQrEq14Bz26pv8BUk9oAVj3jTe7I', // add a token if required
//   });


//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   const form = e.target;
//   setFormValid(form.checkValidity());
//   if (formValid) {
//     const name = form.elements.Name.value;
//     const username = form.elements.username.value;
//     const password = form.elements.password.value;
//     const bio = form.elements.bio.value;

//     // Check if username already exists
//     const query = `*[_type == "User" && username == $username]`;
//     const params = {username};
//     const userExists = await client.fetch(query, params);

//     if (userExists.length > 0) {
//       // Username already exists, show error
//       setFormValid(false);
//       return;
//     }

//     const user = {
//       _type: 'User',
//       name,
//       username,
//       password,
//       slug: {
//         _type: 'slug',
//         current: username,
//       },
//       bio: [
//         {
//           _type: 'block',
//           _key: 'uniqueKey1', // Unique key for the block
//           children: [
//             {
//               _type: 'span',
//               _key: 'uniqueKey2', // Unique key for the span
//               text: bio,
//             },
//           ],
//           markDefs: [], // Add an empty markDefs array
//         },
//       ],
//     };

//     const result = await client.create(user);
//     console.log(result);
//   }
// }

//   if (status === "loading") {
//     return <p className="text-center text-xl">Loading....</p>
//   }

// if (status === "authenticated") {
// return (
//   <div className="flex items-center justify-center min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
//     <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg z-10">
//       <div className="text-center">
//         <h2 className="mt-6 text-3xl font-bold text-gray-900">
//           Welcome Back!
//         </h2>
//         <p className="mt-2 text-sm text-gray-600">Please fill in your credentials to login.</p>
//       </div>
//       <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//         {!formValid && <p className="text-red-500">Your Credentials Are Not Filled Or The Username Is Already Taken.</p>}
//         <input type="hidden" name="remember" value="true" />
//         <div className="rounded-md shadow-sm -space-y-px">
//           <div>
//             <label htmlFor="username" className="sr-only">name</label>
//             <input id="Name" name="Name" type="text" required className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${!formValid && 'border-red-500'}`} placeholder="Name" />
//           </div>
//           <div>
//             <label htmlFor="username" className="sr-only">Username</label>
//             <input id="username" name="username" type="text" required className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${!formValid && 'border-red-500'}`} placeholder="Username" />
//           </div>
//           <div>
//             <label htmlFor="password" className="sr-only">Password</label>
//             <input id="password" name="password" type="password" required className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${!formValid && 'border-red-500'}`} placeholder="Password" />
//           </div>
//           <div>
//             <label htmlFor="bio" className="sr-only">Bio</label>
//             <textarea id="bio" name="bio" required className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${!formValid && 'border-red-500'}`} placeholder="Bio"></textarea>
//           </div>
//         </div>

//         <div>
//           <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
//             Sign in
//           </button>
//         </div>
//       </form>
//       <div className="text-center mt-4">
//         <button
//           onClick={() => signOut("google")}
//           className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   </div>
// )
// }

//   if (status === "unauthenticated") {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//         <div className="w-64 h-64 bg-white shadow-lg rounded-lg p-4">
//           <button
//             onClick={() => signIn("google")}
//             className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
//           >
//             Login with Google
//           </button>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="w-64 h-64 bg-white shadow-lg rounded-lg p-4">
//         <button
//           onClick={() => signIn("google")}
//           className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
//         >
//           Login with Google
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Login































'use client';
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'
import  { useState } from 'react'
import sanityClient from '@sanity/client'

const Login = () => {
  const { data: session, status } = useSession();
  const [formValid, setFormValid] = useState(true);

  const client = sanityClient({
    projectId: '03d3ui0u', // replace with your Sanity project ID
    dataset: 'production', // replace with your Sanity dataset name
    useCdn: true, // `false` if you want to ensure fresh data
    token: 'sk9gn4o3bFru3OZGol7yW4mcYb7BOnaBoAex86EvSMFC5gJMeaBzdSPXYHb2AtmJM4Iaq4TeZEkeLErjlQlavhGYUNBhYCE594G5Dn7klWH4mJdP5UUfOfBdqR4CWzM6ptdL5onjabJ0bY9Gf87OAk3zVQrEq14Bz26pv8BUk9oAVj3jTe7I', // add a token if required
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setFormValid(form.checkValidity());
    if (formValid) {
      const name = form.elements.Name.value;
      const username = form.elements.username.value;
      const email = session.user.email;
      const profileImage = session.user.image;
      const password = form.elements.password.value;
      const bio = form.elements.bio.value;

      // Check if username already exists
      const query = `*[_type == "User" && username == $username]`;
      const params = {username};
      const userExists = await client.fetch(query, params);

      if (userExists.length > 0) {
        // Username already exists, show error
        setFormValid(false);
        return;
      }

      const user = {
        _type: 'User',
        name,
        username,
        password,
        profileImage,
        email,
        slug: {
          _type: 'slug',
          current: username,
        },
        bio: [
          {
            _type: 'block',
            _key: 'uniqueKey1', // Unique key for the block
            children: [
              {
                _type: 'span',
                _key: 'uniqueKey2', // Unique key for the span
                text: bio,
              },
            ],
            markDefs: [], // Add an empty markDefs array
          },
        ],
      };

      const result = await client.create(user);
      console.log(result);
    }
  }

  if (status === "loading") {
    return <p className="text-center text-xl">Loading....</p>
  }

  if (status === "authenticated") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg z-10">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Welcome Back!
            </h2>
            <p className="mt-2 text-sm text-gray-600">Please fill in your credentials to login.</p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {!formValid && <p className="text-red-500">Your Credentials Are Not Filled Or The Username Is Already Taken.</p>}
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">name</label>
                <input id="Name" name="Name" type="text" required className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${!formValid && 'border-red-500'}`} placeholder="Name" />
              </div>
              <div>
                <label htmlFor="username" className="sr-only">Username</label>
                <input id="username" name="username" type="text" required className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${!formValid && 'border-red-500'}`} placeholder="Username" />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input id="password" name="password" type="password" required className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${!formValid && 'border-red-500'}`} placeholder="Password" />
              </div>
              <div>
                <label htmlFor="bio" className="sr-only">Bio</label>
                <textarea id="bio" name="bio" required className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${!formValid && 'border-red-500'}`} placeholder="Bio"></textarea>
              </div>
            </div>

            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Sign in
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <button
              onClick={() => signOut("google")}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (status === "unauthenticated") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-64 h-64 bg-white shadow-lg rounded-lg p-4">
          <button
            onClick={() => signIn("google")}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Login with Google
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-64 h-64 bg-white shadow-lg rounded-lg p-4">
        <button
          onClick={() => signIn("google")}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Login with Google
        </button>
      </div>
    </div>
  )
}

export default Login