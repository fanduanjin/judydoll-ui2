import request from './request'

export function save(coupons){
    return request.put('/goods/admin/coupons',coupons)
}