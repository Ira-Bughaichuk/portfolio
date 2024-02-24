export default {
    name: 'projects',
    type: 'document',
    title: 'Projects',
    fields: [
      {
        name: 'metaTitle',
        type: 'string',
        title: 'Meta title'
      },
      {
        name: 'projectTitle',
        type: 'string',
        title: 'Title of project'
      },
      {
        name: 'technologyTitle',
        type: 'string',
        title: 'Technology Title'
      },
      {
        name: 'smallDescription',
        type: 'text',
        title: 'Small Description',
      },
      {
        name: 'titleImage',
        type: 'image',
        title: 'Title Image',
        // fields: [
        //   {
        //     name: 'caption', //alt
        //     type: 'string',
        //     title: 'Caption',
        //     options:{
        //       isHighlighted:true,
        //     },
        //   },
        //   {
        //     name: 'attribution',
        //     type: 'string',
        //     title: 'Attribution',
        //   },
        // ]
      },

    ]
  }