<template>
    <el-container>
        <el-aside>
            <el-menu router>
                <el-menu-item index="0" route="/bgm">
                    <template #title>
                        <el-icon>
                            <HomeFilled />
                        </el-icon>
                        <span>首页</span>
                    </template>
                </el-menu-item>
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <Goods />
                        </el-icon>
                        <span>商品</span>
                    </template>
                    <el-menu-item index="1-1" route="/bgm/goods/list"><template #title>
                            <el-icon>
                                <List />
                            </el-icon>
                            <span>商品列表</span>
                        </template>
                    </el-menu-item>
                    <el-menu-item index="1-2" route="/bgm/goods/add"><template #title>
                            <el-icon>
                                <Plus />
                            </el-icon>
                            <span>添加商品</span>
                        </template>
                    </el-menu-item>
                    <el-menu-item index="1-3" route="/bgm/goods/categoryManage"><template #title>
                            <el-icon>
                                <Grid />
                            </el-icon>
                            <span>商品分类</span>
                        </template>
                    </el-menu-item>
                    <el-menu-item index="1-4" route="/bgm/goods/brand"><template #title>
                            <el-icon>
                                <PriceTag />
                            </el-icon>
                            <span>品牌管理</span>
                        </template>
                    </el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="2">
                    <template #title>
                        <el-icon>
                            <Document />
                        </el-icon>
                        <span>订单</span>
                    </template>
                    <el-menu-item index="2-1" route="/bgm/order/list">
                        <el-icon>
                            <List />
                        </el-icon>
                        <span>订单列表</span>
                    </el-menu-item>
                    <el-menu-item index="2-2" route="/bgm/order/setting">
                        <el-icon>
                            <Setting />
                        </el-icon>
                        <span>订单设置</span>
                    </el-menu-item>
                    <el-menu-item index="2-3" route="/bgm/order/return">
                        <el-icon>
                            <Tickets />
                        </el-icon>
                        <span>退货申请处理</span>
                    </el-menu-item>
                    <el-menu-item index="2-4" route="/bgm/order/returnReason">
                        <el-icon>
                            <ChatLineSquare />
                        </el-icon>
                        <span>退货原因设置</span>
                    </el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="3">
                    <template #title>
                        <el-icon>
                            <CollectionTag />
                        </el-icon>
                        <span>营销</span>
                    </template>
                    <el-menu-item index="3-1" route="/bgm/sales/secondKillList">
                        <el-icon>
                            <AlarmClock />
                        </el-icon>
                        <span>秒杀活动列表</span>
                    </el-menu-item>
                    <el-menu-item index="3-2" route="/bgm/sales/couponsList">
                        <el-icon>
                            <Ticket />
                        </el-icon>
                        <span>优惠券列表</span>
                    </el-menu-item>

                    <el-menu-item index="3-3">
                        <el-icon>
                            <Sell />
                        </el-icon>
                        <span>品牌推荐</span>
                    </el-menu-item>

                    <el-menu-item index="3-4">
                        <el-icon>
                            <Medal />
                        </el-icon>
                        <span>新品推荐</span>
                    </el-menu-item>

                    <el-menu-item index="3-5">
                        <el-icon>
                            <CollectionTag />
                        </el-icon>
                        <span>人气推荐</span>
                    </el-menu-item>

                    <el-menu-item index="3-6" route="/bgm/sales/bannerList">
                        <el-icon>
                            <Orange />
                        </el-icon>
                        <span>banner列表</span>
                    </el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="4">
                    <template #title>
                        <el-icon>
                            <Lock />
                        </el-icon>
                        <span>权限</span>
                    </template>
                    <el-menu-item index="4-1" route="/bgm/auth/userList">
                        <el-icon>
                            <User />
                        </el-icon>
                        <span>用户列表</span>
                    </el-menu-item>
                    <el-menu-item index="4-2" route="/bgm/auth/roleList">
                        <el-icon>
                            <Avatar />
                        </el-icon>
                        <span>角色列表</span>
                    </el-menu-item>
                    <el-menu-item index="4-3" route="/bgm/auth/menuList">
                        <el-icon>
                            <Menu />
                        </el-icon>
                        <span>菜单列表</span>
                    </el-menu-item>
                    <el-menu-item index="4-4" route="/bgm/auth/resourceList">
                        <el-icon>
                            <Document />
                        </el-icon>
                        <span>资源列表</span>
                    </el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header>header</el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>