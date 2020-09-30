/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * DescribeCdnDomainLogs返回参数结构体
 */
export interface DescribeCdnDomainLogsResponse {
  /**
   * 日志包下载链接
   */
  DomainLogs?: Array<DomainLog>

  /**
   * 查询到的总条数
   */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SCDN攻击数据Top URL展示
 */
export interface ScdnTopUrlData {
  /**
   * Top数据的URL
   */
  Url: string

  /**
   * 数值
   */
  Value: number

  /**
   * 时间
   */
  Time: string
}

/**
 * DescribeCdnDomainLogs请求参数结构体
 */
export interface DescribeCdnDomainLogsRequest {
  /**
   * 指定域名查询
   */
  Domain: string

  /**
   * 开始时间，如 2019-09-04 00:00:00
   */
  StartTime: string

  /**
   * 结束时间，如 2019-09-04 12:00:00
   */
  EndTime: string

  /**
   * 分页查询偏移量，默认为 0
   */
  Offset?: number

  /**
   * 分页查询限制数目，默认为 100，最大为 1000
   */
  Limit?: number

  /**
      * 指定区域下载日志
mainland：获取境内加速日志包下载链接
overseas：获取境外加速日志包下载链接
global：同时获取境内、境外加速日志包下载链接（分开打包）
不指定时默认为 mainland
      */
  Area?: string

  /**
      * 指定下载日志的类型。
access：获取访问日志
      */
  LogType?: string
}

/**
 * 智能压缩配置，默认对 js、html、css、xml、json、shtml、htm 后缀且大小为 256 ~ 2097152 字节的文件进行 GZIP 压缩
 */
export interface Compression {
  /**
      * 智能压缩配置开关
on：开启
off：关闭
      */
  Switch: string

  /**
      * 压缩规则数组
注意：此字段可能返回 null，表示取不到有效值。
      */
  CompressionRules?: Array<CompressionRule>
}

/**
 * 是否回源站校验
 */
export interface Revalidate {
  /**
      * on | off 是否总是回源校验
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch: string

  /**
      * 只在特定请求路径回源站校验
注意：此字段可能返回 null，表示取不到有效值。
      */
  Path?: string
}

/**
 * 查询对象及其对应的访问明细数据
 */
export interface ResourceData {
  /**
      * 资源名称，根据查询条件不同分为以下几类：
具体域名：表示该域名明细数据
multiDomains：表示多域名汇总明细数据
项目 ID：指定项目查询时，显示为项目 ID
all：账号维度明细数据
      */
  Resource: string

  /**
   * 资源对应的数据明细
   */
  CdnData: Array<CdnData>
}

/**
 * 封禁url的详细信息
 */
export interface UrlRecord {
  /**
      * 状态(disable表示封禁，enable表示解封)
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: string

  /**
      * 对应的url
注意：此字段可能返回 null，表示取不到有效值。
      */
  RealUrl: string

  /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: string

  /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string
}

/**
 * DescribePushQuota返回参数结构体
 */
export interface DescribePushQuotaResponse {
  /**
   * Url预热用量及配额。
   */
  UrlPush?: Array<Quota>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePurgeQuota返回参数结构体
 */
export interface DescribePurgeQuotaResponse {
  /**
   * URL刷新用量及配额。
   */
  UrlPurge?: Array<Quota>

  /**
   * 目录刷新用量及配额。
   */
  PathPurge?: Array<Quota>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 时间戳防盗链配置
 */
export interface Authentication {
  /**
      * 防盗链配置开关
on：开启
off：关闭
开启时必须且只配置一种模式，其余模式需要设置为 null
      */
  Switch: string

  /**
      * 时间戳防盗链模式 A 配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  TypeA?: AuthenticationTypeA

  /**
      * 时间戳防盗链模式 B 配置（模式 B 后台升级中，暂时不支持配置）
注意：此字段可能返回 null，表示取不到有效值。
      */
  TypeB?: AuthenticationTypeB

  /**
      * 时间戳防盗链模式 C 配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  TypeC?: AuthenticationTypeC

  /**
      * 时间戳防盗链模式 D 配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  TypeD?: AuthenticationTypeD
}

/**
 * ImageOptimization配置
 */
export interface ImageOptimization {
  /**
      * WebpAdapter配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  WebpAdapter: WebpAdapter

  /**
      * TpgAdapter配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  TpgAdapter: TpgAdapter

  /**
      * GuetzliAdapter配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  GuetzliAdapter: GuetzliAdapter
}

/**
 * 域名 https 加速配置，默认为关闭状态
 */
export interface Https {
  /**
      * https 配置开关
on：开启
off：关闭
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch: string

  /**
      * http2 配置开关
on：开启
off：关闭
初次启用 https 加速会默认开启 http2 配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Http2?: string

  /**
      * OCSP 配置开关
on：开启
off：关闭
默认为关闭状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  OcspStapling?: string

  /**
      * 客户端证书校验功能
on：开启
off：关闭
默认为关闭状态，开启时需要上传客户端证书信息，该配置项目前在灰度中，尚未全量
注意：此字段可能返回 null，表示取不到有效值。
      */
  VerifyClient?: string

  /**
      * 服务端证书配置信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  CertInfo?: ServerCert

  /**
      * 客户端证书配置信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClientCertInfo?: ClientCert

  /**
      * Spdy 配置开关
on：开启
off：关闭
默认为关闭状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  Spdy?: string

  /**
      * https 证书部署状态
closed：已关闭
deploying：部署中
deployed：部署成功
failed：部署失败
注意：此字段可能返回 null，表示取不到有效值。
      */
  SslStatus?: string

  /**
      * Hsts配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Hsts?: Hsts
}

/**
 * 缓存配置分路径版本。
默认情况下所有文件缓存过期时间为 30 天 
默认情况下静态加速类型的域名 .php;.jsp;.asp;.aspx 不缓存
 */
export interface RuleCache {
  /**
      * CacheType 对应类型下的匹配内容：
all 时填充 *
file 时填充后缀名，如 jpg、txt
directory 时填充路径，如 /xxx/test
path 时填充绝对路径，如 /xxx/test.html
index 时填充 /
注意：此字段可能返回 null，表示取不到有效值。
      */
  RulePaths: Array<string>

  /**
      * 规则类型：
all：所有文件生效
file：指定文件后缀生效
directory：指定路径生效
path：指定绝对路径生效
index：首页
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleType: string

  /**
      * 缓存配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CacheConfig: RuleCacheConfig
}

/**
 * CDN报表数据
 */
export interface ReportData {
  /**
   * 项目ID/域名ID。
   */
  ResourceId: string

  /**
   * 项目名称/域名。
   */
  Resource: string

  /**
   * 流量总和/带宽最大值，单位分别为bytes，bps。
   */
  Value: number

  /**
   * 单个资源占总体百分比。
   */
  Percentage: number

  /**
   * 计费流量总和/计费带宽最大值，单位分别为bytes，bps。
   */
  BillingValue: number

  /**
   * 计费数值占总体百分比。
   */
  BillingPercentage: number
}

/**
 * DescribeTrafficPackages请求参数结构体
 */
export interface DescribeTrafficPackagesRequest {
  /**
   * 分页查询起始地址，默认 0
   */
  Offset?: number

  /**
   * 分页查询记录个数，默认100，最大1000
   */
  Limit?: number
}

/**
 * CreateClsLogTopic返回参数结构体
 */
export interface CreateClsLogTopicResponse {
  /**
      * 主题ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TopicId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PurgePathCache返回参数结构体
 */
export interface PurgePathCacheResponse {
  /**
   * 刷新任务 ID，同一批次提交的目录共用一个任务 ID
   */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 域名查询时过滤条件。
 */
export interface DomainFilter {
  /**
      * 过滤字段名，支持的列表如下：
- origin：主源站。
- domain：域名。
- resourceId：域名id。
- status：域名状态，online，offline或processing。
- serviceType：业务类型，web，download或media。
- projectId：项目ID。
- domainType：主源站类型，cname表示自有源，cos表示cos接入。
- fullUrlCache：全路径缓存，on或off。
- https：是否配置https，on，off或processing。
- originPullProtocol：回源协议类型，支持http，follow或https。
- tagKey：标签键。
      */
  Name: string

  /**
   * 过滤字段值。
   */
  Value: Array<string>

  /**
      * 是否启用模糊查询，仅支持过滤字段名为origin，domain。
模糊查询时，Value长度最大为1，否则Value长度最大为5。
      */
  Fuzzy?: boolean
}

/**
 * 域名国内海外分地区特殊配置。
 */
export interface SpecificConfig {
  /**
      * 国内特殊配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Mainland?: MainlandConfig

  /**
      * 海外特殊配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Overseas?: OverseaConfig
}

/**
 * 回源 301/302 状态码自动跟随配置，默认为关闭状态
 */
export interface FollowRedirect {
  /**
      * 回源跟随开关
on：开启
off：关闭
      */
  Switch: string
}

/**
 * 自定义请求头配置，默认为关闭状态
 */
export interface RequestHeader {
  /**
      * 自定义请求头配置开关
on：开启
off：关闭
      */
  Switch: string

  /**
      * 自定义请求头配置规则
注意：此字段可能返回 null，表示取不到有效值。
      */
  HeaderRules?: Array<HttpHeaderPathRule>
}

/**
 * DescribePurgeQuota请求参数结构体
 */
export type DescribePurgeQuotaRequest = null

/**
 * Referer 黑白名单配置，默认为关闭状态
 */
export interface Referer {
  /**
      * referer 黑白名单配置开关
on：开启
off：关闭
      */
  Switch: string

  /**
      * referer 黑白名单配置规则
注意：此字段可能返回 null，表示取不到有效值。
      */
  RefererRules?: Array<RefererRule>
}

/**
 * UserAgent黑白名单配置
 */
export interface UserAgentFilter {
  /**
      * 开关，on或off
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch: string

  /**
      * UA黑白名单生效规则列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  FilterRules?: Array<UserAgentFilterRule>
}

/**
 * DescribeScdnTopData返回参数结构体
 */
export interface DescribeScdnTopDataResponse {
  /**
      * WAF 攻击类型统计
注意：此字段可能返回 null，表示取不到有效值。
      */
  TopTypeData?: Array<ScdnTypeData>

  /**
      * TOP 攻击源 IP 统计
注意：此字段可能返回 null，表示取不到有效值。
      */
  TopIpData?: Array<ScdnTopData>

  /**
   * 查询的SCDN类型，当前仅支持 waf
   */
  Mode?: string

  /**
      * TOP URL 统计
注意：此字段可能返回 null，表示取不到有效值。
      */
  TopUrlData?: Array<ScdnTopUrlData>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EnableClsLogTopic请求参数结构体
 */
export interface EnableClsLogTopicRequest {
  /**
   * 日志集ID
   */
  LogsetId: string

  /**
   * 日志主题ID
   */
  TopicId: string

  /**
   * 接入渠道，默认值为cdn
   */
  Channel?: string
}

/**
 * UpdateImageConfig返回参数结构体
 */
export interface UpdateImageConfigResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 路径缓存不缓存配置
 */
export interface CacheConfigNoCache {
  /**
      * 不缓存配置开关
on：开启
off：关闭
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch: string

  /**
      * 总是回源站校验
on：开启
off：关闭
默认为关闭状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  Revalidate: string
}

/**
 * 请求头部及请求url访问控制
 */
export interface AccessControl {
  /**
   * on | off 是否启用请求头部及请求url访问控制
   */
  Switch: string

  /**
      * 请求头部及请求url访问规则
注意：此字段可能返回 null，表示取不到有效值。
      */
  AccessControlRules?: Array<AccessControlRule>

  /**
      * 返回状态码
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReturnCode?: number
}

/**
 * DeleteCdnDomain请求参数结构体
 */
export interface DeleteCdnDomainRequest {
  /**
      * 域名
域名状态需要为【已停用】
      */
  Domain: string
}

/**
 * DescribePayType返回参数结构体
 */
export interface DescribePayTypeResponse {
  /**
      * 计费类型：
flux：流量计费
bandwidth：带宽计费
日结计费方式切换时，若当日产生消耗，则此字段表示第二天即将生效的计费方式，若未产生消耗，则表示已经生效的计费方式。
      */
  PayType?: string

  /**
      * 计费周期：
day：日结计费
month：月结计费
      */
  BillingCycle?: string

  /**
      * 计费方式：
monthMax：日峰值月平均计费，月结模式
day95：日 95 带宽计费，月结模式
month95：月95带宽计费，月结模式
sum：总流量计费，日结与月结均有流量计费模式
max：峰值带宽计费，日结模式
      */
  StatType?: string

  /**
      * 境外计费类型：
all：全地区统一计费
multiple：分地区计费
      */
  RegionType?: string

  /**
      * 当前生效计费类型：
flux：流量计费
bandwidth：带宽计费
      */
  CurrentPayType?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VerifyDomainRecord返回参数结构体
 */
export interface VerifyDomainRecordResponse {
  /**
   * 是否验证成功
   */
  Result?: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListTopData请求参数结构体
 */
export interface ListTopDataRequest {
  /**
      * 查询起始日期：yyyy-MM-dd HH:mm:ss
仅支持按天粒度的数据查询，取入参中的天信息作为起始日期
返回大于等于起始日期当天 00:00:00 点产生的数据
仅支持 90 天内数据查询
      */
  StartTime: string

  /**
      * 查询结束日期：yyyy-MM-dd HH:mm:ss
仅支持按天粒度的数据查询，取入参中的天信息作为结束日期
返回小于等于结束日期当天 23:59:59 产生的数据
EndTime 需要大于等于 StartTime
      */
  EndTime: string

  /**
      * 排序对象，支持以下几种形式：
url：访问 URL 排序，带参数统计，支持的 Filter 为 flux、request
path：访问 URL 排序，不带参数统计，支持的 Filter 为 flux、request（白名单功能）
district：省份、国家/地区排序，支持的 Filter 为 flux、request
isp：运营商排序，支持的 Filter 为 flux、request
host：域名访问数据排序，支持的 Filter 为：flux、request、bandwidth、fluxHitRate、2XX、3XX、4XX、5XX、statusCode
originHost：域名回源数据排序，支持的 Filter 为 flux、request、bandwidth、origin_2XX、origin_3XX、origin_4XX、origin_5XX、OriginStatusCode
      */
  Metric: string

  /**
      * 排序使用的指标名称：
flux：Metric 为 host 时指代访问流量，originHost 时指代回源流量
bandwidth：Metric 为 host 时指代访问带宽，originHost 时指代回源带宽
request：Metric 为 host 时指代访问请求数，originHost 时指代回源请求数
fluxHitRate：平均流量命中率
2XX：访问 2XX 状态码
3XX：访问 3XX 状态码
4XX：访问 4XX 状态码
5XX：访问 5XX 状态码
origin_2XX：回源 2XX 状态码
origin_3XX：回源 3XX 状态码
origin_4XX：回源 4XX 状态码
origin_5XX：回源 5XX 状态码
statusCode：指定访问状态码统计，在 Code 参数中填充指定状态码
OriginStatusCode：指定回源状态码统计，在 Code 参数中填充指定状态码
      */
  Filter: string

  /**
   * 指定查询域名列表，最多可一次性查询 30 个加速域名明细
   */
  Domains?: Array<string>

  /**
      * 指定要查询的项目 ID，[前往查看项目 ID](https://console.cloud.tencent.com/project)
未填充域名情况下，指定项目查询，若填充了具体域名信息，以域名为主
      */
  Project?: number

  /**
      * 多域名查询时，默认（false)返回所有域名汇总排序结果
Metric 为 url、path、district、isp，Filter 为 flux、request 时，可设置为 true，返回每一个 Domain 的排序数据
      */
  Detail?: boolean

  /**
   * Filter 为 statusCode、OriginStatusCode 时，填充指定状态码查询排序结果
   */
  Code?: string

  /**
      * 指定服务地域查询，不填充表示查询中国境内 CDN 数据
mainland：指定查询中国境内 CDN 数据
overseas：指定查询中国境外 CDN 数据，支持的 Metric 为 url、district、host、originHost，当 Metric 为 originHost 时仅支持 flux、request、bandwidth Filter
      */
  Area?: string

  /**
      * 查询中国境外CDN数据，且仅当 Metric 为 district 或 host 时，可指定地区类型查询，不填充表示查询服务地区数据（仅在 Area 为 overseas，且 Metric 是 district 或 host 时可用）
server：指定查询服务地区（腾讯云 CDN 节点服务器所在地区）数据
client：指定查询客户端地区（用户请求终端所在地区）数据，当 Metric 为 host 时仅支持 flux、request、bandwidth Filter
      */
  AreaType?: string
}

/**
 * ListClsTopicDomains请求参数结构体
 */
export interface ListClsTopicDomainsRequest {
  /**
   * 日志集ID
   */
  LogsetId: string

  /**
   * 日志主题ID
   */
  TopicId: string

  /**
   * 接入渠道，默认值为cdn
   */
  Channel?: string
}

/**
 * DescribeDomains返回参数结构体
 */
export interface DescribeDomainsResponse {
  /**
   * 域名列表
   */
  Domains?: Array<BriefDomain>

  /**
      * 符合查询条件的域名总数
用于分页查询
      */
  TotalNumber?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateImageConfig请求参数结构体
 */
export interface UpdateImageConfigRequest {
  /**
   * 域名
   */
  Domain: string

  /**
   * WebpAdapter配置项
   */
  WebpAdapter?: WebpAdapter

  /**
   * TpgAdapter配置项
   */
  TpgAdapter?: TpgAdapter

  /**
   * GuetzliAdapter配置项
   */
  GuetzliAdapter?: GuetzliAdapter
}

/**
 * DisableCaches请求参数结构体
 */
export interface DisableCachesRequest {
  /**
      * 需要禁用的 URL 列表
每次最多可提交 100 条，每日最多可提交 3000 条
      */
  Urls: Array<string>
}

/**
 * 压缩规则配置，最多可设置 100 条
 */
export interface CompressionRule {
  /**
      * true：需要设置为 ture，启用压缩
注意：此字段可能返回 null，表示取不到有效值。
      */
  Compress: boolean

  /**
      * 根据文件后缀类型压缩
例如 jpg、txt
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileExtensions: Array<string>

  /**
      * 触发压缩的文件长度最小值，单位为字节数
注意：此字段可能返回 null，表示取不到有效值。
      */
  MinLength: number

  /**
      * 触发压缩的文件长度最大值，单位为字节数
最大可设置为 30MB
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxLength: number

  /**
      * 文件压缩算法
gzip：指定 GZIP 压缩
brotli：指定Brotli压缩
注意：此字段可能返回 null，表示取不到有效值。
      */
  Algorithms: Array<string>
}

/**
 * 图片优化-GuetzliAdapter配置
 */
export interface GuetzliAdapter {
  /**
      * 开关，"on/off"
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch?: string
}

/**
 * 源站配置复杂类型，支持以下配置：
+ 源站指定为单个域名
+ 源站指定为多个 IP，可配置端口（1~65535），可配置权重（1~100），格式为 IP:端口:权重
+ 回源域名配置
+ 对象存储（COS）作为源站
+ 热备源站指定为单个域名
+ 热备源站指定为多个 IP，可配置端口（1~65535），暂不支持权重配置
+ 热备源站回源域名配置
 */
export interface Origin {
  /**
      * 主源站列表
修改源站时，需要同时填充对应的 OriginType
注意：此字段可能返回 null，表示取不到有效值。
      */
  Origins?: Array<string>

  /**
      * 主源站类型
入参支持以下几种类型：
domain：域名类型
cos：对象存储源站
ip：IP 列表作为源站
ipv6：源站列表为一个单独的 IPv6 地址
ip_ipv6：源站列表为多个 IPv4 地址和一个 IPv6 地址
出参增加以下几种类型：
image：数据万象源站
ftp：历史 FTP 托管源源站，现已不维护
修改 Origins 时需要同时填充对应的 OriginType
IPv6 功能目前尚未全量，需要先申请试用
注意：此字段可能返回 null，表示取不到有效值。
      */
  OriginType?: string

  /**
      * 回主源站时 Host 头部，不填充则默认为加速域名
若接入的是泛域名，则回源 Host 默认为访问时的子域名
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServerName?: string

  /**
      * OriginType 为对象存储（COS）时，可以指定是否允许访问私有 bucket
注意：需要先授权 CDN 访问该私有 Bucket 的权限后，才可开启此配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CosPrivateAccess?: string

  /**
      * 回源协议配置
http：强制 http 回源
follow：协议跟随回源
https：强制 https 回源，https 回源时仅支持源站 443 端口
注意：此字段可能返回 null，表示取不到有效值。
      */
  OriginPullProtocol?: string

  /**
      * 备源站列表
修改备源站时，需要同时填充对应的 BackupOriginType
注意：此字段可能返回 null，表示取不到有效值。
      */
  BackupOrigins?: Array<string>

  /**
      * 备源站类型，支持以下类型：
domain：域名类型
ip：IP 列表作为源站
修改 BackupOrigins 时需要同时填充对应的 BackupOriginType
注意：此字段可能返回 null，表示取不到有效值。
      */
  BackupOriginType?: string

  /**
      * 回备源站时 Host 头部，不填充则默认为主源站的 ServerName
注意：此字段可能返回 null，表示取不到有效值。
      */
  BackupServerName?: string

  /**
      * 回源路径
注意：此字段可能返回 null，表示取不到有效值。
      */
  BasePath?: string
}

/**
 * 排序类型数据结构
 */
export interface TopData {
  /**
      * 资源名称，根据查询条件不同分为以下几类：
具体域名：表示该域名明细数据
multiDomains：表示多域名汇总明细数据
项目 ID：指定项目查询时，显示为项目 ID
all：账号维度明细数据
      */
  Resource: string

  /**
   * 排序结果详情
   */
  DetailData: Array<TopDetailData>
}

/**
 * EnableCaches请求参数结构体
 */
export interface EnableCachesRequest {
  /**
   * 解封 URL 列表
   */
  Urls: Array<string>
}

/**
 * 刷新/预热 可用量及配额
 */
export interface Quota {
  /**
   * 单次批量提交配额上限。
   */
  Batch: number

  /**
   * 每日提交配额上限。
   */
  Total: number

  /**
   * 每日剩余的可提交配额。
   */
  Available: number

  /**
   * 配额的区域。
   */
  Area: string
}

/**
 * 组成CacheKey
 */
export interface HeaderKey {
  /**
      * 是否组成Cachekey
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch?: string

  /**
      * 组成CacheKey的header数组，';' 分割
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value?: string
}

/**
 * DescribeBillingData请求参数结构体
 */
export interface DescribeBillingDataRequest {
  /**
      * 查询起始时间，如：2018-09-04 10:40:00，返回结果大于等于指定时间
根据指定时间粒度参数不同，会进行向前取整，如指定起始时间为 2018-09-04 10:40:00 按小时粒度查询，返回的第一个数据对应时间点为 2018-09-04 10:00:00
起始时间与结束时间间隔小于等于 90 天
      */
  StartTime: string

  /**
      * 查询结束时间，如：2018-09-04 10:40:00，返回结果小于等于指定时间
根据指定时间粒度参数不同，会进行向前取整，如指定结束时间为  2018-09-04 10:40:00 按小时粒度查询时，返回的最后一个数据对应时间点为 2018-09-04 10:00:00
起始时间与结束时间间隔小于等于 90 天
      */
  EndTime: string

  /**
      * 时间粒度，支持模式如下：
min：1 分钟粒度，查询区间需要小于等于 24 小时
5min：5 分钟粒度，查询区间需要小于等于 31 天
hour：1 小时粒度，查询区间需要小于等于 31 天内
day：天粒度，查询区间需要大于 31 天

Area 字段为 overseas 时暂不支持1分钟粒度数据查询
      */
  Interval?: string

  /**
   * 指定域名查询计费数据
   */
  Domain?: string

  /**
      * 指定项目 ID 查询，[前往查看项目 ID](https://console.cloud.tencent.com/project)
若 Domain 参数填充了具体域名信息，则返回该域名的计费数据，而非指定项目计费数据
      */
  Project?: number

  /**
      * 指定加速区域查询计费数据：
mainland：中国境内
overseas：中国境外
不填充时，默认为 mainland
      */
  Area?: string

  /**
      * Area 为 overseas 时，指定国家/地区查询
省份、国家/地区编码可以查看 [省份编码映射](https://cloud.tencent.com/document/product/228/6316#.E7.9C.81.E4.BB.BD.E6.98.A0.E5.B0.84)
不填充时，查询所有国家/地区
      */
  District?: number

  /**
      * 计费统计类型
flux：计费流量
bandwidth：计费带宽
默认为 bandwidth
      */
  Metric?: string
}

/**
 * 缓存配置基础版本
默认情况下所有文件缓存过期时间为 30 天
默认情况下静态加速类型的域名 .php;.jsp;.asp;.aspx 不缓存
注意：该版本不支持设置源站未返回 max-age 情况下的缓存过期规则设置
 */
export interface SimpleCache {
  /**
      * 缓存过期时间规则
注意：此字段可能返回 null，表示取不到有效值。
      */
  CacheRules: Array<SimpleCacheRule>

  /**
      * 遵循源站 Cache-Control: max-age 配置
on：开启
off：关闭
开启后，未能匹配 CacheRules 规则的资源将根据源站返回的 max-age 值进行节点缓存；匹配了 CacheRules 规则的资源将按照 CacheRules 中设置的缓存过期时间在节点进行缓存
与 CompareMaxAge 冲突，不能同时开启
注意：此字段可能返回 null，表示取不到有效值。
      */
  FollowOrigin: string

  /**
      * 强制缓存
on：开启
off：关闭
默认为关闭状态，开启后，源站返回的 no-store、no-cache 资源，也将按照 CacheRules 规则进行缓存
注意：此字段可能返回 null，表示取不到有效值。
      */
  IgnoreCacheControl: string

  /**
      * 忽略源站的Set-Cookie头部
on：开启
off：关闭
默认为关闭状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  IgnoreSetCookie: string

  /**
      * 高级缓存过期配置，开启时会对比源站返回的 max-age 值与 CacheRules 中设置的缓存过期时间，取最小值在节点进行缓存
on：开启
off：关闭
默认为关闭状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  CompareMaxAge: string

  /**
      * 总是回源站校验
注意：此字段可能返回 null，表示取不到有效值。
      */
  Revalidate?: Revalidate
}

/**
 * DeleteClsLogTopic请求参数结构体
 */
export interface DeleteClsLogTopicRequest {
  /**
   * 日志主题ID
   */
  TopicId: string

  /**
   * 日志集ID
   */
  LogsetId: string

  /**
   * 接入渠道，默认值为cdn
   */
  Channel?: string
}

/**
 * DescribeDistrictIspData返回参数结构体
 */
export interface DescribeDistrictIspDataResponse {
  /**
      * 地区运营商数据明细
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data?: Array<DistrictIspInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdatePayType返回参数结构体
 */
export interface UpdatePayTypeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CLS主题信息
 */
export interface TopicInfo {
  /**
   * 主题ID
   */
  TopicId: string

  /**
   * 主题名字
   */
  TopicName: string

  /**
   * 是否启用投递
   */
  Enabled: number

  /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: string
}

/**
 * DescribeDomainsConfig返回参数结构体
 */
export interface DescribeDomainsConfigResponse {
  /**
   * 域名列表
   */
  Domains?: Array<DetailDomain>

  /**
      * 符合查询条件的域名总数
用于分页查询
      */
  TotalNumber?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 域名基础配置信息，含 CNAME、状态、业务类型、加速区域、创建时间、更新时间、源站配置等。
 */
export interface BriefDomain {
  /**
   * 域名 ID
   */
  ResourceId?: string

  /**
   * 腾讯云账号 ID
   */
  AppId?: number

  /**
   * 加速域名
   */
  Domain?: string

  /**
   * 域名对应的 CNAME 地址
   */
  Cname?: string

  /**
      * 加速服务状态
rejected：域名审核未通过，域名备案过期/被注销导致
processing：部署中
online：已启动
offline：已关闭
      */
  Status?: string

  /**
   * 项目 ID，可前往腾讯云项目管理页面查看
   */
  ProjectId?: number

  /**
      * 域名业务类型
web：静态加速
download：下载加速
media：流媒体点播加速
      */
  ServiceType?: string

  /**
   * 域名创建时间
   */
  CreateTime?: string

  /**
   * 域名更新时间
   */
  UpdateTime?: string

  /**
   * 源站配置详情
   */
  Origin?: Origin

  /**
      * 域名封禁状态
normal：正常状态
overdue：账号欠费导致域名关闭，充值完成后可自行启动加速服务
malicious：域名出现恶意行为，强制关闭加速服务
ddos：域名被大规模 DDoS 攻击，关闭加速服务
idle：域名超过 90 天内无任何操作、数据产生，判定为不活跃域名自动关闭加速服务，可自行启动加速服务
unlicensed：域名未备案/备案注销，自动关闭加速服务，备案完成后可自行启动加速服务
capping：触发配置的带宽阈值上限
readonly：域名存在特殊配置，被锁定
      */
  Disable: string

  /**
      * 加速区域
mainland：中国境内加速
overseas：中国境外加速
global：全球加速
      */
  Area: string

  /**
      * 域名锁定状态
normal：未锁定
mainland：中国境内锁定
overseas：中国境外锁定
global：全球锁定
      */
  Readonly: string
}

/**
 * UpdatePayType请求参数结构体
 */
export interface UpdatePayTypeRequest {
  /**
   * 计费区域，mainland或overseas。
   */
  Area: string

  /**
   * 计费类型，flux或bandwidth。
   */
  PayType: string
}

/**
 * 图片优化-TpgAdapter配置
 */
export interface TpgAdapter {
  /**
      * 开关，"on/off"
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch?: string
}

/**
 * 路径缓存缓存配置
 */
export interface CacheConfigCache {
  /**
      * 缓存配置开关
on：开启
off：关闭
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch: string

  /**
      * 缓存过期时间设置
单位为秒，最大可设置为 365 天
注意：此字段可能返回 null，表示取不到有效值。
      */
  CacheTime: number

  /**
      * 高级缓存过期配置，开启时会对比源站返回的 max-age 值与 CacheRules 中设置的缓存过期时间，取最小值在节点进行缓存
on：开启
off：关闭
默认为关闭状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  CompareMaxAge: string

  /**
      * 强制缓存
on：开启
off：关闭
默认为关闭状态，开启后，源站返回的 no-store、no-cache 资源，也将按照 CacheRules 规则进行缓存
注意：此字段可能返回 null，表示取不到有效值。
      */
  IgnoreCacheControl: string

  /**
      * 忽略源站的 Set-Cookie 头部
on：开启
off：关闭
默认为关闭状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  IgnoreSetCookie: string
}

/**
 * DescribeReportData返回参数结构体
 */
export interface DescribeReportDataResponse {
  /**
   * 域名维度数据详情
   */
  DomainReport?: Array<ReportData>

  /**
   * 项目维度数据详情
   */
  ProjectReport?: Array<ReportData>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisableClsLogTopic请求参数结构体
 */
export interface DisableClsLogTopicRequest {
  /**
   * 日志集ID
   */
  LogsetId: string

  /**
   * 日志主题ID
   */
  TopicId: string

  /**
   * 接入渠道，默认值为cdn
   */
  Channel?: string
}

/**
 * 路径缓存缓存配置（三种缓存模式中选取一种）
 */
export interface RuleCacheConfig {
  /**
      * 缓存配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Cache: CacheConfigCache

  /**
      * 不缓存配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  NoCache: CacheConfigNoCache

  /**
      * 遵循源站配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  FollowOrigin: CacheConfigFollowOrigin
}

/**
 * ListClsTopicDomains返回参数结构体
 */
export interface ListClsTopicDomainsResponse {
  /**
   * 开发者ID
   */
  AppId?: number

  /**
   * 渠道
   */
  Channel?: string

  /**
   * 日志集ID
   */
  LogsetId?: string

  /**
   * 日志主题ID
   */
  TopicId?: string

  /**
   * 域名区域配置，其中可能含有已删除的域名，如果要再传回ManageClsTopicDomains接口，需要结合ListCdnDomains接口排除掉已删除的域名
   */
  DomainAreaConfigs?: Array<DomainAreaConfig>

  /**
   * 日志主题名称
   */
  TopicName?: string

  /**
      * 日志主题最近更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CDN加速流量包。
 */
export interface TrafficPackage {
  /**
   * 流量包 Id
   */
  Id: number

  /**
   * 流量包类型
   */
  Type: string

  /**
   * 流量包大小（单位为 Byte）
   */
  Bytes: number

  /**
   * 已消耗流量（单位为 Byte）
   */
  BytesUsed: number

  /**
      * 流量包状态
enabled：已启用
expired：已过期
disabled：未启用
      */
  Status: string

  /**
   * 流量包发放时间
   */
  CreateTime: string

  /**
   * 流量包生效时间
   */
  EnableTime: string

  /**
   * 流量包过期时间
   */
  ExpireTime: string

  /**
   * 流量包是否续订
   */
  ContractExtension: boolean

  /**
   * 流量包是否自动续订
   */
  AutoExtension: boolean

  /**
   * 流量包来源
   */
  Channel: string
}

/**
 * DescribeCdnIp请求参数结构体
 */
export interface DescribeCdnIpRequest {
  /**
   * 需要查询的 IP 列表
   */
  Ips: Array<string>
}

/**
 * Ipv6启用配置，不可更改
 */
export interface Ipv6 {
  /**
      * 域名是否开启ipv6功能，on或off。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch: string
}

/**
 * 状态码缓存过期配置，默认情况下会对 404 状态码缓存 10 秒
 */
export interface StatusCodeCache {
  /**
      * 状态码缓存过期配置开关
on：开启
off：关闭
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch: string

  /**
      * 状态码缓存过期规则明细
注意：此字段可能返回 null，表示取不到有效值。
      */
  CacheRules?: Array<StatusCodeCacheRule>
}

/**
 * DescribeIpVisit返回参数结构体
 */
export interface DescribeIpVisitResponse {
  /**
   * 数据统计的时间粒度，支持5min,  day，分别表示5分钟，1天的时间粒度。
   */
  Interval?: string

  /**
   * 各个资源的回源数据详情。
   */
  Data?: Array<ResourceData>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EnableClsLogTopic返回参数结构体
 */
export interface EnableClsLogTopicResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListClsLogTopics返回参数结构体
 */
export interface ListClsLogTopicsResponse {
  /**
   * 日志集信息
   */
  Logset?: LogSetInfo

  /**
      * 日志主题信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Topics?: Array<TopicInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 域名海外地区特殊配置。UpdateDomainConfig接口只支持修改部分分地区配置，为了兼容旧版本配置，本类型会列出旧版本所有可能存在差异的配置列表，支持修改的配置列表如下：
+ Authentication
+ BandwidthAlert
+ ErrorPage
+ IpFilter
+ Origin
+ Referer
 */
export interface OverseaConfig {
  /**
      * 时间戳防盗链配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Authentication?: Authentication

  /**
      * 带宽封顶配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  BandwidthAlert?: BandwidthAlert

  /**
      * 缓存规则配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Cache?: Cache

  /**
      * 缓存相关配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CacheKey?: CacheKey

  /**
      * 智能压缩配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Compression?: Compression

  /**
      * 下载限速配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DownstreamCapping?: DownstreamCapping

  /**
      * 错误码重定向配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrorPage?: ErrorPage

  /**
      * 301和302自动回源跟随配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  FollowRedirect?: FollowRedirect

  /**
      * 访问协议强制跳转配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ForceRedirect?: ForceRedirect

  /**
      * Https配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Https?: Https

  /**
      * IP黑白名单配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IpFilter?: IpFilter

  /**
      * IP限频配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IpFreqLimit?: IpFreqLimit

  /**
      * 浏览器缓存规则配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxAge?: MaxAge

  /**
      * 源站配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Origin?: Origin

  /**
      * 跨国优化配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  OriginPullOptimization?: OriginPullOptimization

  /**
      * Range回源配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RangeOriginPull?: RangeOriginPull

  /**
      * 防盗链配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Referer?: Referer

  /**
      * 回源请求头部配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RequestHeader?: RequestHeader

  /**
      * 源站响应头部配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResponseHeader?: ResponseHeader

  /**
      * 遵循源站缓存头部配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResponseHeaderCache?: ResponseHeaderCache

  /**
      * seo优化配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Seo?: Seo

  /**
      * 域名业务类型，web，download，media分别表示静态加速，下载加速和流媒体加速。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServiceType?: string

  /**
      * 状态码缓存配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  StatusCodeCache?: StatusCodeCache

  /**
      * 视频拖拽配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  VideoSeek?: VideoSeek
}

/**
 * AddCdnDomain请求参数结构体
 */
export interface AddCdnDomainRequest {
  /**
   * 域名
   */
  Domain: string

  /**
      * 加速域名业务类型
web：静态加速
download：下载加速
media：流媒体点播加速
      */
  ServiceType: string

  /**
   * 源站配置
   */
  Origin: Origin

  /**
   * 项目 ID，默认为 0，代表【默认项目】
   */
  ProjectId?: number

  /**
   * IP 黑白名单配置
   */
  IpFilter?: IpFilter

  /**
   * IP 限频配置
   */
  IpFreqLimit?: IpFreqLimit

  /**
   * 状态码缓存配置
   */
  StatusCodeCache?: StatusCodeCache

  /**
   * 智能压缩配置
   */
  Compression?: Compression

  /**
   * 带宽封顶配置
   */
  BandwidthAlert?: BandwidthAlert

  /**
   * Range 回源配置
   */
  RangeOriginPull?: RangeOriginPull

  /**
   * 301/302 回源跟随配置。
   */
  FollowRedirect?: FollowRedirect

  /**
   * 错误码重定向配置（功能灰度中，尚未全量）
   */
  ErrorPage?: ErrorPage

  /**
   * 请求头部配置
   */
  RequestHeader?: RequestHeader

  /**
   * 响应头部配置
   */
  ResponseHeader?: ResponseHeader

  /**
   * 下载速度配置
   */
  DownstreamCapping?: DownstreamCapping

  /**
   * 节点缓存键配置
   */
  CacheKey?: CacheKey

  /**
   * 头部缓存配置
   */
  ResponseHeaderCache?: ResponseHeaderCache

  /**
   * 视频拖拽配置
   */
  VideoSeek?: VideoSeek

  /**
   * 缓存过期时间配置
   */
  Cache?: Cache

  /**
   * 跨国链路优化配置
   */
  OriginPullOptimization?: OriginPullOptimization

  /**
   * Https 加速配置
   */
  Https?: Https

  /**
   * 时间戳防盗链配置
   */
  Authentication?: Authentication

  /**
   * SEO 优化配置
   */
  Seo?: Seo

  /**
   * 访问协议强制跳转配置
   */
  ForceRedirect?: ForceRedirect

  /**
   * Referer 防盗链配置
   */
  Referer?: Referer

  /**
   * 浏览器缓存配置（功能灰度中，尚未全量）
   */
  MaxAge?: MaxAge

  /**
   * Ipv6 配置（功能灰度中，尚未全量）
   */
  Ipv6?: Ipv6

  /**
      * 地域属性特殊配置
适用于域名境内加速、境外加速配置不一致场景
      */
  SpecificConfig?: SpecificConfig

  /**
      * 域名加速区域
mainland：中国境内加速
overseas：中国境外加速
global：全球加速
使用中国境外加速、全球加速时，需要先开通中国境外加速服务
      */
  Area?: string

  /**
   * 回源超时配置
   */
  OriginPullTimeout?: OriginPullTimeout
}

/**
 * UserAgent黑白名单规则配置
 */
export interface UserAgentFilterRule {
  /**
      * 访问路径生效类型
all: 所有访问路径生效
file: 根据文件后缀类型生效
directory: 根据目录生效
path: 根据完整访问路径生效
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleType: string

  /**
      * 访问路径生效内容
注意：此字段可能返回 null，表示取不到有效值。
      */
  RulePaths: Array<string>

  /**
      * UserAgent列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserAgents: Array<string>

  /**
      * 黑名单或白名单，blacklist或whitelist
注意：此字段可能返回 null，表示取不到有效值。
      */
  FilterType: string
}

/**
 * 排序类型的数据结构
 */
export interface TopDetailData {
  /**
   * 数据类型的名称
   */
  Name: string

  /**
   * 数据值
   */
  Value: number
}

/**
 * 路径缓存遵循源站配置
 */
export interface CacheConfigFollowOrigin {
  /**
      * 遵循源站配置开关
on：开启
off：关闭
      */
  Switch: string
}

/**
 * MagAge 规则配置
 */
export interface MaxAgeRule {
  /**
      * 规则类型：
all：所有文件生效
file：指定文件后缀生效
directory：指定路径生效
path：指定绝对路径生效
      */
  MaxAgeType: string

  /**
      * MaxAgeType 对应类型下的匹配内容：
all 时填充 *
file 时填充后缀名，如 jpg、txt
directory 时填充路径，如 /xxx/test/
path 时填充绝对路径，如 /xxx/test.html
      */
  MaxAgeContents: Array<string>

  /**
   * MaxAge 时间设置，单位秒
   */
  MaxAgeTime: number
}

/**
 * DescribePayType请求参数结构体
 */
export interface DescribePayTypeRequest {
  /**
      * 指定服务地域查询
mainland：境内计费方式查询
overseas：境外计费方式查询
未填充时默认为 mainland
      */
  Area?: string
}

/**
 * DescribeCertDomains请求参数结构体
 */
export interface DescribeCertDomainsRequest {
  /**
   * PEM格式证书Base64编码后的字符串
   */
  Cert: string
}

/**
 * DescribeDomainsConfig请求参数结构体
 */
export interface DescribeDomainsConfigRequest {
  /**
   * 分页查询偏移量，默认为 0
   */
  Offset?: number

  /**
   * 分页查询限制数目，默认为 100，最大可设置为 1000
   */
  Limit?: number

  /**
   * 查询条件过滤器，复杂类型
   */
  Filters?: Array<DomainFilter>

  /**
   * 排序规则
   */
  Sort?: Sort
}

/**
 * 缓存过期配置高级版（功能灰度中，尚未全量）
注意：该版本不支持设置首页缓存规则
 */
export interface AdvancedCache {
  /**
      * 缓存过期规则
注意：此字段可能返回 null，表示取不到有效值。
      */
  CacheRules: Array<AdvanceCacheRule>

  /**
      * 强制缓存配置
on：开启
off：关闭
开启时，源站返回 no-cache、no-store 头部时，仍按照缓存过期规则进行节点缓存
默认为关闭状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  IgnoreCacheControl: string

  /**
      * 忽略源站的 Set-Cookie 头部
on：开启
off：关闭
默认为关闭状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  IgnoreSetCookie: string
}

/**
 * 图片优化-WebpAdapter配置
 */
export interface WebpAdapter {
  /**
      * 开关，"on/off"
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch?: string
}

/**
 * CreateScdnLogTask返回参数结构体
 */
export interface CreateScdnLogTaskResponse {
  /**
      * 创建结果, 
"0" -> 创建成功
      */
  Result?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 名称与ID映射关系
 */
export interface MapInfo {
  /**
   * 对象 Id
   */
  Id: number

  /**
   * 对象名称
   */
  Name: string
}

/**
 * DescribeCertDomains返回参数结构体
 */
export interface DescribeCertDomainsResponse {
  /**
      * 已接入CDN的域名列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Domains?: Array<string>

  /**
      * 已配置证书的CDN域名列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  CertifiedDomains?: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 时间戳防盗链模式 D 配置
时间戳防盗链模式 D 的访问 URL 格式为：http://DomainName/FileName?sign=md5hash&t=timestamp
其中 timestamp 为十进制或十六进制 UNIX 时间戳；
md5hash：MD5（自定义密钥 + 文件路径 + timestamp）
 */
export interface AuthenticationTypeD {
  /**
      * 计算签名的密钥
仅允许大小写字母与数字，长度 6~32 位
注意：此字段可能返回 null，表示取不到有效值。
      */
  SecretKey: string

  /**
      * 签名过期时间设置
单位为秒，最大可设置为 31536000
      */
  ExpireTime: number

  /**
      * 鉴权/不做鉴权的文件扩展名列表设置
如果包含字符 *  则表示所有文件
      */
  FileExtensions: Array<string>

  /**
      * whitelist：白名单，表示对除了 FileExtensions 列表之外的所有类型进行鉴权
blacklist：黑名单，表示仅对 FileExtensions 中的类型进行鉴权
      */
  FilterType: string

  /**
      * 签名参数名设置
仅允许大小写字母、数字或下划线，长度 1~100 位，不能以数字开头
      */
  SignParam: string

  /**
      * 时间戳参数名设置
仅允许大小写字母、数字或下划线，长度 1~100 位，不能以数字开头
      */
  TimeParam: string

  /**
      * 时间戳进制设置
dec：十进制
hex：十六进制
      */
  TimeFormat: string
}

/**
 * 时间戳防盗链模式 C 配置
时间戳防盗链模式 C 的访问 URL 格式为：http://DomainName/md5hash/timestamp/FileName
其中 timestamp 为十六进制 UNIX 时间戳；
md5hash：MD5（自定义密钥 + 文件路径 + timestamp）
 */
export interface AuthenticationTypeC {
  /**
      * 计算签名的密钥
仅允许大小写字母与数字，长度 6~32 位
注意：此字段可能返回 null，表示取不到有效值。
      */
  SecretKey: string

  /**
      * 签名过期时间设置
单位为秒，最大可设置为 31536000
      */
  ExpireTime: number

  /**
      * 鉴权/不做鉴权的文件扩展名列表设置
如果包含字符 *  则表示所有文件
      */
  FileExtensions: Array<string>

  /**
      * whitelist：白名单，表示对除了 FileExtensions 列表之外的所有类型进行鉴权
blacklist：黑名单，表示仅对 FileExtensions 中的类型进行鉴权
      */
  FilterType: string
}

/**
 * 时间戳防盗链模式 B 配置（B 模式正在进行平台升级，暂不支持配置）
 */
export interface AuthenticationTypeB {
  /**
      * 计算签名的密钥
仅允许大小写字母与数字，长度 6~32 位
注意：此字段可能返回 null，表示取不到有效值。
      */
  SecretKey: string

  /**
      * 签名过期时间设置
单位为秒，最大可设置为 31536000
      */
  ExpireTime: number

  /**
      * 鉴权/不做鉴权的文件扩展名列表设置
如果包含字符 *  则表示所有文件
      */
  FileExtensions: Array<string>

  /**
      * whitelist：白名单，表示对除了 FileExtensions 列表之外的所有类型进行鉴权
blacklist：黑名单，表示仅对 FileExtensions 中的类型进行鉴权
      */
  FilterType: string
}

/**
 * 时间戳防盗链模式 A 配置
时间戳防盗链模式 A 的访问 URL 格式为：http://DomainName/Filename?sign=timestamp-rand-uid-md5hash
其中 timestamp 为十进制 UNIX 时间戳；
rand 为随机字符串，0 ~ 100 位大小写字母与数字组成；
uid 为 0；
md5hash：MD5（文件路径-timestamp-rand-uid-自定义密钥）

 */
export interface AuthenticationTypeA {
  /**
      * 计算签名的密钥
仅允许大小写字母与数字，长度 6~32 位
注意：此字段可能返回 null，表示取不到有效值。
      */
  SecretKey: string

  /**
      * 签名参数名设置
仅允许大小写字母、数字或下划线，长度 1~100 位，不能以数字开头
      */
  SignParam: string

  /**
      * 签名过期时间设置
单位为秒，最大可设置为 31536000
      */
  ExpireTime: number

  /**
      * 鉴权/不做鉴权的文件扩展名列表设置
如果包含字符 *  则表示所有文件
      */
  FileExtensions: Array<string>

  /**
      * whitelist：白名单，表示对除了 FileExtensions 列表之外的所有类型进行鉴权
blacklist：黑名单，表示仅对 FileExtensions 中的类型进行鉴权
      */
  FilterType: string
}

/**
 * DescribePushTasks返回参数结构体
 */
export interface DescribePushTasksResponse {
  /**
      * 预热历史记录
注意：此字段可能返回 null，表示取不到有效值。
      */
  PushLogs?: Array<PushTask>

  /**
      * 任务总数，用于分页
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询对象及其对应的回源明细数据
 */
export interface ResourceOriginData {
  /**
      * 资源名称，根据查询条件不同分为以下几类：
具体域名：表示该域名明细数据
multiDomains：表示多域名汇总明细数据
项目 ID：指定项目查询时，显示为项目 ID
all：账号维度明细数据
      */
  Resource: string

  /**
   * 回源数据详情
   */
  OriginData: Array<CdnData>
}

/**
 * 节点 IP 信息
 */
export interface IpStatus {
  /**
   * 节点 IP
   */
  Ip: string

  /**
   * 节点所属区域
   */
  District: string

  /**
   * 节点所属运营商
   */
  Isp: string

  /**
   * 节点所在城市
   */
  City: string

  /**
      * 节点状态
online：上线状态，正常调度服务中
offline：下线状态
      */
  Status: string
}

/**
 * AddCdnDomain返回参数结构体
 */
export interface AddCdnDomainResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 域名地区配置
 */
export interface DomainAreaConfig {
  /**
   * 域名
   */
  Domain: string

  /**
   * 地区列表，其中元素可为mainland/overseas
   */
  Area: Array<string>
}

/**
 * https 加速服务端证书配置：
+ 支持使用托管至 SSL 证书管理的证书进行部署
+ 支持上传 PEM 格式的证书进行部署
注意：上传 PEM 证书时，需要进行 Base 64 编码
 */
export interface ServerCert {
  /**
      * 服务器证书 ID
在 SSL 证书管理进行证书托管时自动生成
注意：此字段可能返回 null，表示取不到有效值。
      */
  CertId?: string

  /**
      * 服务器证书名称
在 SSL 证书管理进行证书托管时自动生成
注意：此字段可能返回 null，表示取不到有效值。
      */
  CertName?: string

  /**
      * 服务器证书信息
上传自有证书时必填，需要包含完整的证书链
注意：此字段可能返回 null，表示取不到有效值。
      */
  Certificate?: string

  /**
      * 服务器密钥信息
上传自有证书时必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  PrivateKey?: string

  /**
      * 证书过期时间
作为入参配置时无需填充
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExpireTime?: string

  /**
      * 证书颁发时间
作为入参配置时无需填充
注意：此字段可能返回 null，表示取不到有效值。
      */
  DeployTime?: string

  /**
      * 证书备注信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Message?: string
}

/**
 * 访问控制规则
 */
export interface AccessControlRule {
  /**
      * requestHeader ：对请求头部进行访问控制
url ： 对访问url进行访问控制
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleType: string

  /**
      * 封禁内容
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleContent: string

  /**
      * on ：正则匹配
off ：字面匹配
注意：此字段可能返回 null，表示取不到有效值。
      */
  Regex: string

  /**
      * RuleType为requestHeader时必填，否则不需要填
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleHeader?: string
}

/**
 * Http 头部设置规则，最多可设置 100 条
 */
export interface HttpHeaderPathRule {
  /**
      * http 头部设置方式
add：添加头部，若已存在头部，则会存在重复头部
set：仅回源头部配置支持，若头部已存在则会覆盖原有头部值，若不存在，则会增加该头部及值
del：删除头部
注意：此字段可能返回 null，表示取不到有效值。
      */
  HeaderMode: string

  /**
      * http 头部名称，最多可设置 100 个字符
注意：此字段可能返回 null，表示取不到有效值。
      */
  HeaderName: string

  /**
      * http 头部值，最多可设置 1000 个字符
Mode 为 del 时非必填
Mode 为 add/set 时必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  HeaderValue: string

  /**
      * 规则类型：
all：所有文件生效
file：指定文件后缀生效
directory：指定路径生效
path：指定绝对路径生效
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleType: string

  /**
      * RuleType 对应类型下的匹配内容：
all 时填充 *
file 时填充后缀名，如 jpg、txt
directory 时填充路径，如 /xxx/test/
path 时填充绝对路径，如 /xxx/test.html
注意：此字段可能返回 null，表示取不到有效值。
      */
  RulePaths: Array<string>
}

/**
 * CreateScdnLogTask请求参数结构体
 */
export interface CreateScdnLogTaskRequest {
  /**
      * 防护类型
Mode 映射如下：
  waf = "Web攻击"
  cc = "CC攻击"
      */
  Mode: string

  /**
   * 查询起始时间，如：2018-09-04 10:40:00，返回结果大于等于指定时间
   */
  StartTime: string

  /**
   * 查询结束时间，如：2018-09-04 10:40:00，返回结果小于等于指定时间
   */
  EndTime: string

  /**
   * 指定域名查询, 不填默认查询全部域名
   */
  Domain?: string

  /**
      * 指定攻击类型, 不填默认查询全部攻击类型
AttackType 映射如下:
  other = '未知类型'
  malicious_scan = "恶意扫描"
  sql_inject = "SQL注入攻击"
  xss = "XSS攻击"
  cmd_inject = "命令注入攻击"
  ldap_inject = "LDAP注入攻击"
  ssi_inject = "SSI注入攻击"
  xml_inject = "XML注入攻击"
  web_service = "WEB服务漏洞攻击"
  web_app = "WEB应用漏洞攻击"
  path_traversal = "路径跨越攻击"
  illegal_access_core_file = "核心文件非法访问"
  trojan_horse = "木马后门攻击"
  csrf = "CSRF攻击"
  malicious_file_upload= '恶意文件上传'
      */
  AttackType?: string

  /**
      * 指定执行动作, 不填默认查询全部执行动作
DefenceMode 映射如下：
  observe = '观察模式'
  intercept = '拦截模式'
      */
  DefenceMode?: string

  /**
   * 不填为全部ip
   */
  Ip?: string

  /**
   * 指定域名查询, 与 Domain 参数同时有值时使用 Domains 参数，不填默认查询全部域名，指定域名查询时最多支持同时选择 5 个域名查询
   */
  Domains?: Array<string>
}

/**
 * 地区运营商明细数据
 */
export interface DistrictIspInfo {
  /**
   * 域名
   */
  Domain: string

  /**
   * 协议类型
   */
  Protocol: string

  /**
   * IP协议类型
   */
  IpProtocol: string

  /**
   * 起始时间
   */
  StartTime: string

  /**
   * 结束时间
   */
  EndTime: string

  /**
   * 时间间隔，单位为分钟
   */
  Interval: number

  /**
   * 指标名称
   */
  Metric: string

  /**
   * 地区ID
   */
  District: number

  /**
   * 运营商ID
   */
  Isp: number

  /**
   * 指标数据点
   */
  DataPoints: Array<number>

  /**
   * 地区名称
   */
  DistrictName: string

  /**
   * 运营商名称
   */
  IspName: string
}

/**
 * 缓存过期规则配置
 */
export interface SimpleCacheRule {
  /**
      * 规则类型：
all：所有文件生效
file：指定文件后缀生效
directory：指定路径生效
path：指定绝对路径生效
index：首页
      */
  CacheType: string

  /**
      * CacheType 对应类型下的匹配内容：
all 时填充 *
file 时填充后缀名，如 jpg、txt
directory 时填充路径，如 /xxx/test
path 时填充绝对路径，如 /xxx/test.html
index 时填充 /
      */
  CacheContents: Array<string>

  /**
      * 缓存过期时间设置
单位为秒，最大可设置为 365 天
      */
  CacheTime: number
}

/**
 * DisableClsLogTopic返回参数结构体
 */
export interface DisableClsLogTopicResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * HSTS 配置。
 */
export interface Hsts {
  /**
   * 是否开启，on或off。
   */
  Switch: string

  /**
      * MaxAge数值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxAge?: number

  /**
      * 是否包含子域名，on或off。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IncludeSubDomains?: string
}

/**
 * DescribeIpStatus请求参数结构体
 */
export interface DescribeIpStatusRequest {
  /**
   * 加速域名
   */
  Domain: string

  /**
      * 节点类型：
edge：表示边缘节点
last：表示回源层节点
不填充情况下，默认返回边缘节点信息
      */
  Layer?: string
}

/**
 * 加速域名全量配置信息
 */
export interface DetailDomain {
  /**
   * 域名 ID
   */
  ResourceId: string

  /**
   * 腾讯云账号ID
   */
  AppId: number

  /**
   * 加速域名
   */
  Domain: string

  /**
      * 域名对应的 CNAME 地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  Cname: string

  /**
      * 加速服务状态
rejected：域名审核未通过，域名备案过期/被注销导致
processing：部署中
online：已启动
offline：已关闭
      */
  Status: string

  /**
   * 项目 ID，可前往腾讯云项目管理页面查看
   */
  ProjectId: number

  /**
      * 域名业务类型
web：静态加速
download：下载加速
media：流媒体点播加速
      */
  ServiceType: string

  /**
   * 域名创建时间
   */
  CreateTime: string

  /**
   * 域名更新时间
   */
  UpdateTime: string

  /**
   * 源站配置
   */
  Origin: Origin

  /**
      * IP 黑白名单配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  IpFilter: IpFilter

  /**
      * IP 访问限频配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  IpFreqLimit: IpFreqLimit

  /**
      * 状态码缓存配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  StatusCodeCache: StatusCodeCache

  /**
      * 智能压缩配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Compression: Compression

  /**
      * 带宽封顶配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  BandwidthAlert: BandwidthAlert

  /**
      * Range 回源配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  RangeOriginPull: RangeOriginPull

  /**
      * 301/302 回源自动跟随配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  FollowRedirect: FollowRedirect

  /**
      * 自定义错误页面配置（功能灰度中，敬请期待）
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrorPage: ErrorPage

  /**
      * 自定义请求头部配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  RequestHeader: RequestHeader

  /**
      * 自定义响应头部配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResponseHeader: ResponseHeader

  /**
      * 单链接下行限速配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  DownstreamCapping: DownstreamCapping

  /**
      * 带参/不带参缓存配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  CacheKey: CacheKey

  /**
      * 源站头部缓存配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResponseHeaderCache: ResponseHeaderCache

  /**
      * 视频拖拽配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  VideoSeek: VideoSeek

  /**
      * 节点缓存过期规则配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Cache: Cache

  /**
      * 跨国链路优化配置（功能灰度中，敬请期待）
注意：此字段可能返回 null，表示取不到有效值。
      */
  OriginPullOptimization: OriginPullOptimization

  /**
      * Https 加速相关配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Https: Https

  /**
      * 时间戳防盗链配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Authentication: Authentication

  /**
      * SEO 优化配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Seo: Seo

  /**
      * 域名封禁状态
normal：正常状态
overdue：账号欠费导致域名关闭，充值完成后可自行启动加速服务
malicious：域名出现恶意行为，强制关闭加速服务
ddos：域名被大规模 DDoS 攻击，关闭加速服务
idle：域名超过 90 天内无任何操作、数据产生，判定为不活跃域名自动关闭加速服务，可自行启动加速服务
unlicensed：域名未备案/备案注销，自动关闭加速服务，备案完成后可自行启动加速服务
capping：触发配置的带宽阈值上限
readonly：域名存在特殊配置，被锁定
注意：此字段可能返回 null，表示取不到有效值。
      */
  Disable: string

  /**
      * 访问协议强制跳转配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  ForceRedirect: ForceRedirect

  /**
      * Referer 防盗链配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Referer: Referer

  /**
      * 浏览器缓存过期规则配置（功能灰度中，敬请期待）
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxAge: MaxAge

  /**
      * Ipv6 配置（功能灰度中，敬请期待）
注意：此字段可能返回 null，表示取不到有效值。
      */
  Ipv6: Ipv6

  /**
      * 是否兼容旧版本配置（内部兼容性字段）
注意：此字段可能返回 null，表示取不到有效值。
      */
  Compatibility: Compatibility

  /**
      * 区域特殊配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  SpecificConfig: SpecificConfig

  /**
      * 加速区域
mainland：中国境内加速
overseas：中国境外加速
global：全球加速
注意：此字段可能返回 null，表示取不到有效值。
      */
  Area: string

  /**
      * 域名锁定状态
normal：未锁定
mainland：中国境内锁定
overseas：中国境外锁定
global：全球锁定
注意：此字段可能返回 null，表示取不到有效值。
      */
  Readonly: string

  /**
      * 回源超时配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  OriginPullTimeout: OriginPullTimeout

  /**
      * 回源S3鉴权配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  AwsPrivateAccess: AwsPrivateAccess

  /**
      * Scdn配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  SecurityConfig: SecurityConfig

  /**
      * ImageOptimization配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  ImageOptimization: ImageOptimization

  /**
      * UA黑白名单配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserAgentFilter: UserAgentFilter

  /**
      * 访问控制
注意：此字段可能返回 null，表示取不到有效值。
      */
  AccessControl: AccessControl

  /**
      * 是否支持高级配置项
on：支持
off：不支持
注意：此字段可能返回 null，表示取不到有效值。
      */
  Advance: string

  /**
      * URL重定向配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  UrlRedirect: UrlRedirect

  /**
      * 访问端口配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  AccessPort: Array<number>
}

/**
 * GetDisableRecords返回参数结构体
 */
export interface GetDisableRecordsResponse {
  /**
      * 封禁历史记录
注意：此字段可能返回 null，表示取不到有效值。
      */
  UrlRecordList?: Array<UrlRecord>

  /**
      * 任务总数，用于分页
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 自定义响应头配置，默认为关闭状态
 */
export interface ResponseHeader {
  /**
      * 自定义响应头开关
on：开启
off：关闭
      */
  Switch: string

  /**
      * 自定义响应头规则
注意：此字段可能返回 null，表示取不到有效值。
      */
  HeaderRules?: Array<HttpHeaderPathRule>
}

/**
 * CDN 节点上下线历史记录
 */
export interface CdnIpHistory {
  /**
      * 操作类型
online：节点上线
offline：节点下线
      */
  Status: string

  /**
      * 操作类型对应的操作时间
当该值为 null 时表示无历史状态变更记录
注意：此字段可能返回 null，表示取不到有效值。
      */
  Datetime: string
}

/**
 * 明细数据的汇总值，各指标根据其特性不同拥有不同汇总方式
 */
export interface SummarizedData {
  /**
      * 汇总方式，存在以下几种：
sum：累加求和
max：最大值，带宽模式下，采用 5 分钟粒度汇总数据，计算峰值带宽
avg：平均值
      */
  Name: string

  /**
   * 汇总后的数据值
   */
  Value: number
}

/**
 * ManageClsTopicDomains请求参数结构体
 */
export interface ManageClsTopicDomainsRequest {
  /**
   * 日志集ID
   */
  LogsetId: string

  /**
   * 日志主题ID
   */
  TopicId: string

  /**
   * 接入渠道，默认值为cdn
   */
  Channel?: string

  /**
   * 域名区域配置，注意：如果此字段为空，则表示解绑对应主题下的所有域名
   */
  DomainAreaConfigs?: Array<DomainAreaConfig>
}

/**
 * 节点缓存过期时间配置，分为以下两种：
+ 基础版缓存过期规则配置
+ 高级版缓存过期规则配置
 */
export interface Cache {
  /**
      * 基础缓存过期时间配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  SimpleCache?: SimpleCache

  /**
      * 高级缓存过期时间配置（功能灰度中，尚未全量）
注意：此字段可能返回 null，表示取不到有效值。
      */
  AdvancedCache?: AdvancedCache

  /**
      * 高级路径缓存配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleCache?: Array<RuleCache>
}

/**
 * 访问协议强制跳转配置，默认为关闭状态
 */
export interface ForceRedirect {
  /**
      * 访问强制跳转配置开关
on：开启
off：关闭
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch: string

  /**
      * 访问强制跳转类型
http：强制 http 跳转
https：强制 https 跳转
注意：此字段可能返回 null，表示取不到有效值。
      */
  RedirectType?: string

  /**
      * 强制跳转时返回状态码 
支持 301、302
注意：此字段可能返回 null，表示取不到有效值。
      */
  RedirectStatusCode?: number
}

/**
 * DescribeOriginData请求参数结构体
 */
export interface DescribeOriginDataRequest {
  /**
      * 查询起始时间，如：2018-09-04 10:40:00，返回结果大于等于指定时间
根据指定时间粒度不同，会进行向前归整，如 2018-09-04 10:40:00 在按 1 小时的时间粒度查询时，返回的第一个数据对应时间点为 2018-09-04 10:00:00
起始时间与结束时间间隔小于等于 90 天
      */
  StartTime: string

  /**
      * 查询结束时间，如：2018-09-04 10:40:00，返回结果小于等于指定时间
根据指定时间粒度不同，会进行向前归整，如 2018-09-04 10:40:00 在按 1 小时的时间粒度查询时，返回的最后一个数据对应时间点为 2018-09-04 10:00:00
起始时间与结束时间间隔小于等于 90 天
      */
  EndTime: string

  /**
      * 指定查询指标，支持的类型有：
flux：回源流量，单位为 byte
bandwidth：回源带宽，单位为 bps
request：回源请求数，单位为 次
failRequest：回源失败请求数，单位为 次
failRate：回源失败率，单位为 %
statusCode：回源状态码，返回 2xx、3xx、4xx、5xx 汇总数据，单位为 个
2xx：返回 2xx 回源状态码汇总及各 2 开头回源状态码数据，单位为 个
3xx：返回 3xx 回源状态码汇总及各 3 开头回源状态码数据，单位为 个
4xx：返回 4xx 回源状态码汇总及各 4 开头回源状态码数据，单位为 个
5xx：返回 5xx 回源状态码汇总及各 5 开头回源状态码数据，单位为 个
支持指定具体状态码查询，若未产生过，则返回为空
      */
  Metric: string

  /**
   * 指定查询域名列表，最多可一次性查询 30 个加速域名明细
   */
  Domains?: Array<string>

  /**
      * 指定要查询的项目 ID，[前往查看项目 ID](https://console.cloud.tencent.com/project)
未填充域名情况下，指定项目查询，最多可一次性查询 30 个加速域名明细
若填充了具体域名信息，以域名为主
      */
  Project?: number

  /**
      * 时间粒度，支持以下几种模式：
min：1 分钟粒度，指定查询区间 24 小时内（含 24 小时），可返回 1 分钟粒度明细数据（指定查询服务地域为中国境外时不支持 1 分钟粒度）
5min：5 分钟粒度，指定查询区间 31 天内（含 31 天），可返回 5 分钟粒度明细数据
hour：1 小时粒度，指定查询区间 31 天内（含 31 天），可返回 1 小时粒度明细数据
day：天粒度，指定查询区间大于 31 天，可返回天粒度明细数据
      */
  Interval?: string

  /**
      * Domains 传入多个时，默认（false)返回多个域名的汇总数据
可按需指定为 true，返回每一个 Domain 的明细数据（statusCode 指标暂不支持）
      */
  Detail?: boolean

  /**
      * 指定服务地域查询，不填充表示查询中国境内 CDN 数据
mainland：指定查询中国境内 CDN 数据
overseas：指定查询中国境外 CDN 数据
      */
  Area?: string
}

/**
 * 分片回源配置，默认为开启状态
 */
export interface RangeOriginPull {
  /**
      * 分片回源配置开关
on：开启
off：关闭
      */
  Switch: string
}

/**
 * 违规 URL 详情
 */
export interface ViolationUrl {
  /**
   * ID
   */
  Id: number

  /**
   * 违规资源原始访问 URL
   */
  RealUrl: string

  /**
   * 快照路径，用于控制台展示违规内容快照
   */
  DownloadUrl: string

  /**
      * 违规资源当前状态
forbid：已封禁
release：已解封
delay ： 延迟处理
reject ：申诉驳回，状态仍为封禁态
complain：申诉进行中
      */
  UrlStatus: string

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 更新时间
   */
  UpdateTime: string
}

/**
 * SearchClsLog返回参数结构体
 */
export interface SearchClsLogResponse {
  /**
   * 查询结果
   */
  Logs?: ClsSearchLogs

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PushUrlsCache请求参数结构体
 */
export interface PushUrlsCacheRequest {
  /**
   * URL 列表，需要包含协议头部 http:// 或 https://
   */
  Urls: Array<string>

  /**
      * 指定预热请求回源时 HTTP 请求的 User-Agent 头部
默认为 TencentCdn
      */
  UserAgent?: string

  /**
      * 预热生效区域
mainland：预热至境内节点
overseas：预热至境外节点
global：预热全球节点
不填充情况下，默认为 mainland， URL 中域名必须在对应区域启用了加速服务才能提交对应区域的预热任务
      */
  Area?: string

  /**
   * 填写"middle"或不填充时预热至中间层节点
   */
  Layer?: string
}

/**
 * 域名国内地区特殊配置。分地区特殊配置。UpdateDomainConfig接口只支持修改部分分地区配置，为了兼容旧版本配置，本类型会列出旧版本所有可能存在差异的配置列表，支持修改的配置列表如下：
+ Authentication
+ BandwidthAlert
+ ErrorPage
+ IpFilter
+ Origin
+ Referer
 */
export interface MainlandConfig {
  /**
      * 时间戳防盗链配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Authentication?: Authentication

  /**
      * 带宽封顶配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  BandwidthAlert?: BandwidthAlert

  /**
      * 缓存规则配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Cache?: Cache

  /**
      * 缓存相关配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CacheKey?: CacheKey

  /**
      * 智能压缩配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Compression?: Compression

  /**
      * 下载限速配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DownstreamCapping?: DownstreamCapping

  /**
      * 错误码重定向配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrorPage?: ErrorPage

  /**
      * 301和302自动回源跟随配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  FollowRedirect?: FollowRedirect

  /**
      * 访问协议强制跳转配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ForceRedirect?: ForceRedirect

  /**
      * Https配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Https?: Https

  /**
      * IP黑白名单配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IpFilter?: IpFilter

  /**
      * IP限频配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IpFreqLimit?: IpFreqLimit

  /**
      * 浏览器缓存规则配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxAge?: MaxAge

  /**
      * 源站配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Origin?: Origin

  /**
      * 跨国优化配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  OriginPullOptimization?: OriginPullOptimization

  /**
      * Range回源配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RangeOriginPull?: RangeOriginPull

  /**
      * 防盗链配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Referer?: Referer

  /**
      * 回源请求头部配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RequestHeader?: RequestHeader

  /**
      * 源站响应头部配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResponseHeader?: ResponseHeader

  /**
      * 遵循源站缓存头部配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResponseHeaderCache?: ResponseHeaderCache

  /**
      * seo优化配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Seo?: Seo

  /**
      * 域名业务类型，web，download，media分别表示静态加速，下载加速和流媒体加速。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServiceType?: string

  /**
      * 状态码缓存配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  StatusCodeCache?: StatusCodeCache

  /**
      * 视频拖拽配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  VideoSeek?: VideoSeek
}

/**
 * DescribeReportData请求参数结构体
 */
export interface DescribeReportDataRequest {
  /**
   * 查询起始时间：yyyy-MM-dd
   */
  StartTime: string

  /**
   * 查询结束时间：yyyy-MM-dd
   */
  EndTime: string

  /**
      * 报表类型
daily：日报表
weekly：周报表（周一至周日）
monthly：月报表（自然月）
      */
  ReportType: string

  /**
      * 域名加速区域
mainland：中国境内
overseas：中国境外
      */
  Area: string

  /**
   * 偏移量，默认0。
   */
  Offset?: number

  /**
   * 数据个数，默认1000。
   */
  Limit?: number

  /**
   * 按项目ID筛选
   */
  Project?: number
}

/**
 * DescribePushTasks请求参数结构体
 */
export interface DescribePushTasksRequest {
  /**
   * 开始时间，如2018-08-08 00:00:00。
   */
  StartTime?: string

  /**
   * 结束时间，如2018-08-08 23:59:59。
   */
  EndTime?: string

  /**
      * 指定任务 ID 查询
TaskId 和起始时间必须指定一项
      */
  TaskId?: string

  /**
   * 查询关键字，请输入域名或 http(s):// 开头完整 URL
   */
  Keyword?: string

  /**
   * 分页查询偏移量，默认为 0
   */
  Offset?: number

  /**
   * 分页查询限制数目，默认为 20
   */
  Limit?: number

  /**
      * 指定地区查询预热纪录
mainland：境内
overseas：境外
global：全球
      */
  Area?: string

  /**
      * 指定任务状态查询
fail：预热失败
done：预热成功
process：预热中
      */
  Status?: string
}

/**
 * DescribeScdnTopData请求参数结构体
 */
export interface DescribeScdnTopDataRequest {
  /**
   * 查询起始时间，如：2018-09-04 10:40:00，返回结果大于等于指定时间
   */
  StartTime: string

  /**
   * 查询结束时间，如：2018-09-04 10:40:00，返回结果小于等于指定时间
   */
  EndTime: string

  /**
      * 查询的SCDN TOP攻击数据类型：
waf：Web 攻击防护TOP数据
      */
  Mode: string

  /**
      * 排序对象，支持以下几种形式：
url：攻击目标 url 排序
ip：攻击源 IP 排序
attackType：攻击类型排序
      */
  Metric: string

  /**
      * 排序使用的指标名称：
request：请求次数
      */
  Filter: string

  /**
   * 指定域名查询
   */
  Domain?: string

  /**
      * 指定攻击类型, 仅 Mode=waf 时有效
不填则查询所有攻击类型的数据总和
AttackType 映射如下:
  other = '未知类型'
  malicious_scan = "恶意扫描"
  sql_inject = "SQL注入攻击"
  xss = "XSS攻击"
  cmd_inject = "命令注入攻击"
  ldap_inject = "LDAP注入攻击"
  ssi_inject = "SSI注入攻击"
  xml_inject = "XML注入攻击"
  web_service = "WEB服务漏洞攻击"
  web_app = "WEB应用漏洞攻击"
  path_traversal = "路径跨越攻击"
  illegal_access_core_file = "核心文件非法访问"
  trojan_horse = "木马后门攻击"
  csrf = "CSRF攻击"
  malicious_file_upload= '恶意文件上传'
      */
  AttackType?: string

  /**
      * 指定防御模式,仅 Mode=waf 时有效
不填则查询所有防御模式的数据总和
DefenceMode 映射如下：
  observe = '观察模式'
  intercept = '拦截模式'
      */
  DefenceMode?: string
}

/**
 * DescribeUrlViolations请求参数结构体
 */
export interface DescribeUrlViolationsRequest {
  /**
   * 分页查询偏移量，默认为 0
   */
  Offset?: number

  /**
   * 分页查询限制数目，默认为 100
   */
  Limit?: number

  /**
   * 指定的域名查询
   */
  Domains?: Array<string>
}

/**
 * Referer 黑白名单配置规则，针对特定资源生效
 */
export interface RefererRule {
  /**
      * 规则类型：
all：所有文件生效
file：指定文件后缀生效
directory：指定路径生效
path：指定绝对路径生效
      */
  RuleType: string

  /**
      * RuleType 对应类型下的匹配内容：
all 时填充 *
file 时填充后缀名，如 jpg、txt
directory 时填充路径，如 /xxx/test/
path 时填充绝对路径，如 /xxx/test.html
      */
  RulePaths: Array<string>

  /**
      * referer 配置类型
whitelist：白名单
blacklist：黑名单
      */
  RefererType: string

  /**
   * referer 内容列表列表
   */
  Referers: Array<string>

  /**
      * 是否允许空 referer
true：允许空 referer
false：不允许空 referer
      */
  AllowEmpty: boolean
}

/**
 * 单节点单 IP 访问限频配置，默认为关闭状态
 */
export interface IpFreqLimit {
  /**
      * IP 限频配置开关
on：开启
off：关闭
      */
  Switch: string

  /**
      * 设置每秒请求数限制
超出限制的请求会直接返回 514
注意：此字段可能返回 null，表示取不到有效值。
      */
  Qps?: number
}

/**
 * CreateClsLogTopic请求参数结构体
 */
export interface CreateClsLogTopicRequest {
  /**
   * 日志主题名称
   */
  TopicName: string

  /**
   * 日志集ID
   */
  LogsetId: string

  /**
   * 接入渠道，默认值为cdn
   */
  Channel?: string

  /**
   * 域名区域信息
   */
  DomainAreaConfigs?: Array<DomainAreaConfig>
}

/**
 * 违规资源封禁/解封返回类型
 */
export interface CacheOptResult {
  /**
      * 成功的url列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  SuccessUrls?: Array<string>

  /**
      * 失败的url列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailUrls: Array<string>
}

/**
 * CreateVerifyRecord返回参数结构体
 */
export interface CreateVerifyRecordResponse {
  /**
   * 子解析
   */
  SubDomain?: string

  /**
   * 解析值
   */
  Record?: string

  /**
   * 解析类型
   */
  RecordType?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopCdnDomain请求参数结构体
 */
export interface StopCdnDomainRequest {
  /**
      * 域名
域名需要为【已启动】状态
      */
  Domain: string
}

/**
 * DescribeMapInfo返回参数结构体
 */
export interface DescribeMapInfoResponse {
  /**
   * 映射关系数组。
   */
  MapInfoList?: Array<MapInfo>

  /**
      * 服务端区域id和子区域id的映射关系。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServerRegionRelation?: Array<RegionMapRelation>

  /**
      * 客户端区域id和子区域id的映射关系。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClientRegionRelation?: Array<RegionMapRelation>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTrafficPackages返回参数结构体
 */
export interface DescribeTrafficPackagesResponse {
  /**
   * 流量包总个数
   */
  TotalCount?: number

  /**
   * 流量包详情
   */
  TrafficPackages?: Array<TrafficPackage>

  /**
   * 即将过期的流量包个数（7天内）
   */
  ExpiringCount?: number

  /**
   * 有效流量包个数
   */
  EnabledCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMapInfo请求参数结构体
 */
export interface DescribeMapInfoRequest {
  /**
      * 映射查询类别：
isp：运营商映射查询
district：省份（中国境内）、国家/地区（中国境外）映射查询
      */
  Name: string
}

/**
 * EnableCaches返回参数结构体
 */
export interface EnableCachesResponse {
  /**
      * 结果列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  CacheOptResult?: CacheOptResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 路径保留参数配置
 */
export interface RuleQueryString {
  /**
      * on | off CacheKey是否由QueryString组成
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch: string

  /**
      * includeCustom 包含部分url参数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Action: string

  /**
      * 使用/排除的url参数数组，';' 分割
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value: string
}

/**
 * DescribeIpVisit请求参数结构体
 */
export interface DescribeIpVisitRequest {
  /**
      * 查询起始时间，如：2018-09-04 10:40:10，返回结果大于等于指定时间
根据指定时间粒度不同，会进行向前归整，如 2018-09-04 10:40:10 在按 5 分钟的时间粒度查询时，返回的第一个数据对应时间点为 2018-09-04 10:40:00
      */
  StartTime: string

  /**
      * 查询结束时间，如：2018-09-04 10:40:10，返回结果小于等于指定时间
根据指定时间粒度不同，会进行向前归整，如 2018-09-04 10:40:10 在按 5 分钟的时间粒度查询时，返回的最后一个数据对应时间点为 2018-09-04 10:40:00
      */
  EndTime: string

  /**
   * 指定查询域名列表，最多可一次性查询 30 个加速域名明细
   */
  Domains?: Array<string>

  /**
      * 指定要查询的项目 ID，[前往查看项目 ID](https://console.cloud.tencent.com/project)
未填充域名情况下，指定项目查询，若填充了具体域名信息，以域名为主
      */
  Project?: number

  /**
      * 时间粒度，支持以下几种模式：
5min：5 分钟粒度，查询时间区间 24 小时内，默认返回 5 分钟粒度活跃用户数
day：天粒度，查询时间区间大于 1 天时，默认返回天粒度活跃用户数
      */
  Interval?: string
}

/**
 * 状态码缓存过期时间规则配置
 */
export interface StatusCodeCacheRule {
  /**
      * http 状态码
支持 403、404 状态码
      */
  StatusCode: string

  /**
   * 状态码缓存过期时间，单位秒
   */
  CacheTime: number
}

/**
 * https 客户端证书配置
 */
export interface ClientCert {
  /**
      * 客户端证书
PEM 格式，需要进行 Base 64 编码
注意：此字段可能返回 null，表示取不到有效值。
      */
  Certificate: string

  /**
      * 客户端证书名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  CertName?: string

  /**
      * 证书过期时间
作为入参时无需填充
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExpireTime?: string

  /**
      * 证书颁发时间
作为入参时无需填充
注意：此字段可能返回 null，表示取不到有效值。
      */
  DeployTime?: string
}

/**
 * SCDN攻击数据Top展示
 */
export interface ScdnTopData {
  /**
   * 时间
   */
  Time: string

  /**
   * 数值
   */
  Value: number

  /**
   * 运营商
   */
  Isp: string

  /**
   * IP地址
   */
  Ip: string

  /**
   * 区域
   */
  District: string
}

/**
 * 日志包下载链接详情
 */
export interface DomainLog {
  /**
   * 日志包起始时间
   */
  StartTime: string

  /**
   * 日志包结束时间
   */
  EndTime: string

  /**
   * 日志包下载链接
   */
  LogPath: string

  /**
      * 日志包对应加速区域
mainland：境内
overseas：境外
      */
  Area: string

  /**
   * 日志包文件名
   */
  LogName: string
}

/**
 * GetDisableRecords请求参数结构体
 */
export interface GetDisableRecordsRequest {
  /**
   * 开始时间，如：2018-12-12 10:24:00。
   */
  StartTime: string

  /**
   * 结束时间，如：2018-12-14 10:24:00。
   */
  EndTime: string

  /**
   * 指定 URL 查询
   */
  Url?: string

  /**
      * URL 当前状态
disable：当前仍为禁用状态，访问返回 403
enable：当前为可用状态，已解禁，可正常访问
      */
  Status?: string

  /**
   * 分页查询偏移量，默认为 0
   */
  Offset?: number

  /**
   * 分页查询限制数目，默认为20。
   */
  Limit?: number
}

/**
 * PurgeUrlsCache返回参数结构体
 */
export interface PurgeUrlsCacheResponse {
  /**
   * 刷新任务 ID，同一批次提交的 URL 共用一个任务 ID
   */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteClsLogTopic返回参数结构体
 */
export interface DeleteClsLogTopicResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBillingData返回参数结构体
 */
export interface DescribeBillingDataResponse {
  /**
      * 时间粒度，根据查询时传递参数指定：
min：1 分钟粒度
5min：5 分钟粒度
hour：1 小时粒度
day：天粒度
      */
  Interval?: string

  /**
   * 数据明细
   */
  Data?: Array<ResourceBillingData>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisableCaches返回参数结构体
 */
export interface DisableCachesResponse {
  /**
      * 提交结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  CacheOptResult?: CacheOptResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 作为CacheKey的一部分
 */
export interface SchemeKey {
  /**
      * on | off 是否使用scheme作为cache key的一部分
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch: string
}

/**
 * DescribeImageConfig请求参数结构体
 */
export interface DescribeImageConfigRequest {
  /**
   * 域名
   */
  Domain: string
}

/**
 * DescribeCdnIp返回参数结构体
 */
export interface DescribeCdnIpResponse {
  /**
   * 查询的节点归属详情。
   */
  Ips?: Array<CdnIp>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 缓存配置高级版本规则
 */
export interface AdvanceCacheRule {
  /**
      * 规则类型：
all：所有文件生效
file：指定文件后缀生效
directory：指定路径生效
path：指定绝对路径生效
default：源站未返回 max-age 情况下的缓存规则
注意：此字段可能返回 null，表示取不到有效值。
      */
  CacheType: string

  /**
      * 对应类型下的匹配内容：
all 时填充 *
file 时填充后缀名，如 jpg、txt
directory 时填充路径，如 /xxx/test/
path 时填充绝对路径，如 /xxx/test.html
default 时填充 "no max-age"
注意：此字段可能返回 null，表示取不到有效值。
      */
  CacheContents: Array<string>

  /**
      * 缓存过期时间
单位为秒，最大可设置为 365 天
注意：此字段可能返回 null，表示取不到有效值。
      */
  CacheTime: number
}

/**
 * DescribeIpStatus返回参数结构体
 */
export interface DescribeIpStatusResponse {
  /**
   * 节点列表
   */
  Ips?: Array<IpStatus>

  /**
   * 节点总个数
   */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDistrictIspData请求参数结构体
 */
export interface DescribeDistrictIspDataRequest {
  /**
   * 域名列表，最多支持20个域名
   */
  Domains: Array<string>

  /**
      * 查询起始时间，如：2018-09-04 10:40:00，返回结果大于等于指定时间
支持近 60 天内的数据查询，每次查询时间区间为 3 小时
      */
  StartTime: string

  /**
      * 查询结束时间，如：2018-09-04 10:40:00，返回结果小于等于指定时间
结束时间与起始时间区间最大为 3 小时
      */
  EndTime: string

  /**
      * 指定查询指标，支持:
bandwidth：带宽，单位为 bps
request：请求数，单位为 次
      */
  Metric: string

  /**
      * 指定省份查询，不填充表示查询所有省份
省份、国家/地区编码可以查看 [省份编码映射](https://cloud.tencent.com/document/product/228/6316#.E5.8C.BA.E5.9F.9F-.2F-.E8.BF.90.E8.90.A5.E5.95.86.E6.98.A0.E5.B0.84.E8.A1.A8)
      */
  Districts?: Array<number>

  /**
      * 指定运营商查询，不填充表示查询所有运营商
运营商编码可以查看 [运营商编码映射](https://cloud.tencent.com/document/product/228/6316#.E5.8C.BA.E5.9F.9F-.2F-.E8.BF.90.E8.90.A5.E5.95.86.E6.98.A0.E5.B0.84.E8.A1.A8)
      */
  Isps?: Array<number>

  /**
      * 指定协议查询，不填充表示查询所有协议
all：所有协议
http：指定查询 HTTP 对应指标
https：指定查询 HTTPS 对应指标
      */
  Protocol?: string

  /**
      * 指定IP协议查询，不填充表示查询所有协议
all：所有协议
ipv4：指定查询 ipv4 对应指标
ipv6：指定查询 ipv6 对应指标
指定IP协议查询时，不可同时指定省份、运营商查询
      */
  IpProtocol?: string
}

/**
 * 缓存键配置（过滤参数配置）
 */
export interface CacheKey {
  /**
      * 是否开启全路径缓存
on：开启全路径缓存（即关闭参数过滤）
off：关闭全路径缓存（即开启参数过滤）
      */
  FullUrlCache?: string

  /**
      * 是否忽略大小写缓存
注意：此字段可能返回 null，表示取不到有效值。
      */
  IgnoreCase?: string

  /**
      * CacheKey中包含请求参数
注意：此字段可能返回 null，表示取不到有效值。
      */
  QueryString?: QueryStringKey

  /**
      * CacheKey中包含Cookie
注意：此字段可能返回 null，表示取不到有效值。
      */
  Cookie?: CookieKey

  /**
      * CacheKey中包含请求头部
注意：此字段可能返回 null，表示取不到有效值。
      */
  Header?: HeaderKey

  /**
      * CacheKey中包含自定义字符串
注意：此字段可能返回 null，表示取不到有效值。
      */
  CacheTag?: CacheTagKey

  /**
      * CacheKey中包含请求协议
注意：此字段可能返回 null，表示取不到有效值。
      */
  Scheme?: SchemeKey

  /**
      * 分路径缓存键配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  KeyRules?: Array<KeyRule>
}

/**
 * URL重定向配置
 */
export interface UrlRedirect {
  /**
      * URL重定向配置开关
on：开启
off：关闭
      */
  Switch: string

  /**
      * URL重定向规则，当Switch为on时必填，规则数量最大为10个。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PathRules?: Array<UrlRedirectRule>
}

/**
 * 单链接下行限速配置，默认为关闭状态
 */
export interface DownstreamCapping {
  /**
      * 下行速度配置开关
on：开启
off：关闭
      */
  Switch: string

  /**
      * 下行限速规则
注意：此字段可能返回 null，表示取不到有效值。
      */
  CappingRules?: Array<CappingRule>
}

/**
 * 组成CacheKey的一部分
 */
export interface CookieKey {
  /**
      * on | off 是否使用Cookie作为Cache的一部分
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch: string

  /**
      * 使用的cookie，';' 分割
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value?: string
}

/**
 * VerifyDomainRecord请求参数结构体
 */
export interface VerifyDomainRecordRequest {
  /**
   * 域名
   */
  Domain: string
}

/**
 * 缓存键分路径配置
 */
export interface KeyRule {
  /**
      * CacheType 对应类型下的匹配内容：
file 时填充后缀名，如 jpg、txt
directory 时填充路径，如 /xxx/test
path 时填充绝对路径，如 /xxx/test.html
index 时填充 /
注意：此字段可能返回 null，表示取不到有效值。
      */
  RulePaths: Array<string>

  /**
      * 规则类型：
file：指定文件后缀生效
directory：指定路径生效
path：指定绝对路径生效
index：首页
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleType: string

  /**
      * 是否开启全路径缓存
on：开启全路径缓存（即关闭参数过滤）
off：关闭全路径缓存（即开启参数过滤）
注意：此字段可能返回 null，表示取不到有效值。
      */
  FullUrlCache: string

  /**
      * 是否忽略大小写缓存
注意：此字段可能返回 null，表示取不到有效值。
      */
  IgnoreCase: string

  /**
      * CacheKey中包含请求参数
注意：此字段可能返回 null，表示取不到有效值。
      */
  QueryString: RuleQueryString

  /**
      * 路径缓存键标签，传 user
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleTag: string
}

/**
 * 下行限速配置规则，最多可配置 100 条
 */
export interface CappingRule {
  /**
      * 规则类型：
all：所有文件生效
file：指定文件后缀生效
directory：指定路径生效
path：指定绝对路径生效
      */
  RuleType: string

  /**
      * RuleType 对应类型下的匹配内容： 
all 时填充 *
file 时填充后缀名，如 jpg、txt
directory 时填充路径，如 /xxx/test/
path 时填充绝对路径，如 /xxx/test.html
      */
  RulePaths: Array<string>

  /**
   * 下行速度值设置，单位为 KB/s
   */
  KBpsThreshold: number
}

/**
 * ListClsLogTopics请求参数结构体
 */
export interface ListClsLogTopicsRequest {
  /**
   * 接入渠道，默认值为cdn
   */
  Channel?: string
}

/**
 * SEO 搜索引擎优化配置，默认为关闭状态
 */
export interface Seo {
  /**
      * SEO 配置开关
on：开启
off：关闭
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch: string
}

/**
 * 带宽封顶配置，默认为关闭状态
 */
export interface BandwidthAlert {
  /**
      * 带宽封顶配置开关
on：开启
off：关闭
      */
  Switch: string

  /**
      * 带宽封顶阈值，单位为bps
注意：此字段可能返回 null，表示取不到有效值。
      */
  BpsThreshold?: number

  /**
      * 达到阈值后的操作
RESOLVE_DNS_TO_ORIGIN：直接回源，仅自有源站域名支持
RETURN_404：全部请求返回 404
注意：此字段可能返回 null，表示取不到有效值。
      */
  CounterMeasure?: string

  /**
      * 上次触发带宽封顶阈值的时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  LastTriggerTime?: string
}

/**
 * CreateVerifyRecord请求参数结构体
 */
export interface CreateVerifyRecordRequest {
  /**
   * 要取回的域名
   */
  Domain: string
}

/**
 * CLS日志搜索对象
 */
export interface ClsLogObject {
  /**
   * 主题ID
   */
  TopicId: string

  /**
   * 主题名字
   */
  TopicName: string

  /**
   * 日志时间
   */
  Timestamp: string

  /**
   * 日志内容
   */
  Content: string

  /**
   * 采集路径
   */
  Filename: string

  /**
   * 日志来源设备
   */
  Source: string
}

/**
 * 区域映射id和子区域id的关联信息。
 */
export interface RegionMapRelation {
  /**
   * 区域ID。
   */
  RegionId: number

  /**
   * 子区域ID列表
   */
  SubRegionIdList: Array<number>
}

/**
 * PurgePathCache请求参数结构体
 */
export interface PurgePathCacheRequest {
  /**
   * 目录列表，需要包含协议头部 http:// 或 https://
   */
  Paths: Array<string>

  /**
      * 刷新类型
flush：刷新产生更新的资源
delete：刷新全部资源
      */
  FlushType: string
}

/**
 * 访问明细数据类型
 */
export interface CdnData {
  /**
      * 查询指定的指标名称：
flux：流量，单位为 byte
bandwidth：带宽，单位为 bps
request：请求数，单位为 次
fluxHitRate：流量命中率，单位为 %
statusCode：状态码，返回 2XX、3XX、4XX、5XX 汇总数据，单位为 个
2XX：返回 2XX 状态码汇总及各 2 开头状态码数据，单位为 个
3XX：返回 3XX 状态码汇总及各 3 开头状态码数据，单位为 个
4XX：返回 4XX 状态码汇总及各 4 开头状态码数据，单位为 个
5XX：返回 5XX 状态码汇总及各 5 开头状态码数据，单位为 个
或指定查询的某一具体状态码
      */
  Metric: string

  /**
   * 明细数据组合
   */
  DetailData: Array<TimestampData>

  /**
   * 汇总数据组合
   */
  SummarizedData: SummarizedData
}

/**
 * PurgeUrlsCache请求参数结构体
 */
export interface PurgeUrlsCacheRequest {
  /**
   * URL 列表，需要包含协议头部 http:// 或 https://
   */
  Urls: Array<string>

  /**
      * 刷新区域
无此参数时，默认刷新加速域名所在加速区域
填充 mainland 时，仅刷新中国境内加速节点上缓存内容
填充 overseas 时，仅刷新中国境外加速节点上缓存内容
指定刷新区域时，需要与域名加速区域匹配
      */
  Area?: string
}

/**
 * StartCdnDomain请求参数结构体
 */
export interface StartCdnDomainRequest {
  /**
      * 域名
域名状态需要为【已停用】
      */
  Domain: string
}

/**
 * 跨国回源优化配置，默认为关闭状态（功能灰度中，尚未全量）
 */
export interface OriginPullOptimization {
  /**
      * 跨国回源优化配置开关
on：开启
off：关闭
      */
  Switch: string

  /**
      * 跨国类型
OVToCN：境外回源境内
CNToOV：境内回源境外
注意：此字段可能返回 null，表示取不到有效值。
      */
  OptimizationType?: string
}

/**
 * 状态码重定向配置，默认为关闭状态（功能灰度中，尚未全量）
 */
export interface ErrorPage {
  /**
      * 状态码重定向配置开关
on：开启
off：关闭
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch: string

  /**
      * 状态码重定向规则配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageRules?: Array<ErrorPageRule>
}

/**
 * 预热任务详情
 */
export interface PushTask {
  /**
   * 预热任务 ID
   */
  TaskId: string

  /**
   * 预热 URL
   */
  Url: string

  /**
      * 预热任务状态
fail：预热失败
done：预热成功
process：预热中
      */
  Status: string

  /**
   * 预热进度百分比
   */
  Percent: number

  /**
   * 预热任务提交时间
   */
  CreateTime: string

  /**
      * 预热区域
mainland：境内
overseas：境外
global：全球
      */
  Area: string

  /**
      * 预热任务更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string
}

/**
 * 时间戳与其对应的数值
 */
export interface TimestampData {
  /**
      * 数据统计时间点，采用向前汇总模式
以 5 分钟粒度为例，13:35:00 时间点代表的统计数据区间为 13:35:00 至 13:39:59
      */
  Time: string

  /**
   * 数据值
   */
  Value: number
}

/**
 * StartCdnDomain返回参数结构体
 */
export interface StartCdnDomainResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePushQuota请求参数结构体
 */
export type DescribePushQuotaRequest = null

/**
 * 源站头部缓存配置，默认为开启状态，缓存所有头部信息
 */
export interface ResponseHeaderCache {
  /**
      * 源站头部缓存开关
on：开启
off：关闭
      */
  Switch: string
}

/**
 * 计费数据明细
 */
export interface ResourceBillingData {
  /**
      * 资源名称，根据查询条件不同分为以下几类：
某一个具体域名：表示该域名明细数据
multiDomains：表示多域名汇总明细数据
某一个项目 ID：指定项目查询时，显示为项目 ID
all：账号维度数据明细
      */
  Resource: string

  /**
   * 计费数据详情
   */
  BillingData: Array<CdnData>
}

/**
 * 查询结果排序条件
 */
export interface Sort {
  /**
      * 排序字段，当前支持：
createTime，域名创建时间
certExpireTime，证书过期时间
默认createTime。
      */
  Key?: string

  /**
   * asc/desc，默认desc。
   */
  Sequence?: string
}

/**
 * DescribePurgeTasks请求参数结构体
 */
export interface DescribePurgeTasksRequest {
  /**
      * 指定刷新类型查询
url：url 刷新记录
path：目录刷新记录
      */
  PurgeType?: string

  /**
   * 根据时间区间查询时，填充开始时间，如 2018-08-08 00:00:00
   */
  StartTime?: string

  /**
   * 根据时间区间查询时，填充结束时间，如 2018-08-08 23:59:59
   */
  EndTime?: string

  /**
      * 根据任务 ID 查询时，填充任务 ID
查询时任务 ID 与起始时间必须填充一项
      */
  TaskId?: string

  /**
   * 分页查询偏移量，默认为 0
   */
  Offset?: number

  /**
   * 分页查询限制数目，默认为 20
   */
  Limit?: number

  /**
   * 支持域名过滤，或 http(s):// 开头完整 URL 过滤
   */
  Keyword?: string

  /**
      * 指定任务状态查询
fail：刷新失败
done：刷新成功
process：刷新中
      */
  Status?: string

  /**
      * 指定刷新地域查询
mainland：境内
overseas：境外
global：全球
      */
  Area?: string
}

/**
 * PushUrlsCache返回参数结构体
 */
export interface PushUrlsCacheResponse {
  /**
   * 此批提交的任务 ID
   */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopCdnDomain返回参数结构体
 */
export interface StopCdnDomainResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 组成CacheKey的一部分
 */
export interface QueryStringKey {
  /**
      * on | off CacheKey是否由QueryString组成
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch: string

  /**
      * 是否重新排序
注意：此字段可能返回 null，表示取不到有效值。
      */
  Reorder?: string

  /**
      * includeAll | excludeAll | includeCustom | excludeAll 使用/排除部分url参数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Action?: string

  /**
      * 使用/排除的url参数数组，';' 分割
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value?: string
}

/**
 * ListTopData返回参数结构体
 */
export interface ListTopDataResponse {
  /**
   * 各个资源的Top 访问数据详情。
   */
  Data?: Array<TopData>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 浏览器缓存规则配置，用于设置 MaxAge 默认值，默认为关闭状态（功能灰度中，尚未全量）
 */
export interface MaxAge {
  /**
      * 浏览器缓存配置开关
on：开启
off：关闭
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch: string

  /**
      * MaxAge 规则
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxAgeRules?: Array<MaxAgeRule>
}

/**
 * UpdateDomainConfig返回参数结构体
 */
export interface UpdateDomainConfigResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 日志集信息
 */
export interface LogSetInfo {
  /**
   * 开发者ID
   */
  AppId: number

  /**
      * 渠道
注意：此字段可能返回 null，表示取不到有效值。
      */
  Channel: string

  /**
   * 日志集ID
   */
  LogsetId: string

  /**
   * 日志集名字
   */
  LogsetName: string

  /**
   * 是否默认日志集
   */
  IsDefault: number

  /**
   * 日志保存时间，单位为天
   */
  LogsetSavePeriod: number

  /**
   * 创建日期
   */
  CreateTime: string

  /**
   * 区域
   */
  Region: string
}

/**
 * scdn相关的配置
 */
export interface SecurityConfig {
  /**
   * on|off
   */
  Switch: string
}

/**
 * SearchClsLog请求参数结构体
 */
export interface SearchClsLogRequest {
  /**
   * 需要查询的日志集ID
   */
  LogsetId: string

  /**
   * 需要查询的日志主题ID组合，以逗号分隔
   */
  TopicIds: string

  /**
   * 需要查询的日志的起始时间，格式 YYYY-mm-dd HH:MM:SS
   */
  StartTime: string

  /**
   * 需要查询的日志的结束时间，格式 YYYY-mm-dd HH:MM:SS
   */
  EndTime: string

  /**
   * 单次要返回的日志条数，单次返回的最大条数为100
   */
  Limit: number

  /**
   * 接入渠道，默认值为cdn
   */
  Channel?: string

  /**
   * 需要查询的内容，详情请参考https://cloud.tencent.com/document/product/614/16982
   */
  Query?: string

  /**
   * 加载更多使用，透传上次返回的 context 值，获取后续的日志内容，通过游标最多可获取10000条，请尽可能缩小时间范围
   */
  Context?: string

  /**
   * 按日志时间排序， asc（升序）或者 desc（降序），默认为 desc
   */
  Sort?: string
}

/**
 * UpdateDomainConfig请求参数结构体
 */
export interface UpdateDomainConfigRequest {
  /**
   * 域名
   */
  Domain: string

  /**
   * 项目 ID
   */
  ProjectId?: number

  /**
   * 源站配置
   */
  Origin?: Origin

  /**
   * IP 黑白名单配置
   */
  IpFilter?: IpFilter

  /**
   * IP 限频配置
   */
  IpFreqLimit?: IpFreqLimit

  /**
   * 状态码缓存配置
   */
  StatusCodeCache?: StatusCodeCache

  /**
   * 智能压缩配置
   */
  Compression?: Compression

  /**
   * 带宽封顶配置
   */
  BandwidthAlert?: BandwidthAlert

  /**
   * Range 回源配置
   */
  RangeOriginPull?: RangeOriginPull

  /**
   * 301/302 回源跟随配置
   */
  FollowRedirect?: FollowRedirect

  /**
   * 错误码重定向配置（功能灰度中，尚未全量）
   */
  ErrorPage?: ErrorPage

  /**
   * 请求头部配置
   */
  RequestHeader?: RequestHeader

  /**
   * 响应头部配置
   */
  ResponseHeader?: ResponseHeader

  /**
   * 下载速度配置
   */
  DownstreamCapping?: DownstreamCapping

  /**
   * 节点缓存键配置
   */
  CacheKey?: CacheKey

  /**
   * 头部缓存配置
   */
  ResponseHeaderCache?: ResponseHeaderCache

  /**
   * 视频拖拽配置
   */
  VideoSeek?: VideoSeek

  /**
   * 缓存过期时间配置
   */
  Cache?: Cache

  /**
   * 跨国链路优化配置
   */
  OriginPullOptimization?: OriginPullOptimization

  /**
   * Https 加速配置
   */
  Https?: Https

  /**
   * 时间戳防盗链配置
   */
  Authentication?: Authentication

  /**
   * SEO 优化配置
   */
  Seo?: Seo

  /**
   * 访问协议强制跳转配置
   */
  ForceRedirect?: ForceRedirect

  /**
   * Referer 防盗链配置
   */
  Referer?: Referer

  /**
   * 浏览器缓存配置（功能灰度中，尚未全量）
   */
  MaxAge?: MaxAge

  /**
      * 域名业务类型
web：静态加速
download：下载加速
media：流媒体点播加速
      */
  ServiceType?: string

  /**
      * 地域属性特殊配置
适用于域名境内加速、境外加速配置不一致场景
      */
  SpecificConfig?: SpecificConfig

  /**
      * 域名加速区域
mainland：中国境内加速
overseas：中国境外加速
global：全球加速
      */
  Area?: string

  /**
   * 回源超时配置
   */
  OriginPullTimeout?: OriginPullTimeout

  /**
   * 回源S3私有鉴权
   */
  AwsPrivateAccess?: AwsPrivateAccess

  /**
   * UA黑白名单配置
   */
  UserAgentFilter?: UserAgentFilter

  /**
   * 访问控制
   */
  AccessControl?: AccessControl

  /**
   * URL重定向配置
   */
  UrlRedirect?: UrlRedirect

  /**
   * 访问端口配置
   */
  AccessPort?: Array<number>
}

/**
 * s3源站回源鉴权。
 */
export interface AwsPrivateAccess {
  /**
   * 开关，on/off。
   */
  Switch: string

  /**
      * 访问ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AccessKey?: string

  /**
      * 密钥。
注意：此字段可能返回 null，表示取不到有效值。
      */
  SecretKey?: string
}

/**
 * ManageClsTopicDomains返回参数结构体
 */
export interface ManageClsTopicDomainsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 视频拖拽配置，默认为关闭状态
 */
export interface VideoSeek {
  /**
      * 视频拖拽开关
on：开启
off：关闭
      */
  Switch: string
}

/**
 * 是否兼容旧版配置
 */
export interface Compatibility {
  /**
      * 兼容标志状态码。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Code: number
}

/**
 * DescribeCdnData返回参数结构体
 */
export interface DescribeCdnDataResponse {
  /**
      * 返回数据的时间粒度，查询时指定：
min：1 分钟粒度
5min：5 分钟粒度
hour：1 小时粒度
day：天粒度
      */
  Interval?: string

  /**
   * 指定条件查询得到的数据明细
   */
  Data?: Array<ResourceData>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Cls日志搜索结果
 */
export interface ClsSearchLogs {
  /**
   * 获取更多检索结果的游标
   */
  Context: string

  /**
   * 搜索结果是否已经全部返回
   */
  Listover: boolean

  /**
   * 日志内容信息
   */
  Results: Array<ClsLogObject>
}

/**
 * DescribeUrlViolations返回参数结构体
 */
export interface DescribeUrlViolationsResponse {
  /**
      * 违规 URL 详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  UrlRecordList?: Array<ViolationUrl>

  /**
   * 记录总数，用于分页
   */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IP 黑白名单配置，默认为关闭状态
 */
export interface IpFilter {
  /**
      * IP 黑白名单配置开关
on：开启
off：关闭
      */
  Switch: string

  /**
      * IP 黑白名单类型
whitelist：白名单
blacklist：黑名单
注意：此字段可能返回 null，表示取不到有效值。
      */
  FilterType?: string

  /**
      * IP 黑白名单列表
支持 X.X.X.X 形式 IP，或 /8、 /16、/24 形式网段
最多可填充 50 个白名单或 50 个黑名单
注意：此字段可能返回 null，表示取不到有效值。
      */
  Filters?: Array<string>
}

/**
 * DescribePurgeTasks返回参数结构体
 */
export interface DescribePurgeTasksResponse {
  /**
      * 详细刷新记录
注意：此字段可能返回 null，表示取不到有效值。
      */
  PurgeLogs?: Array<PurgeTask>

  /**
      * 任务总数，用于分页
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Url重定向规则配置
 */
export interface UrlRedirectRule {
  /**
   * 重定向状态码，301 | 302
   */
  RedirectStatusCode: number

  /**
   * 待匹配的Url模式，支持完全路径匹配和正则匹配，最大长度1024字符。
   */
  Pattern: string

  /**
   * 目标URL，必须以“/”开头，最大长度1024字符。
   */
  RedirectUrl: string
}

/**
 * 状态码重定向规则配置
 */
export interface ErrorPageRule {
  /**
      * 状态码
支持 400、403、404、500
      */
  StatusCode: number

  /**
      * 重定向状态码设置
支持 301 或 302
      */
  RedirectCode: number

  /**
      * 重定向 URL
需要为完整跳转路径，如 https://www.test.com/error.html
      */
  RedirectUrl: string
}

/**
 * DescribeOriginData返回参数结构体
 */
export interface DescribeOriginDataResponse {
  /**
   * 数据统计的时间粒度，支持min, 5min, hour, day，分别表示1分钟，5分钟，1小时和1天的时间粒度。
   */
  Interval?: string

  /**
   * 各个资源的回源数据详情。
   */
  Data?: Array<ResourceOriginData>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 刷新任务详情
 */
export interface PurgeTask {
  /**
   * 刷新任务 ID
   */
  TaskId: string

  /**
   * 刷新 URL
   */
  Url: string

  /**
      * 刷新任务状态
fail：刷新失败
done：刷新成功
process：刷新中
      */
  Status: string

  /**
      * 刷新类型
url：URL 刷新
path：目录刷新
      */
  PurgeType: string

  /**
      * 刷新方式
flush：刷新更新资源（仅目录刷新时有此类型）
delete：刷新全部资源
      */
  FlushType: string

  /**
   * 刷新任务提交时间
   */
  CreateTime: string
}

/**
 * 回源超时配置
 */
export interface OriginPullTimeout {
  /**
      * 回源建连超时时间，单位为秒，要求5~60之间
注意：此字段可能返回 null，表示取不到有效值。
      */
  ConnectTimeout: number

  /**
      * 回源接收超时时间，单位为秒，要求10 ~ 60之间
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReceiveTimeout: number
}

/**
 * DeleteCdnDomain返回参数结构体
 */
export interface DeleteCdnDomainResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IP 属性信息
 */
export interface CdnIp {
  /**
   * 指定查询的 IP
   */
  Ip: string

  /**
      * IP 归属：
yes：节点归属于腾讯云 CDN
no：节点不属于腾讯云 CDN
      */
  Platform: string

  /**
      * 节点所处的省份/国家
unknown 表示节点位置未知
      */
  Location: string

  /**
   * 节点上下线历史记录
   */
  History: Array<CdnIpHistory>

  /**
      * 节点的所在区域
mainland：中国境内加速节点
overseas：中国境外加速节点
unknown：服务地域无法获取
      */
  Area: string
}

/**
 * DescribeCdnData请求参数结构体
 */
export interface DescribeCdnDataRequest {
  /**
      * 查询起始时间，如：2018-09-04 10:40:00，返回结果大于等于指定时间
根据指定时间粒度不同，会进行向前归整，如 2018-09-04 10:40:00 在按 1 小时的时间粒度查询时，返回的第一个数据对应时间点为 2018-09-04 10:00:00
起始时间与结束时间间隔小于等于 90 天
      */
  StartTime: string

  /**
      * 查询结束时间，如：2018-09-04 10:40:00，返回结果小于等于指定时间
根据指定时间粒度不同，会进行向前归整，如 2018-09-04 10:40:00 在按 1 小时的时间粒度查询时，返回的最后一个数据对应时间点为 2018-09-04 10:00:00
起始时间与结束时间间隔小于等于 90 天
      */
  EndTime: string

  /**
      * 指定查询指标，支持的类型有：
flux：流量，单位为 byte
bandwidth：带宽，单位为 bps
request：请求数，单位为 次
fluxHitRate：流量命中率，单位为 %
statusCode：状态码，返回 2xx、3xx、4xx、5xx 汇总数据，单位为 个
2xx：返回 2xx 状态码汇总及各 2 开头状态码数据，单位为 个
3xx：返回 3xx 状态码汇总及各 3 开头状态码数据，单位为 个
4xx：返回 4xx 状态码汇总及各 4 开头状态码数据，单位为 个
5xx：返回 5xx 状态码汇总及各 5 开头状态码数据，单位为 个
支持指定具体状态码查询，若未产生过，则返回为空
      */
  Metric: string

  /**
      * 指定查询域名列表
最多可一次性查询 30 个加速域名明细
      */
  Domains?: Array<string>

  /**
      * 指定要查询的项目 ID，[前往查看项目 ID](https://console.cloud.tencent.com/project)
未填充域名情况下，指定项目查询，若填充了具体域名信息，以域名为主
      */
  Project?: number

  /**
      * 时间粒度，支持以下几种模式：
min：1 分钟粒度，指定查询区间 24 小时内（含 24 小时），可返回 1 分钟粒度明细数据（指定查询服务地域为中国境外时不支持 1 分钟粒度）
5min：5 分钟粒度，指定查询区间 31 天内（含 31 天），可返回 5 分钟粒度明细数据
hour：1 小时粒度，指定查询区间 31 天内（含 31 天），可返回 1 小时粒度明细数据
day：天粒度，指定查询区间大于 31 天，可返回天粒度明细数据
      */
  Interval?: string

  /**
      * 多域名查询时，默认（false)返回多个域名的汇总数据
可按需指定为 true，返回每一个 Domain 的明细数据（statusCode 指标暂不支持）
      */
  Detail?: boolean

  /**
      * 查询中国境内CDN数据时，指定运营商查询，不填充表示查询所有运营商
运营商编码可以查看 [运营商编码映射](https://cloud.tencent.com/document/product/228/6316#.E5.8C.BA.E5.9F.9F-.2F-.E8.BF.90.E8.90.A5.E5.95.86.E6.98.A0.E5.B0.84.E8.A1.A8)
指定运营商查询时，不可同时指定省份、IP协议查询
      */
  Isp?: number

  /**
      * 查询中国境内CDN数据时，指定省份查询，不填充表示查询所有省份
查询中国境外CDN数据时，指定国家/地区查询，不填充表示查询所有国家/地区
省份、国家/地区编码可以查看 [省份编码映射](https://cloud.tencent.com/document/product/228/6316#.E5.8C.BA.E5.9F.9F-.2F-.E8.BF.90.E8.90.A5.E5.95.86.E6.98.A0.E5.B0.84.E8.A1.A8)
指定（中国境内）省份查询时，不可同时指定运营商、IP协议查询
      */
  District?: number

  /**
      * 指定协议查询，不填充表示查询所有协议
all：所有协议
http：指定查询 HTTP 对应指标
https：指定查询 HTTPS 对应指标
      */
  Protocol?: string

  /**
   * 指定数据源查询，白名单功能
   */
  DataSource?: string

  /**
      * 指定IP协议查询，不填充表示查询所有协议
all：所有协议
ipv4：指定查询 ipv4 对应指标
ipv6：指定查询 ipv6 对应指标
指定IP协议查询时，不可同时指定省份、运营商查询
注意：非IPv6白名单用户不可指定ipv4、ipv6进行查询
      */
  IpProtocol?: string

  /**
      * 指定服务地域查询，不填充表示查询中国境内CDN数据
mainland：指定查询中国境内 CDN 数据
overseas：指定查询中国境外 CDN 数据
      */
  Area?: string

  /**
      * 查询中国境外CDN数据时，可指定地区类型查询，不填充表示查询服务地区数据（仅在 Area 为 overseas 时可用）
server：指定查询服务地区（腾讯云 CDN 节点服务器所在地区）数据
client：指定查询客户端地区（用户请求终端所在地区）数据
      */
  AreaType?: string
}

/**
 * DescribeImageConfig返回参数结构体
 */
export interface DescribeImageConfigResponse {
  /**
      * WebpAdapter配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  WebpAdapter?: WebpAdapter

  /**
      * TpgAdapter配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  TpgAdapter?: TpgAdapter

  /**
      * GuetzliAdapter配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  GuetzliAdapter?: GuetzliAdapter

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 组成CacheKey的一部分
 */
export interface CacheTagKey {
  /**
      * 是否使用CacheTag作为CacheKey的一部分
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch: string

  /**
      * 自定义CacheTag的值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value?: string
}

/**
 * Scdn饼图数据，waf仅有
 */
export interface ScdnTypeData {
  /**
   * 攻击类型
   */
  AttackType: string

  /**
   * 攻击值
   */
  Value: number
}

/**
 * DescribeDomains请求参数结构体
 */
export interface DescribeDomainsRequest {
  /**
   * 分页查询偏移量，默认为 0
   */
  Offset?: number

  /**
   * 分页查询限制数目，默认为 100，最大可设置为 1000
   */
  Limit?: number

  /**
   * 查询条件过滤器，复杂类型
   */
  Filters?: Array<DomainFilter>
}
