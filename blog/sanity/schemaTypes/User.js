export const User = {
    name: 'User',
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
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative Text',
          }
        ]
      },
      {
        name: 'bio',
        title: 'Bio',
        type: 'array',
        of: [
          {
            title: 'Block',
            type: 'block',
            styles: [{title: 'Normal', value: 'normal'}],
            lists: [],
          },
        ],
        description: 'The biography of the user',
      },
      {
        name: 'mobile',
        title: 'Mobile',
        type: 'string',
        description: 'The mobile number of the user',
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
        media: 'image',
      },
    },
  }