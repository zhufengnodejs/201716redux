import * as types from '../action-types';
export default  {
    //action creator action创建者，其实就是一个返回action对象的函数
    increment(){
        return {type:types.INCREMENT2}
    },
    decrement(){
        return {type:types.DECREMENT2}
    }
}