export default {
    name: 'projects',
    type: 'document',
    title: 'Projects',
    fields: [
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
      // {
      //   name: 'projectLink',
      //   type: 'string',
      //   title: 'Link of project'
      // },
      {
        name: 'titleImage',
        type: 'image',
        title: 'Title Image',
        options: { hotspot: true },
        fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string"
          }
        ]
      },
      {
        name: 'tag',
        type: 'array',
        title: 'Tag Projects',
        of: [{type: 'string'}]
      },
      {
        name: "gitURL",
        title: "GIT URL",
        type: "url"
      },
      {
        name: "projectURL",
        title: "Project URL",
        type: "url"
      },
    ]
  }