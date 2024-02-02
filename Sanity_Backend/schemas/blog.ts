// schemas/pet.js
export default {
    name: 'blog',
    type: 'document',
    title: 'Blogs',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
     {
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [
          {
            type: 'block'
          },
          {
            type: 'image'
          }
        ]
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
      },
      {
        name: 'createdAt',
        type: 'datetime',
        title: 'Created At',
      },
    ]
  }