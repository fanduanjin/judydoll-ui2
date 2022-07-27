import backgrountLayout from '@/layout/BackgroundLayout.vue'
import homePage from '@/bgm-views/HomePage.vue'
import productListPage from '@/bgm-views/goods/ListPage.vue'
import productAddPage from '@/bgm-views/goods/AddPage.vue'
import productBandManagePage from '@/bgm-views/goods/BrandManagePage'
import productCategoryPage from '@/bgm-views/goods/CategoryManagePage'
export default {
    path: '/bgm', component: backgrountLayout,
    children: [
        { path: '', component: homePage },
        {
            path: 'goods',
            children: [
                { path: '', component: productListPage },
                { path: 'list', component: productListPage },
                { path: 'add', component: productAddPage },
                { path: 'brandManage', component: productBandManagePage },
                { path: 'categoryManage', component: productCategoryPage }
            ]
        }
    ]
}