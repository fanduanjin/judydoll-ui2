import request from "./request"

export function list(pageIndex, pageSize,parentId) {
    return request.get("/goods/admin/goodsCategory/list", {
        params: {
            pageIndex,
            pageSize,
            parentId
        }
    })
}

export function add(goodsCategory) {
    return request.put("/goods/admin/goodsCategory/", goodsCategory);

}

export function del(id) {
    return  request.delete("/goods/admin/goodsCategory/" + id)
}

export function modify(goodsCategory) {
    return request.post("/goods/admin/goodsCategory/", goodsCategory)
}

export function get(id){
    return request.get("/goods/admin/goodsCategory/"+id)
}

export function getTree(){
    return request.get("/goods/admin/goodsCategory/getTree")
}