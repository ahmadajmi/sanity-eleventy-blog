export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fa653b5e9ded3aa0a574591',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-12rpf5qr',
                  apiId: 'b08c3a34-4f22-48a7-a41b-e3ba8a2816ff'
                },
                {
                  buildHookId: '5fa653b6a4fba8a9574188aa',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-5w9opajv',
                  apiId: '8386241c-0f05-4f5c-8f89-3c04e9362b0d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ahmadajmi/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-5w9opajv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
