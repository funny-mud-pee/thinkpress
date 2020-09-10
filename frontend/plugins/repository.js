import Verify from '@/api/verify.js'
import Repository from '@/api/repository.js'

export default (ctx, inject) => {
  const verifyWithAxios = Verify(ctx.$axios);
  const repositoryWithAxios = Repository(ctx.$axios);

  const repositories = {
    verify: verifyWithAxios(),
    posts: repositoryWithAxios('posts')
  };

  inject('api', repositories)
}
