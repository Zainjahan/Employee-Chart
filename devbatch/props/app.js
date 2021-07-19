Vue.component('blog-post', {
    
    props: ['postTitle'],
    template: '<h3>{{ postTitle }}</h3>'
  })

  <blog-post post-title="hello!"></blog-post>