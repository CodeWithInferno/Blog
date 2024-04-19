'use client';
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import sanityClient from '@sanity/client';

const Settings = () => {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState(null);
  const [editData, setEditData] = useState({});
  const [avatar, setAvatar] = useState(null); // State for the uploaded avatar image
  const loading = status === 'loading';

  useEffect(() => {
    const fetchUserData = async () => {
      if (session) {
        const client = sanityClient({
          projectId: '03d3ui0u',
          dataset: 'production',
          useCdn: true,
        });

        const query = `*[_type == "Users" && email == $email][0]`;
        const params = { email: session.user.email };
        const user = await client.fetch(query, params);

        setUserData(user);
        setEditData(user);
      }
    };

    fetchUserData();
  }, [session]);

  const handleInputChange = (event) => {
    setEditData({
      ...editData,
      [event.target.name]: event.target.value,
    });
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    setAvatar(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const client = sanityClient({
        projectId: '03d3ui0u',
        dataset: 'production',
        token: 'sk9gn4o3bFru3OZGol7yW4mcYb7BOnaBoAex86EvSMFC5gJMeaBzdSPXYHb2AtmJM4Iaq4TeZEkeLErjlQlavhGYUNBhYCE594G5Dn7klWH4mJdP5UUfOfBdqR4CWzM6ptdL5onjabJ0bY9Gf87OAk3zVQrEq14Bz26pv8BUk9oAVj3jTe7I',
        useCdn: false,
      });

      const docId = userData._id;
      const { name, username, email, bio } = editData;

      let avatarURL = userData.avatar;
      if (avatar) {
        const avatarAsset = await uploadAvatar(avatar);
        avatarURL = avatarAsset.url;
      }

      const data = {
        _id: docId,
        _type: 'Users',
        name,
        username,
        email,
        bio,
        avatar: avatarURL,
      };

      await client
        .patch(docId)
        .set(data)
        .commit();

      setUserData({ ...userData, ...editData });

      console.log('User data updated successfully.');
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  const uploadAvatar = async (imageFile) => {
    const client = sanityClient({
      projectId: '03d3ui0u',
      dataset: 'production',
      token: 'sk9gn4o3bFru3OZGol7yW4mcYb7BOnaBoAex86EvSMFC5gJMeaBzdSPXYHb2AtmJM4Iaq4TeZEkeLErjlQlavhGYUNBhYCE594G5Dn7klWH4mJdP5UUfOfBdqR4CWzM6ptdL5onjabJ0bY9Gf87OAk3zVQrEq14Bz26pv8BUk9oAVj3jTe7I',
      useCdn: false,
    });

    const imageAsset = await client.assets.upload('image', imageFile);
    return imageAsset;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {loading && <p className="text-lg">Loading...</p>}
      {!loading && !session && (
        <p className="text-lg text-red-500">You need to sign in to view this page.</p>
      )}
      {!loading && session && userData && (
        <form onSubmit={handleSubmit} className="p-6 bg-gray-800 rounded-lg shadow-md w-80 space-y-4">
          <h1 className="text-2xl font-bold">Settings</h1>
          <label className="block">
            <span>Name</span>
            <input type="text" name="name" value={editData.name} onChange={handleInputChange} className="mt-1 block w-full rounded-md bg-gray-700 text-white border-transparent focus:border-blue-500 focus:bg-gray-600 focus:ring-0" />
          </label>
          <label className="block">
            <span>Username</span>
            <input type="text" name="username" value={editData.username} onChange={handleInputChange} className="mt-1 block w-full rounded-md bg-gray-700 text-white border-transparent focus:border-blue-500 focus:bg-gray-600 focus:ring-0" />
          </label>
          <label className="block">
            <span>Email</span>
            <input type="email" name="email" value={editData.email} onChange={handleInputChange} className="mt-1 block w-full rounded-md bg-gray-700 text-white border-transparent focus:border-blue-500 focus:bg-gray-600 focus:ring-0" />
          </label>
          <label className="block">
            <span>Bio</span>
            <textarea name="bio" value={editData.bio} onChange={handleInputChange} className="mt-1 block w-full rounded-md bg-gray-700 text-white border-transparent focus:border-blue-500 focus:bg-gray-600 focus:ring-0" />
          </label>
          <label className="block">
            <span>Profile Picture</span>
            <input type="file" accept="image/*" onChange={handleAvatarChange} className="mt-1 block w-full rounded-md bg-gray-700 text-white border-transparent focus:border-blue-500 focus:bg-gray-600 focus:ring-0" />
          </label>
          {userData.avatar && (
            <div className="relative">
              <img src={userData.avatar} alt="Avatar" className="w-16 h-16 rounded-full cursor-pointer hover:opacity-75" />
              <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </div>
          )}
          <button type="submit" className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Save Changes</button>
        </form>
      )}
    </div>
  );
};

export default Settings;

























// 'use client';
// import React, { useEffect, useState } from 'react';
// import { useSession } from 'next-auth/react';
// import sanityClient from '@sanity/client';
// import axios from 'axios'; // Import Axios for making HTTP requests

// const Settings = () => {
//   const { data: session, status } = useSession();
//   const [userData, setUserData] = useState(null);
//   const [editData, setEditData] = useState({});
//   const [avatar, setAvatar] = useState(null);
//   const loading = status === 'loading';

//   useEffect(() => {
//     const fetchUserData = async () => {
//       if (session) {
//         const client = sanityClient({
//           projectId: '03d3ui0u',
//           dataset: 'production',
//           useCdn: true,
//         });

//         const query = `*[_type == "Users" && email == $email][0]`;
//         const params = { email: session.user.email };
//         const user = await client.fetch(query, params);

//         setUserData(user);
//         setEditData(user);
//       }
//     };

//     fetchUserData();
//   }, [session]);

//   const handleInputChange = (event) => {
//     setEditData({
//       ...editData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleAvatarChange = (event) => {
//     const file = event.target.files[0];
//     setAvatar(file);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const client = sanityClient({
//         projectId: '03d3ui0u',
//         dataset: 'production',
//         token: 'sk9gn4o3bFru3OZGol7yW4mcYb7BOnaBoAex86EvSMFC5gJMeaBzdSPXYHb2AtmJM4Iaq4TeZEkeLErjlQlavhGYUNBhYCE594G5Dn7klWH4mJdP5UUfOfBdqR4CWzM6ptdL5onjabJ0bY9Gf87OAk3zVQrEq14Bz26pv8BUk9oAVj3jTe7I',
//         useCdn: false,
//       });

//       const docId = userData._id;
//       const { name, username, email, bio } = editData;

//       let avatarURL = userData.avatar;
//       if (avatar) {
//         const avatarAsset = await uploadAvatar(avatar);
//         avatarURL = avatarAsset.secure_url;
//       }

//       const data = {
//         _id: docId,
//         _type: 'Users',
//         name,
//         username,
//         email,
//         bio,
//         avatar: avatarURL,
//       };

//       await client
//         .patch(docId)
//         .set(data)
//         .commit();

//       setUserData({ ...userData, ...editData });

//       console.log('User data updated successfully.');
//     } catch (error) {
//       console.error('Error updating user data:', error);
//     }
//   };

//   const uploadAvatar = async (imageFile) => {
//     const formData = new FormData();
//     formData.append('file', imageFile);
//     formData.append('upload_preset', 'UserImage'); // Replace 'your_upload_preset' with your Cloudinary upload preset
//     const response = await axios.post(
//       `https://api.cloudinary.com/v1_1/dkpkqi4cx/image/upload`, // Replace 'your_cloud_name' with your Cloudinary cloud name
//       formData
//     );
//     return response.data;
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
//       {loading && <p className="text-lg">Loading...</p>}
//       {!loading && !session && (
//         <p className="text-lg text-red-500">You need to sign in to view this page.</p>
//       )}
//       {!loading && session && userData && (
//         <form onSubmit={handleSubmit} className="p-6 bg-gray-800 rounded-lg shadow-md w-80 space-y-4">
//           <h1 className="text-2xl font-bold">Settings</h1>
//           {/* Input fields */}
//           <input type="text" name="name" value={editData.name} onChange={handleInputChange} className="mt-1 block w-full rounded-md bg-gray-700 text-white border-transparent focus:border-blue-500 focus:bg-gray-600 focus:ring-0" />
//           {/* Avatar upload */}
//           <input type="file" accept="image/*" onChange={handleAvatarChange} className="mt-1 block w-full rounded-md bg-gray-700 text-white border-transparent focus:border-blue-500 focus:bg-gray-600 focus:ring-0" />
//           {/* Avatar preview */}
//           {userData.avatar && (
//             <div className="relative">
//               <img src={userData.avatar} alt="Avatar" className="w-16 h-16 rounded-full cursor-pointer hover:opacity-75" />
//               <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 opacity-0 hover:opacity-100">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                 </svg>
//               </div>
//             </div>
//           )}
//           {/* Submit button */}
//           <button type="submit" className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Save Changes</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Settings;
