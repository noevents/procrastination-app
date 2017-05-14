import axios from 'axios'

const threadsOnPage = 5

export function getBoard({imageboard, board}){
  let threadNums //[{no, last_modified}]
  switch(imageboard){
    case '4chan':
      axios(
          {
            url: `https://proxy-server-menrcwspho.now.sh/http://boards.4chan.org/${board}/threads.json`,
            headers: {'X-Requested-With': 'XMLHttpRequest'}
          }
        )
        .then((res)=>{
          threadNums = res.data.reduce((result, page)=>{
            return result.concat(page.threads)
          }, [])
        })
      break
    case '2ch':
      //2ch threadNums
      break
  }
  return threadNums
}

export function loadNext({imageboard, board}, cache, counter){
  //counter - номер страницы
  let threads = [] // [{"no": ["tim", "tim", ...]}, ...] threadsOnPage количество тредов для вывода номер_треда:массив_с_картинками
  let hasMoreItems = !(cache.length-counter*threadsOnPage <= threadsOnPage)
  switch(imageboard){
    case '4chan':
      for(let i;i<(hasMoreItems?threadsOnPage:cache.length-counter*threadsOnPage);i++){
        let imgs = []
        let num = cache[i+counter*threadsOnPage].no
        axios(
            {
              url: `https://proxy-server-menrcwspho.now.sh/http://boards.4chan.org/${board}/thread/${num}.json`,
              headers: {'X-Requested-With': 'XMLHttpRequest'}
            }
          )
          .then((res)=>{

            res.data.posts.forEach((post)=>{
              if(post.tim) imgs.push(post.tim)
            })
          })
        threads.push({num, imgs})
      }
      break
    case '2ch':
      //2ch api
      break
  }
  return {threads, hasMoreItems}
}