import requests from "./request";

// 三级联动 /api/product/getBaseCategoryList
export const reqCategoryList = () => requests(
    {
        url: '/product/getBaseCategoryList',
        method: 'get'
    }
)