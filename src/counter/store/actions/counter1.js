//action creator action创建者，其实就是一个返回action对象的函数
import * as types from "../action-types";

export default  {
    increment(){
        return {type:types.INCREMENT1}
    },
    decrement(){
        return {type:types.DECREMENT1}
    }
}