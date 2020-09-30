/**
 * 可选配置实例
 */
export interface ClientProfile {
  /**
   * 签名方法 (TC3-HMAC-SHA256 HmacSHA1 HmacSHA256)
   * @type {string}
   */
  signMethod?: "TC3-HMAC-SHA256" | "HmacSHA256" | "HmacSHA1"
  /**
   * http相关选项实例
   * @type {httpProfile}
   */
  httpProfile?: {
    /**
     * 请求方法（POST GET）
     * @type {string}
     */
    reqMethod?: string
    /**
     * 接入点域名，形如（cvm.ap-shanghai.tencentcloud.com）
     * @type {string}
     */
    endpoint?: string
    /**
     * 协议，目前支持（https://）
     * @type {string}
     */
    protocol?: string
    /**
     *  请求超时时间，默认60s
     * @type {number}
     */
    reqTimeout?: number
  }
}

/**
 * 认证信息类
 */
export interface Credential {
  /**
   * 腾讯云账户secretId，secretKey
   */
  secretId?: string
  /**
   * 腾讯云账户secretKey
   */
  secretKey?: string
  /**
   * 腾讯云账户token
   */
  token?: string
}
