import backgrountLayout from '@/layout/BackgroundLayout'
import homePage from '@/bgm-views/HomePage'
// 商品
import productListPage from '@/bgm-views/goods/ListPage'
import productAddPage from '@/bgm-views/goods/AddPage'
//订单
import orderListPage from '@/bgm-views/order/ListPage'
import orderSettingPage from '@/bgm-views/order/SettingPage'
import orderReturnPage from '@/bgm-views/order/ReturnPage'
import orderReturnReasonPage from '@/bgm-views/order/ReturnReasonPage'
//营销
import salesBannerSettingPage from '@/bgm-views/sales/BannerSettingPage'
import salesCouponsPage from '@/bgm-views/sales/coupons/list'
import salesSecondKillListPage from '@/bgm-views/sales/SecondKillListPage'
//权限
import authUserListPage from '@/bgm-views/auth/UserListPage'
import authResourcePage from '@/bgm-views/auth/ResourcePage'
import authRoleListPage from '@/bgm-views/auth/RoleListPage'
import authMenuListPage from '@/bgm-views/auth/MenuListPage'
export default {
    path: '/bgm', component: backgrountLayout,
    children: [
        { path: '', component: homePage },
        {
            path: 'goods',
            children: [
                // { path: '', component: productListPage },
                { path: 'list', component: productListPage },
                { path: 'add', component: productAddPage },
                {path:'edit/:id',component:()=>import('@/bgm-views/goods/EditPage')},
                { path: 'category', component: () => import('@/bgm-views/goods/category') },
                { path: 'addCategory/:parentId', component: () => import('@/bgm-views/goods/category/add') },
                { path: 'editCategory/:id', component: () => import('@/bgm-views/goods/category/edit') },

            ]
        },
        {
            path: 'order',
            children: [
                //{ path: '', component: orderListPage },
                { path: 'list', component: orderListPage },
                { path: 'return', component: orderReturnPage },
                { path: 'returnReason', component: orderReturnReasonPage },
                { path: 'setting', component: orderSettingPage }
            ]
        },
        {
            path: 'sales',
            children: [
                { path: 'bannerList', component: salesBannerSettingPage },
                { path: 'couponsList', component: salesCouponsPage },
                {path:'addCoupons',component: ()=>import('@/bgm-views/sales/coupons/add')},
                { path: 'secondKillList', component: salesSecondKillListPage }
            ]
        },
        {
            path: 'auth',
            children: [
                { path: 'menuList', component: authMenuListPage },
                { path: 'resourceList', component: authResourcePage },
                { path: 'roleList', component: authRoleListPage },
                { path: 'userList', component: authUserListPage }
            ]
        }
    ]
}