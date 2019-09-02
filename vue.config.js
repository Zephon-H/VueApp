module.exports = {
    devServer: {
        port: 3000,     // 端口
    },
    lintOnSave: false   // 取消 eslint 验证
};

// 热更新
chainWebpack: config => {
        // 修复HMR
        config.resolve.symlinks(true);
 
}