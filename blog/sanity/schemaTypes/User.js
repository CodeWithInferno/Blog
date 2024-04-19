export const Users = {
  name: 'Users',
  title: 'Users',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The name of the user',
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
      description: 'The username of the user',
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string',
      description: 'The password of the user',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'username',
        maxLength: 96,
      },
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'url',
      description: 'The URL of the user\'s profile picture',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
      description: 'The biography of the user',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'The email address of the user',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'imageURL', // Assuming imageURL contains the URL of the user's profile picture
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: title,
        media: media ? <img src={media} alt={title} style={{ maxWidth: '100px', maxHeight: '100px', objectFit: 'cover' }} /> : null,
      };
    },
  },
};
