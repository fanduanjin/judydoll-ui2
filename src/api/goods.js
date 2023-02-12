import request from "./request"

export function save(goods){
    return request.put("/goods/admin/goods",goods)
}

export function list(pageIndex,pageSize){
    return request.get("/goods/admin/goods/list",{
        params:{
            pageIndex,
            pageSize
        }
    })
}


export function getGoodsInfo(id){
    return request.get("/goods/admin/goods",{
        params:{
            id
        }
    })
}


export function modify(goods){
    return request.post("/goods/admin/goods",goods)
}

export function del(id){
    return  request.delete("/goods/admin/goods/" + id)
}
export function modifyEnable(id,enable){
    return request.post("/goods/admin/goods/enable/"+id,null,{
        params:{
            enable
        }
    })
}