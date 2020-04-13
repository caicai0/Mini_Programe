export const request = (params)=>{
    return new Promise((resolve,reject)=>{
        var reqTask = wx.request({
            ...params,
            success: (result) => {
                resolve(result)
            },
            fail: (err) => {
              console.log(err);
                reject(err);
            }
        });
    });
}