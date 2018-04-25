import $ from 'jquery';
import * as types from './action-types';
export default {
    //先得到关键字，然后请求百度接口得到返回值,然后再改变状态
    //1,没有返回可用的action对象
    //2.没有dispatch方法，无法派发
    //query方法以前返回的是一个普通 对象，现在返回的是一个函数，而且会向函数里传入dispatch和getStage方法
    thunk(wd){
        //dispatch == store.dispatch
        return function(dispatch,getState){
            $.ajax({
                url:'http://www.baidu.com/su',
                method:'GET',
                data:{wd},
                jsonp:'cb',//指定的后台用来接口方法名的参数名
                dataType:'jsonp',//指定返回值的类型
                success:(data)=>{
                    let words = data.s;
                    dispatch({type:types.WORDS,payload:words});
                }
            });
        }
    },
    promise(wd){
       return ajax(wd);
    },
    query(wd){
        return {
            type:types.WORDS,
            payload:ajax2(wd)
        }
    }
}
function ajax2(wd){
    return new Promise(function(resolve,reject){
        $.ajax({
            url:'http://www.baidu.com/su',
            method:'GET',
            data:{wd},
            jsonp:'cb',//指定的后台用来接口方法名的参数名
            dataType:'jsonp',//指定返回值的类型
            success:(data)=>{
                console.log(data.s);
                resolve(data.s);
            }
        });
    });
}
function ajax(wd){
   return new Promise(function(resolve,reject){
       $.ajax({
           url:'http://www.baidu.com/su',
           method:'GET',
           data:{wd},
           jsonp:'cb',//指定的后台用来接口方法名的参数名
           dataType:'jsonp',//指定返回值的类型
           success:(data)=>{
               let words = data.s;
               resolve({type:types.WORDS,payload:words});
           }
       });
   });
}
//Error: Actions must be plain objects. Use custom middleware for async actions.