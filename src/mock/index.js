import Mock from 'mockjs'

let data = [
    {id: 1, name: 'xxx'},
    {id: 2, name: 'xxx'},
    {id: 3, name: 'xxx'},
    {id: 4, name: 'xxx'},
    {id: 5, name: 'xxx'},
    {id: 6, name: 'xxx'},
    {id: 7, name: 'xxx'},
    {id: 8, name: 'xxx'},
    {id: 9, name: 'xxx'},
    {id: 10, name: 'xxx'},
    {id: 11, name: 'xxx'},
    {id: 12, name: 'xxx'}
];

let img = [
    {id: 1, name: 'xxx'},
    {id: 2, name: 'xxx'},
    {id: 3, name: 'xxx'},
    {id: 4, name: 'xxx'},
    {id: 5, name: 'xxx'}
]

//  接口
Mock.mock('/pageData','post',function(option){
    let {endPage,pageSize} = JSON.parse(option.body)
    let list = data.slice((endPage-1)*pageSize,endPage*pageSize)

    return {
        "status": 200,
        "msg": "seccess",
        "list": list
    }
})
// 
Mock.mock('/imgData','post',function(option){
    let {num} = JSON.parse(option.body)
    let list = img.slice(0,num)

    return {
        "status": 200,
        "msg": "seccess",
        "count": num,
        "list": list
    }
})