/**
 * storage封装
 */
const STORAGE_KEY = 'mall'

export default {
  //设置值
  setItem(key, value, module_name){
    if(module_name){
      let val = this.getItem(module_name);
      val[key] = value;
      this.setItem(module_name, val)
    }else{
       //获取整个storage
      let val = this.getStorage();
      //设置值
      val[key] = value;
      //重新写入storage
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
  },

  //获取某一个模块下面的属性
  //例如user下面的userName
  getItem(key,module_name){
    if(module_name) {
      let val = this.getItem(module_name);
      if(val) return val[key];
    }
    return this.getStorage()[key];
  },

  //获取storage
  getStorage(){
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
  },

  //清空
  clear(key, module_name){
    let val = this.getStorage();
    if(module_name){
      if(!val[module_name]) return;
      delete val[module_name][key];
    }else{
      delete val[key];
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  }
}

