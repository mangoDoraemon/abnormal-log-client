import request from '@/utils/request'

//查询日志列表
export function listLog(query) {
    return request({
        url: '/logger/list',
        method: 'get',
        params: query
    })
}

//查询日志图表
export function queryBar(query) {
    return request({
        url: '/logger/eChart',
        method: 'get',
        params: query
    })
}