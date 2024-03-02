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
        name: 'mainTechnology',
        type: 'string',
        title: 'Main Technology Title'
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
        name: 'projectLink',
        type: 'string',
        title: 'Link of project'
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
      {
        name: 'tag',
        type: 'array',
        title: 'Tag Projects',
        of: [{type: 'string'}]
        // of: [
        //   {
        //     name: 'tagProject',
        //     type: 'string',
        //     title: 'Tag-1 Projects',
        //   },
        //   {
        //     name: 'tagProject',
        //     type: 'string',
        //     title: 'Tag-2 Projects',
        //   }
        // ]
        
      },
      {
        name: 'category',
        type: 'reference',
        title: 'Project Category',
        to: [{
            type:'category',
        },]
      },

    ]
  }