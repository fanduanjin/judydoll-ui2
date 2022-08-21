import request from './request'

export function getBrandList() {
    return request.get('/bgm/brand')
}

export function deleteBrand(id) {
    return request.delete('/bgm/brand?id='+id)
}