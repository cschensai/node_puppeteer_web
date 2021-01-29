const DEMO_LIST = [
  {
    title: 'Bilibili',
    url: 'https://www.bilibili.com/ranking/all/1/1/7',
    selector: '.content .info a',
    attr: 'text',
    type: 'simple',
  },
  {
    title: 'Toutiao News',
    url: 'https://toutiao.io',
    selector: 'h3>a',
    attr: 'text',
    type: 'simple',
  },
  {
    title: 'OSchina News',
    url: 'https://www.oschina.net/news/project',
    selector: '.news-item h3.header a',
    attr: 'text',
    type: 'simple',
  },
  {
    title: 'CNBeta News',
    url: 'https://www.cnbeta.com/',
    rule: '{"title":[".items-area dt a","text"],"desc":[".items-area dd p","text"]}',
    type: 'advanced',
  },
  {
    title: 'Stackoverflow Hots',
    url: 'https://stackoverflow.com/?tab=hot',
    selector: '#question-mini-list h3 a',
    attr: 'text',
    type: 'simple',
  },
  {
    title: '电影天堂',
    url: 'https://www.dy2018.com/',
    rule: '{"title":[".co_content222 li a","text"],"time":[".co_content222 li span","text"]}',
    type: 'advanced',
  },
  {
    title: 'BT电影天堂',
    url: 'http://www.btbtdy.me/',
    rule: '{"title":[".cts_list .cts_ms .title a","text"],"image":[".cts_list .liimg img","src"]}',
    type: 'advanced',
  }
]

export default DEMO_LIST;
