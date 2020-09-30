import * as tencentcloud from "../../../../tencentcloud-sdk-nodejs"

// 导入对应产品模块的client models。
const CvmClient = tencentcloud.cvm.v20170312.Client

// 实例化要请求产品的client对象
const client = new CvmClient({
  credential: {
    secretId: process.env.secretId,
    secretKey: process.env.secretKey,
  },
  region: "ap-shanghai",
  profile: {
    signMethod: "HmacSHA256",
  },
})
// 通过client对象调用想要访问的接口，需要传入请求对象以及响应回调函数
client.DescribeZones(null).then(
  (data) => {
    console.log(data)
  },
  (err) => {
    console.error("error", err)
  }
)
