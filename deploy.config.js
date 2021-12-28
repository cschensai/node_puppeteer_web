module.exports = {
  projectName: 'node_puppeteer_web',
  privateKey: '',
  passphrase: '',
  prod: {
    name: '生产环境', // 环境名称
    script: 'npm run build', // 打包命令
    host: '118.25.208.36', // 服务器地址
    port: 22, // 服务器端口号
    username: 'root', // 服务器登录用户名
    password: 'Ww234840', // 服务器登录密码
    distPath: 'build', // 本地打包生成目录
    webDir: '/usr/share/nginx/html/puppeteer', // 服务器部署路径（不可为空或'/'）
    isRemoveRemoteFile: true, // 是否删除远程文件（默认true）
    isRemoveLocalFile: false // 是否删除本地文件（默认true）
  },
};
