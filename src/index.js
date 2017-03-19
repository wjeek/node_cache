module.exports = {
    CacheManager: require('./CacheManager'),
    providers: {
        MainCacheProvider: require('./providers/complex/MainProvider'),
        MemoryCacheProvider: require('./providers/simple/MemoryCacheProvider'),
        RedisCacheProvider: require('./providers/simple/RedisCacheProvider'),
        FileCacheProvider: require('./providers/simple/FileCacheProvider')
    },
    middlewares: {
        Compression: require('./middlewares/Compression'),
        Format: require('./middlewares/Format'),
        Logger:require('./middlewares/Logger')
    }
};